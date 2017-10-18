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
  name: 'app',
  mounted () {
    // require('../static/assets/js/util.js')
    // require('../static/assets/js/main.js')
  }
}
</script>

<style lang="scss">
// My customize color
$primary-color: #333333;
$font-family-sans-serif: 'Roboto', Arial, sans-serif;

@import './assets/pk-2.1.0/css/bootstrap.min.css';
@import './assets/pk-2.1.0/sass/paper-kit.scss';

// @import './assets/pk-2.1.0/css/demo.css';
// Libraries
// @import './assets/sass/html5up/main.scss';

// // Import Bulma's core
// @import "~bulma/sass/utilities/all";

// // Add a serif family
// $family-serif: "Roboto", "Georgia", serif;

// // Use the new pink as the primary color
// $primary: $dark;
// $primary-invert: findColorInvert($primary);

// // Setup $colors to use as bulma classes (e.g. 'is-twitter')
// $colors: (
//     "white": ($white, $black),
//     "black": ($black, $white),
//     "light": ($light, $light-invert),
//     "dark": ($dark, $dark-invert),
//     "primary": ($primary, $primary-invert),
//     "info": ($info, $info-invert),
//     "success": ($success, $success-invert),
//     "warning": ($warning, $warning-invert),
//     "danger": ($danger, $danger-invert)
// );

// // Links
// $link: $primary;
// $link-invert: $primary-invert;
// $link-focus-border: $primary;

// @import "~bulma";
// @import "~buefy/src/scss/buefy";
body {
  background-color: #ddd;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

.black-text {
  color: #000 !important;
}

.white-text {
  color: #ccc !important;
}

.card .image.featured:first-child img {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  margin-top: -3em;
	margin-bottom: 2em;
}

.card .image.featured:last-child img {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  margin-bottom: -3em;
	margin-top: 2em;
}

.card .image.featured {
	border-radius: 0;
	display: block;
	margin: 0em 0 0em -3em;
	position: relative;
	width: calc(100% + 6em);
}

.card .image.featured img {
    display: block;
    width: 100%;
}

/*угловые ленты*/
.ribbon {
  position: absolute;
  padding: 2px 0;
  background-color: #00B847;
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.00)), to(rgba(0, 0, 0, 0.15)));
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.00), rgba(0, 0, 0, 0.15));
  background-image: -moz-linear-gradient(top, rgba(0, 0, 0, 0.00), rgba(0, 0, 0, 0.15));
  background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0.00), rgba(0, 0, 0, 0.15));
  background-image: -ms-linear-gradient(top, rgba(0, 0, 0, 0.00), rgba(0, 0, 0, 0.15));
  background-image: linear-gradient(top, rgba(0, 0, 0, 0.00), rgba(0, 0, 0, 0.15));
  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr='#000000', EndColorStr='#000000');
  -webkit-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.ribbon a,
.ribbon a:hover {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: white;
  text-decoration: none;
  text-shadow: 0 -1px rgba(0,0,0,0.5);
  text-align: center;
  width: 200px;
  line-height: 20px;
  display: inline-block;
  padding: 2px 0;
  border-width: 1px 0;
  border-style: dotted;
  border-color: rgba(255,255,255,0.7);
}

.box .ribbon {
  top: 42px;
  right: -43px;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}
/*угловые ленты*/
</style>
