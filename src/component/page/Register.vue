<template lang="pug">
#register
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

                label Tài khoản
                input.form-control(type='text', placeholder='Username', v-model='account.username')

                label Mật khẩu
                input.form-control(type='password', placeholder='Password', v-model='account.password')

                button.btn.btn-danger.btn-block.btn-round(@click.prevent='register') đăng ký
              .forgot
                a.btn.btn-link.btn-danger(href='#') quên?
        .footer.register-footer.text-center
          h6 &copy;2017, made with <i class="fa fa-heart heart"></i> by The Flies
            
  //- section#main.container
  //-   .row: div(class="12u")
  //-     special-box.box
  //-       .ribbon
  //-           a(href='/') TKG
  //-       h3 Đăng ký tài khoản
  //-       .row.uniform(class='50%')
  //-         div(class='12u')
  //-           input(type='email', name='email', value, placeholder='Email', v-model='account.email')
  //-         div(class='12u')
  //-           input(type='password', name='password', value, placeholder='Password', v-model='account.password')
  //-       hr
  //-       .row.uniform(class='50%')
  //-         ul.actions
  //-           li: a.html5up-button.alt(@click.prevent='register') đăng ký
  //-           li: a.html5up-button(href='/login') vào luôn
</template>


<script>
import TkgHeader from '../common/Header'
import TkgBanner from '../common/Banner'
import TkgFooter from '../common/Footer'
import SpecialBox from '../common/SpecialBox'

import firebase from 'firebase'

export default {
  name: 'tkg-register',
  data() {
    return {
      coverShow: true,
      account: {
        email: '',
        username: '',
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
    register() {
      this.error = ''
      if (!this.account.email || !this.account.password) {
        this.error = 'Missing email or password'
        return
      }
      firebase.auth().createUserWithEmailAndPassword(this.account.email, this.account.password)
        .then((user) => { this.$router.replace('/login') }, (err) => { this.error = err.message })
    }
  }
}
</script>

<style lang="scss" scoped>
#register .page-header {
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
</style>
