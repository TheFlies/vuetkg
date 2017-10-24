<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import jquery from '../static/assets/js/jquery.min.js'
// global.jQuery = jquery
// global.$ = jquery

// require('../static/assets/js/jquery.dropotron.min.js')

// require('../static/assets/js/jquery.scrollgress.min.js')

// import skel from '../static/assets/js/skel.min.js'
// global.skel = skel

export default {
  name: 'app'
}
</script>

<style lang="scss">
// My customize color
$primary-color: #333333;
$font-family-sans-serif: 'Roboto', Arial, sans-serif;

@import '~bootstrap/scss/bootstrap.scss';

@import 'assets/style.scss';

@import '~bootstrap-vue/dist/bootstrap-vue.css';
// @import './assets/pk-2.1.0/sass/paper-kit.scss';

body {
  background-color: #ddd;
}

// .fade-enter-active, .fade-leave-active {
//   transition: opacity .5s
// }

// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0
// }

// .dropdown.show .dropdown-menu .dropdown-item:hover {
//   color: #fff;
//   background-color: #f7765f;
// }

// @media screen and (max-width: 991px){
//   .dropdown.show .dropdown-menu,
//     .dropdown .dropdown-menu{
//     background-color: #FFFFFF;
//     border-radius: 12px;
//     height: auto;
//   }
// }
</style>
