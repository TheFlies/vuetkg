<template lang="pug">
b-navbar(toggleable='md', type='dark', variant='dark')
  b-nav-toggle(target='nav_collapse')
  b-navbar-brand(href='/') TKG
    span.h6 &nbsp; by The Flies
  b-collapse#nav_collapse(is-nav)
    b-nav(is-nav-bar, v-if='pageNum')
      b-nav-item(href='#') {{currentPage || 1}}/{{ totalPage || 1 }}
    b-nav.ml-auto(is-nav-bar)
      b-nav-item-dropdown(v-if='isAdmin', text='admin')
        b-dropdown-item(href='/admin/manga') manga
        b-dropdown-item(href='/admin/book') book
        b-dropdown-item(href='/admin/user') user
      b-nav-item.text-center.nav-item-btn.register(@click.prevent='logout', v-if='email') đăng xuất
      template(v-if='!email')
        b-nav-item.text-center.nav-item-btn.login(@click.prevent='loginAndBack') đăng nhập
        b-nav-item.text-center.nav-item-btn.register(href='/register') đăng ký
</template>

<script>
import firebase from 'firebase'
import { mapGetters } from 'vuex'

import auth from '../../service/auth'

export default {
  name: 'tkg-manga-header',
  props: ['page-num', 'total-page'],
  data() {
    return {
      currentPage: 1,
      email: null,
      transparent: true,
      target: { 'id': 'navbarToggler' },
      toggleState: false
    }
  },
  mounted () {
    console.log(' displaying page num on the header: ' + this.pageNum)
    this.email = (firebase.auth().currentUser || {}).email
    if (!this.user && this.email) {
      // update currentUser by email
      auth.currentUser(this.email)
    }
  },
  computed: {
    ...mapGetters([
      'isAdmin',
      'user'
    ])
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
      auth.logout().then(() => {
        this.email = null
        this.$router.replace('/')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

