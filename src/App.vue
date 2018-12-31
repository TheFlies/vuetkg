<template lang="pug">
#app
  transition(name="fade")
    router-view
  vue-progress-bar
</template>

<script>
export default {
  mounted() {
    this.$Progress.finish()
  },
  created() {
    this.$Progress.start()
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        this.$Progress.parseMeta(meta)
      }
      this.$Progress.start()
      next()
    })

    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  }
}
</script>

<style lang="scss">
// My customize color
// $primary-color: #333333;
$body-bg: #ddd;
$body-color: #111;
$font-family-sans-serif: 'Roboto', Arial, sans-serif;

$theme-colors: (
  "primary": #333333
);

@import './assets/css/font-awesome.min.css';

@import '~bootstrap/scss/bootstrap';

@import './assets/scss/style.scss';

@import '~bootstrap-vue/dist/bootstrap-vue.css';

body {
  background-color: #ddd;
}
</style>
