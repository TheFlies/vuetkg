<template lang="pug">
.page-wrapper
  section#main.container
    .row: div(class="12u")
      special-box.box
          .ribbon
            a(href='/') TKG
          h3 Đăng nhập hệ thống
          .row.uniform(class='50%')
            div(class='12u')
              input(type='email', name='email', value, placeholder='Email', v-model='account.email')
            div(class='12u')
              input(type='password', name='password', value, placeholder='Password', v-model='account.password')
          hr
          .row.uniform(class='50%')
            ul.actions
              li: a.html5up-button.alt(@click.prevent='login') vô vô
              li: a.html5up-button(href='/register') đăng ký
</template>

<script>
// import Vue from 'vue'
// import Buefy from 'buefy'

// Vue.use(Buefy)

import firebase from 'firebase'
import SpecialBox from '../common/SpecialBox'

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
  components: { SpecialBox },
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
      console.log(`Prepare login with: ${this.account.email}`)
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
.box {
  background-image: url("/static/images/login-background.png");
  background-position:	top right,						center center;
  background-repeat:		no-repeat,							no-repeat;
	background-size:		contain,							cover;
}
// .card {
//   border-radius: 6px;
//   padding: 15px;
// }
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
