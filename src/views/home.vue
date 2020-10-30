<template lang="pug">
.home
  PostForm
  img(src='@/assets/card__img--gallery.jpg')
  img(src="@/assets/copy_icon.png")

  SvgIcon(name="arrow" title="Название")

  <img src="@/assets/slider__img--main-page-1.jpg">
    //img(src="./assets/copy_icon.png")
  router-link(to="/about") route about2

  //svg-icon(:name="arrow")
  // img(src="../assets/copy_icon.png")
  .post(v-for="post in allPosts" :key="post.id")
    h2 {{post.title}}
    .desc {{post.body}}



</template>

<script>
import {mapGetters, mapActions} from 'vuex';
// импортирует компонент
import PostForm from '@/components/post-form/PostForm';
import SvgIcon from '@/components/SvgIcon';

export default {

  // реагирует на изменение геттера
  computed: mapGetters(['allPosts']),
  methods: mapActions(['fetchPosts']),
  // регистрируем как компонент PostForm
  components: {SvgIcon, PostForm },
  async mounted() {
    // this.$store.dispatch("fetchPosts"); вызываем action, первым параметром передаем название экшена т.е. "fetchPosts"
    // this.fetchPosts(); обращаемся уже через mapAction внутренний метод
    this.fetchPosts();
  },

};
</script>
