<template lang="pug">
#login
  tkg-header(no-menu)
  .wrapper
    tkg-thunder.page-header(no-rain, no-rain-trough, no-lightning)
      .filter
      .container
        .row
          .col-lg-4.col-md-6.col-sm-8.ml-auto.mr-auto
            b-card-group(deck)
              b-card.card-register(title='Tàng Kinh Gác', text-variant='light', align='center')
                //- h3.text-white.title Tàng Kinh Gác
                .social-line.text-center
                  a.btn.btn-neutral.btn-facebook.btn-just-icon(href='#pablo')
                    i.fa.fa-facebook-square
                  a.btn.btn-neutral.btn-google.btn-just-icon(href='#pablo')
                    i.fa.fa-google-plus
                  a.btn.btn-neutral.btn-github.btn-just-icon(href='#pablo')
                    i.fa.fa-github
                b-form.register-form
                  b-form-group(label='I meo', label-text-align='left')
                    b-form-input.form-control(type='text', placeholder='Email', v-model='account.email')

                  b-form-group(label='Mật khẩu', label-text-align='left')
                    b-form-input.form-control(type='password', placeholder='Password', v-model='account.password')

                  b-button.btn.btn-danger.btn-block.btn-round(@click.prevent='login') [|]
                .forgot
                  a.btn.btn-link(href='/forgot') quên?
        .footer.text-white.register-footer.text-center
          h6 &copy;2017, made with <i class="fa fa-heart heart"></i> by The Flies
</template>

<script>
import TkgHeader from '../common/Header'
import TkgBanner from '../common/Banner'
import TkgFooter from '../common/Footer'
import TkgThunder from '../common/Thunder'

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
  components: { TkgHeader, TkgFooter, TkgBanner, SpecialBox, TkgThunder },
  methods: {
    login() {
      console.log(`Prepare login with: ${this.account.email}`)
      this.error = ''
      if (!this.account.email || !this.account.password) {
        this.error = 'Missing email or password'
        return
      } else {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.account.email, this.account.password)
          .then(
            user => {
              this.$router.replace('/')
            },
            err => {
              this.error = err.message
            }
          )
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#login .page-header {
  background-image: url(../../assets/img/haunted-house-silviya-yordanova.png);
}

.footer {
  background-attachment: fixed;
  position: relative;
  line-height: 20px;
}
</style>
