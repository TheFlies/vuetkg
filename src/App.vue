<script lang="ts">
// <template lang="pug">
// #app
//   transition(name="fade")
//     router-view
//   vue-progress-bar
// </template>

</script>

<template>
  <div>
    <transition name="fade">
      hello
    </transition>
  </div>
</template>

<style lang="scss">
// My customize color
// $primary-color: #333333;
$body-bg: #ddd;
$body-color: #111;
$font-family-sans-serif: 'Roboto', Arial, sans-serif;

$theme-colors: (
  "primary": #333333
);

// @import './assets/css/font-awesome.min.css';

// @import '~bootstrap/scss/bootstrap';

// @import './assets/scss/style.scss';

// @import '~bootstrap-vue/dist/bootstrap-vue.css';

body {
  background-color: #ddd;
}
</style>
