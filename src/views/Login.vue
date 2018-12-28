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
                .social-line.text-center
                  a.btn.btn-neutral.btn-facebook.btn-just-icon(href='#pablo')
                    i.fa.fa-facebook-square
                  a.btn.btn-neutral.btn-google.btn-just-icon(href='#pablo')
                    i.fa.fa-google-plus
                  a.btn.btn-neutral.btn-github.btn-just-icon(href='#pablo')
                    i.fa.fa-github
                b-alert(v-if="error" :show="error !== ''" dismissible variant="danger" @dismissed="error=''") {{this.error}}
                b-form.register-form
                  b-form-group(label='I meo', label-text-align='left')
                    b-form-input.form-control(type='text', placeholder='Email', v-model='account.email')

                  b-form-group(label='Mật khẩu', label-text-align='left')
                    b-form-input.form-control(type='password', placeholder='Password', v-model='account.password')

                  b-button.btn.btn-danger.btn-block.btn-round(@click.prevent='login' :disabled="waiting") [|]
                .forgot
                  a.btn.btn-link(href='/forgot') quên?
        .footer.text-white.register-footer.text-center
          h6 &copy;2017, made with <i class="fa fa-heart heart"></i> by The Flies
</template>

<script>
import TkgHeader from '@/components/common/Header'
import TkgBanner from '@/components/common/Banner'
import TkgFooter from '@/components/common/Footer'
import TkgThunder from '@/components/common/Thunder'
import SpecialBox from '@/components/common/SpecialBox'

import auth from '@/service/auth'

export default {
  name: 'tkg-login',
  props: ['back'],
  data() {
    return {
      coverShow: true,
      account: {
        email: '',
        password: ''
      },
      error: '',
      waiting: false
    }
  },
  components: { TkgHeader, TkgFooter, TkgBanner, SpecialBox, TkgThunder },
  methods: {
    login() {
      this.waiting = true
      this.error = ''
      auth
        .login(this.account)
        .then(() => {
          this.waiting = false
          if (this.back) {
            this.$router.replace(this.back)
          } else {
            this.$router.replace('/')
          }
        })
        .catch(err => {
          this.waiting = false
          this.error = err.message
        })
    }
  }
}
</script>

<style lang="scss" scoped>
#login .page-header {
  background-image: url(../assets/img/haunted-house-silviya-yordanova.webp);
}

.footer {
  background-attachment: fixed;
  position: relative;
  line-height: 20px;
}
</style>
