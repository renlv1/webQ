<template>
  <div id="app">
    <v-header ref="header"></v-header>
    <router-view/>
    <v-footer/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    vHeader: resolve => require(['./components/header.vue'], resolve),
    vFooter: resolve => require(['./components/footer.vue'], resolve)
  }
}
</script>

<style>
  @import "assets/css/common.css";
  @import "assets/css/swiper.css";
</style>
