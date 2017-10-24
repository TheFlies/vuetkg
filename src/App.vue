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

// .black-text {
//   color: #000;
// }

// .white-text {
//   color: #ccc;
// }

// .card .image.featured:first-child img {
//   border-top-left-radius: 12px;
//   border-top-right-radius: 12px;
//   margin-top: -3em;
// 	margin-bottom: 2em;
// }

// .card .image.featured:last-child img {
//   border-bottom-left-radius: 12px;
//   border-bottom-right-radius: 12px;
//   margin-bottom: -3em;
// 	margin-top: 2em;
// }

// .card .image.featured {
// 	border-radius: 0;
// 	display: block;
// 	margin: 0em 0 0em -3em;
// 	position: relative;
// 	width: calc(100% + 6em);
// }

// .card .image.featured img {
//     display: block;
//     width: 100%;
// }

// /*угловые ленты*/
// .ribbon {
//   position: absolute;
//   padding: 2px 0;
//   background-color: #00B847;
//   background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.00)), to(rgba(0, 0, 0, 0.15)));
//   background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.00), rgba(0, 0, 0, 0.15));
//   background-image: -moz-linear-gradient(top, rgba(0, 0, 0, 0.00), rgba(0, 0, 0, 0.15));
//   background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0.00), rgba(0, 0, 0, 0.15));
//   background-image: -ms-linear-gradient(top, rgba(0, 0, 0, 0.00), rgba(0, 0, 0, 0.15));
//   background-image: linear-gradient(top, rgba(0, 0, 0, 0.00), rgba(0, 0, 0, 0.15));
//   filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr='#000000', EndColorStr='#000000');
//   -webkit-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5);
//   box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5);
//   z-index: 9999;
// }

// .ribbon a,
// .ribbon a:hover {
//   font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
//   font-size: 13px;
//   font-weight: 700;
//   color: white;
//   text-decoration: none;
//   text-shadow: 0 -1px rgba(0,0,0,0.5);
//   text-align: center;
//   width: 200px;
//   line-height: 20px;
//   display: inline-block;
//   padding: 2px 0;
//   border-width: 1px 0;
//   border-style: dotted;
//   border-color: rgba(255,255,255,0.7);
// }

// .box .ribbon {
//   top: 42px;
//   right: -43px;
//   -webkit-transform: rotate(45deg);
//   -moz-transform: rotate(45deg);
//   -o-transform: rotate(45deg);
//   transform: rotate(45deg);
// }
// /*угловые ленты*/


// header.major p {
// 	display: inline-block;
// 	border-top: solid 2px #e5e5e5;
// 	color: #777;
// 	margin: 1.5em 0 0 0;
// 	padding: 1.5em 0 0 0;
//   font-style: normal;
//   font-size: 1.25em;
// }

// .major.fa {
//   background: #666;
// 	border-radius: 100%;
// 	color: #ffffff;
// 	cursor: default;
// 	display: inline-block;
// 	height: 5.5em;
// 	line-height: 5.5em;
// 	margin: 0 0 2em 0;
// 	width: 5.5em;
// }

// .major.fa {
//   background: #666;
// 	border-radius: 100%;
// 	color: #ffffff;
// 	cursor: default;
// 	display: inline-block;
// 	height: 5.5em;
// 	line-height: 5.5em;
// 	margin: 0 0 2em 0;
// 	width: 5.5em;
// }

// .major.fa:before {
// 	font-size: 2.5em;
// }

// .major.fa.accent1 {
// 	background: #666;
// 	color: #ffffff;
// }

// .major.fa.accent2 {
// 	background: #e89980;
// 	color: #ffffff;
// }

// .major.fa.accent3 {
// 	background: #7fcdb8;
// 	color: #ffffff;
// }

// .major.fa.accent4 {
// 	background: #90b0ba;
// 	color: #ffffff;
// }

// .major.fa.accent5 {
// 	background: #e5cb95;
// 	color: #ffffff;
// }


// .section.card, .section.coloms {
//   padding: 3em;
// }

// .box.coloms .coloms-row {
// 	border-top: solid 2px #e5e5e5;
// 	position: relative;
// }

// .box.coloms .coloms-row:after {
// 	clear: both;
// 	content: '';
// 	display: block;
// }

// .box.coloms .coloms-row section {
// 	float: left;
// 	padding: 3em;
// 	width: 50%;
// }

// .box.coloms .coloms-row section :last-child {
// 	margin-bottom: 0;
// }

// .box.coloms .coloms-row section:nth-child(2n) {
// 	padding-right: 0;
// }

// .box.coloms .coloms-row section:nth-child(2n):before {
// 	background: #e5e5e5;
// 	content: '';
// 	display: block;
// 	height: 100%;
// 	margin-left: -3em;
// 	position: absolute;
// 	top: 0;
// 	width: 2px;
// }

// .box.coloms .coloms-row section:nth-child(2n-1) {
// 	padding-left: 0;
// }

// .box.coloms .coloms-row:first-child {
// 	border-top: 0;
// }

// .box.coloms .coloms-row:first-child section {
// 	padding-top: 0;
// }

// .box.coloms .coloms-row:last-child {
// 	padding-bottom: 0;
// }

// .box.coloms .coloms-row:last-child section {
// 	padding-bottom: 0;
// }

// // login and register for small phone
// @media (max-width: 575px) {
//   .card-register {
//     max-width: 100%;
//   }
// }
// // no selection
// .noselect {
//   -webkit-touch-callout: none; /* iOS Safari */
//     -webkit-user-select: none; /* Safari */
//      -khtml-user-select: none; /* Konqueror HTML */
//        -moz-user-select: none; /* Firefox */
//         -ms-user-select: none; /* Internet Explorer/Edge */
//             user-select: none; /* Non-prefixed version, currently
//                                   supported by Chrome and Opera */
//                  cursor: default;
// }

// // override presentation-title padding for text like `g` 'y``
// .presentation-title {
//   padding-bottom: 10px;
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
