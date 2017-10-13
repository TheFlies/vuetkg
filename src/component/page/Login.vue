<template lang="pug">
#login.content
  b-field(label='i meo')
    b-input(value='teo_2_line')
</template>


<script>
import Vue from 'vue'
import Buefy from 'buefy'

Vue.use(Buefy)

import firebase from 'firebase'

export default {
  name: 'tkg-login',
  data() {
    return {
      coverShow: true,
      account: {
        email: '',
        password: ''
      },
      error: ''
    }
  },
  mounted() {
    // this.initMaterial()
  },
  updated() {
    // this.initMaterial()
  },
  methods: {
    // initMaterial() {
    //   $.material.init() // eslint-disable-line
    // },
    showGirl() {
      this.coverShow = true
    },
    hideGirl() {
      this.coverShow = false
    },
    login() {
      console.log(`Prepare login with: ${this.account.email} and ${this.account.password}`)
      this.error = ''
      if (!this.account.email || !this.account.password) {
        this.error = 'Missing email or password'
        return
      } else {
        firebase.auth().signInWithEmailAndPassword(this.account.email, this.account.password)
          .then((user) => { this.$router.replace('test-mdl') }, (err) => { this.error = err.message })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #8c67ef;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

// .content {
//   margin-top: 5%;
// }

// .btn {
//   background: #999999;
// }

// .card-header {
//   background-image: url('/static/assets/css/images/overlay.png'), url('/static/images/pic0111.jpg');
//   background-position: top right, center center;
//   background-repeat: no-repeat, no-repeat;
//   background-size: cover, cover;
// }

// .pbackground {
//   border-radius: 5px;
//   background-image: url('/static/images/login-background.png');
//   background-color: #000;
//   z-index: 1;
//   top: 0px;
//   right: 5px;
//   left: 5px;
//   bottom: 5px;
//   width: auto;
//   height: auto;
//   margin-top: -10px;
//   position: absolute;
//   display: inline-block;
//   background-position: bottom right, center center;
//   background-repeat: no-repeat, no-repeat;
//   background-size: contain, cover;
//   transition: all 0.5s ease-in-out;
// }

// .bounce-enter-active {
//   animation: bounce-in .5s;
// }

// .bounce-leave-active {
//   animation: bounce-in .5s reverse;
// }

// @keyframes bounce-in {
//   0% {
//     transform: scale(0);
//   }
//   50% {
//     transform: scale(0.5);
//   }
//   100% {
//     transform: scale(1);
//   }
// }

// .ribbon {
//   -webkit-transform: rotate(-45deg); 
//      -moz-transform: rotate(-45deg); 
//       -ms-transform: rotate(-45deg); 
//        -o-transform: rotate(-45deg); 
//           transform: rotate(-45deg); 
//     border: 15px solid transparent;
//     border-bottom: 15px solid red;
//     position: absolute;
//     top: -19px;
//     left: -10px;
//     padding: 0 5px;
//     width: 80px;
//     color: white;
//     font-family: sans-serif;
//     size: 11px;
// }
// .ribbon .txt {
//     position: absolute;
//     top: -3px;
//     left: 10px;
// }
</style>
