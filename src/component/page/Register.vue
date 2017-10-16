<template lang="pug">
.page-wrapper
  section#main.container
    .row: div(class="12u")
      special-box.box
        .ribbon
            a(href='/') TKG
        h3 Đăng ký tài khoản
        .row.uniform(class='50%')
          div(class='12u')
            input(type='email', name='email', value, placeholder='Email', v-model='account.email')
          div(class='12u')
            input(type='password', name='password', value, placeholder='Password', v-model='account.password')
        hr
        .row.uniform(class='50%')
          ul.actions
            li: a.html5up-button.alt(@click.prevent='register') đăng ký
            li: a.html5up-button(href='/login') vào luôn
</template>


<script>
import SpecialBox from '../common/SpecialBox'
import firebase from 'firebase'

export default {
  name: 'tkg-register',
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
.box {
  background-image: url("/static/images/login-background.png");
  background-position:	top right,						center center;
  background-repeat:		no-repeat,							no-repeat;
	background-size:		contain,							cover;
}
</style>
