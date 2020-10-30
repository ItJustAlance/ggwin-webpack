<template lang="pug">
#app.over
  Header
  router-view
</template>

<script>

import Header from '@/components/header/Header';

export default {
  name: 'app',
  components: {Header },
};
</script>
<style lang="sass">
body
  background: #0B0B0D
</style>
