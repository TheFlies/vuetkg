<template lang="pug">
b-navbar(toggleable='md', type='dark', variant='dark')
  b-nav-toggle(target='nav_collapse')
  b-navbar-brand(href='/') TKG
    span.h6 &nbsp; by The Flies
  b-collapse#nav_collapse(is-nav)
    b-nav.ml-auto(is-nav-bar)
      b-nav-item.text-center.nav-item-btn.register(@click.prevent='logout', v-if='user') đăng xuất
      template(v-if='!user')
        b-nav-item.text-center.nav-item-btn.login(@click.prevent='loginAndBack') đăng nhập
        b-nav-item.text-center.nav-item-btn.register(href='/register') đăng ký
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'tkg-manga-header',
  props: ['page-watch'],
  data() {
    return {
      user: null,
      transparent: true,
      target: { 'id': 'navbarToggler' },
      toggleState: false
    }
  },
  mounted () {
    this.user = firebase.auth().currentUser
  },
  methods: {
    toggle() {
      if (!this.toggleState) {
        document.documentElement.className = 'nav-open'
        this.toggleState = true
      } else {
        document.documentElement.className = ''
        this.toggleState = false
      }
    },
    loginAndBack() {
      let back = this.$route.path
      this.$router.push(`/login?back=${back}`)
    },
    logout() {
      firebase.auth().signOut().then(() => {
        this.user = null
        this.$router.replace('/')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
// a.btn.btn-outline-neutral.white-text:hover {
//   color: #333 !important;
// }
// #header h1 {
//   color: inherit;
//   height: inherit;
//   left: 1.25em;
//   line-height: inherit;
//   margin: 0;
//   padding: 0;
//   position: absolute;
//   top: 0;
// }

// #header h1 a {
//   color: #fff;
//   font-weight: 400;
//   border: 0;
// }

// #header a {
//   border-bottom: none;
//   color: #fff;
//   font-weight: 400;
//   border: 0;
// }

// #header .sub a {
//   color: #000;
// }
</style>

