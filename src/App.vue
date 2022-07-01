<script lang="ts">
// <template lang="pug">
// #app
//   transition(name="fade")
//     router-view
//   vue-progress-bar
// </template>
export default {
  name: 'app',
}
</script>

<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss">
// My customize color
$primary-color: #333333;

$body-bg: #ddd;
$body-color: #111;
$font-family-sans-serif: 'Roboto', Arial, sans-serif;

$theme-colors: (
  'primary': #333333,
);

// @import './assets/css/font-awesome.min.css';

// @import '~bootstrap/scss/bootstrap';

// @import './assets/scss/style.scss';

// @import '~bootstrap-vue/dist/bootstrap-vue.css';

body {
  @apply bg-gray-300 m-0;
}
</style>
