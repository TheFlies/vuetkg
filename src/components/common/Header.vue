<script lang="ts">
// b-navbar(toggleable='md', type='dark', variant='dark', fixed='top', :class="{'bg-transparent': transparent}")
//   b-navbar-toggle(target='nav_collapse')
//   b-navbar-brand(href='/') TKG
//     span.h6 &nbsp; by The Flies
//   b-collapse#nav_collapse(is-nav, v-if='!noMenu')
//     b-navbar-nav.ml-auto
//       b-nav-item-dropdown.text-white(text='xem sách', right)
//         b-dropdown-item(href='/manga') hình
//         b-dropdown-item(href='/book') chữ
//       b-nav-item-dropdown.text-white(text='ăn chơi', right)
//         b-dropdown-item(href='/drinking') nhậu
//         b-dropdown-item(href='/game') game
//         b-dropdown-item(href='/girl') gals
//       b-nav-item-dropdown(v-if='isAdmin', text='admin')
//         b-dropdown-item(href='/admin/manga') manga
//         b-dropdown-item(href='/admin/book') book
//         b-dropdown-item(href='/admin/user') user
//       b-nav-item.text-center.nav-item-btn.register(@click.prevent='logout', v-if='email') đăng xuất
//       template(v-if='!email')
//         b-nav-item.text-center.nav-item-btn.login(href='/login') đăng nhập
//         b-nav-item.text-center.nav-item-btn.register(href='/register') đăng ký

// import firebase from 'firebase/app'
// import 'firebase/auth'
// import { mapGetters } from 'vuex'

// import auth from '@/service/auth'

// export default {
//   name: 'tkg-header',
//   props: ['color-on-scroll', 'no-menu'],
//   data() {
//     return {
//       email: null,
//       transparent: true,
//       target: { 'id': 'navbarToggler' },
//       toggleState: false
//     }
//   },
//   mounted () {
//     this.email = (firebase.auth().currentUser || {}).email
//     if (!this.user && this.email) {
//       // we loggedIn but no user state, update the user state by email
//       auth.currentUser(this.email)
//     }
//   },
//   computed: {
//     ...mapGetters([
//       'isAdmin',
//       'user'
//     ])
//   },
//   methods: {
//     toggle() {
//       if (!this.toggleState) {
//         document.documentElement.className = 'nav-open'
//         this.toggleState = true
//       } else {
//         document.documentElement.className = ''
//         this.toggleState = false
//       }
//     },
//     logout() {
//       auth.logout().then(() => {
//         this.email = null
//         this.$router.replace('/')
//       })
//     },
//     scrolling() {
//       this.transparent = window.scrollY <= this.colorOnScroll
//     }
//   },
//   created () {
//     if (this.colorOnScroll) {
//       window.addEventListener('scroll', this.scrolling)
//     }
//   },
//   destroyed () {
//     if (this.colorOnScroll) {
//       window.removeEventListener('scroll', this.scrolling)
//     }
//   }
// }
export default {
  name: 'tkg-header',
}
</script>

<template>
  <nav class="fixed bg-blue-200 w-full">header</nav>
</template>

<style lang="scss" scoped>
</style>
