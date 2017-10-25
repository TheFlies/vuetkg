<template lang="pug">
#register
  tkg-header(no-menu)
  .wrapper
    tkg-thunder.page-header
      .filter
      .container
        .row
          .col-lg-4.col-md-6.col-sm-8.ml-auto.mr-auto
            b-card-group(deck)
              b-card.card-register(title='Tàng Kinh Gác', text-variant='light', align='center')
                //- h3.text-white.title Tàng Kinh Gác
                .social-line.text-center
                  a.text-white.btn(href='#pablo')
                    i.fa.fa-facebook-square
                  a.text-white.btn(href='#pablo')
                    i.fa.fa-google-plus
                  a.text-white.btn(href='#pablo')
                    i.fa.fa-github
                b-form.register-form
                  b-form-group(label='I meo', label-text-align='left')
                    b-form-input.form-control(type='text', placeholder='Email', v-model='account.email')

                  b-form-group(label='Mật khẩu', label-text-align='left')
                    b-form-input.form-control(type='password', placeholder='Password', v-model='account.password')

                  b-button.btn.btn-danger.btn-block.btn-round(@click.prevent='register') [|]
                .forgot
                  a.btn.btn-link(href='/login') đã có tài khoản?
        .footer.text-white.register-footer.text-center
          h6 &copy;2017, made with <i class="fa fa-heart heart red"></i> by The Flies
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
  props: ['email'],
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
    this.account.email = this.email
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

</style>
