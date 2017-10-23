<template lang="pug">
#register
  tkg-header(no-menu)
  .wrapper
    tkg-thunder.page-header(no-rain, no-lightning)
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

                button.btn.btn-danger.btn-block.btn-round(@click.prevent='register') [|]
              .forgot
                a.btn.btn-link(href='#') quên?
        .footer.register-footer.text-center
          h6 &copy;2017, made with <i class="fa fa-heart heart"></i> by The Flies
</template>


<script>
import TkgHeader from '../common/Header'
import TkgBanner from '../common/Banner'
import TkgFooter from '../common/Footer'
import SpecialBox from '../common/SpecialBox'
import TkgThunder from '../common/Thunder'

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
  components: { TkgHeader, TkgFooter, TkgBanner, SpecialBox, TkgThunder },
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
  background-image: url(../../assets/img/haunted-house-shane-madden.png);
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
