<template lang="pug">
#login
  tkg-header(color-on-scroll=500, no-menu)
  .wrapper
    .page-header
      .filter
      .container
        .row
          .col-lg-4.col-md-6.col-sm-8.ml-auto.mr-auto
            .card.card-register
              h3.title Xin chào
              .social-line.text-center
                a.btn.btn-neutral.btn-facebook.btn-just-icon(href='#pablo')
                  i.fa.fa-facebook-square
                a.btn.btn-neutral.btn-google.btn-just-icon(href='#pablo')
                  i.fa.fa-google-plus
                a.btn.btn-neutral.btn-github.btn-just-icon(href='#pablo')
                  i.fa.fa-github
              form.register-form
                label I meo
                input.form-control(type='text', placeholder='Email', v-model='account.email')

                label Mật khẩu
                input.form-control(type='password', placeholder='Password', v-model='account.password')

                button.btn.btn-danger.btn-block.btn-round(@click.prevent='login') đăng nhập
              .forgot
                a.btn.btn-link.btn-danger(href='#') quên?
        .footer.register-footer.text-center
          h6 &copy;2017, made with <i class="fa fa-heart heart"></i> by The Flies
</template>

<script>
import TkgHeader from '../common/Header'
import TkgBanner from '../common/Banner'
import TkgFooter from '../common/Footer'

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
  components: { TkgHeader, TkgFooter, TkgBanner, SpecialBox },
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
#login .page-header {
  background-image: url(../../assets/pk-2.1.0/img/login-image.jpg);
}

.footer {
    background-attachment: fixed;
    position: relative;
    line-height: 20px;
}

// .box {
//   background-image: url("/static/images/login-background.png");
//   background-position:	top right,						center center;
//   background-repeat:		no-repeat,							no-repeat;
// 	background-size:		contain,							cover;
// }
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
