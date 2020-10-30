
// Компоненты Vue

// Всё, что относится к Vue
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueSocketIO from 'vue-socket.io';
import SocketIO from 'socket.io-client';
import routes from './router';
import store from './store';
import App from './App.vue';


// components jquery
import jqueryNicescroll from 'jquery.nicescroll';
Window.jqueryNicescroll = jqueryNicescroll;



// Подключение скриптов jquery

  // подключаем скролл
import './assets/js/scroll';

// Globally register all `_base`-prefixed components
import './components/_global';





// Активация плагинов Vue
Vue.use(Vuex);
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      // component: Home
      component: () => import('./views/main.vue')
    },
    {
      path: '/index',
      name: 'index',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/index.vue')
    },
  ]
});
Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('http://localhost:8080'),
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_',
  },
  // options: { path: `@/index.html`; }, // Optional options
}));




Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
