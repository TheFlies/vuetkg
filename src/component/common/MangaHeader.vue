<template lang="pug">
nav.navbar.navbar-expand-lg.bg-primary
  .container-fluid
    .navbar-translate
      button.navbar-toggler.navbar-toggler-right.navbar-burger(type='button',
        data-toggle='collapse', data-target='#navbarToggler', 
        :aria-controls='target.id ? target.id : target',
        :aria-expanded="toggleState ? 'true' : 'false'",
        @click.prevent='toggle()',
        aria-label='Toggle navigation',
        :class="toggleState ? ['collapsed', 'toggled']: {}"
      )
        span.navbar-toggler-bar
        span.navbar-toggler-bar
        span.navbar-toggler-bar
      a.navbar-brand(href='/') TKG
        span.label &nbsp;by The Flies
    #navbarToggler.collapse.navbar-collapse(:class="toggleState ? '' : 'show'")
      ul.navbar-nav.ml-auto
        li.nav-item
          a.nav-link(href='/') gác
        li.nav-item(v-if='user')
          button.btn(@click.prevent="logout") đăng xuất
        li.nav-item(v-if='!user')
          a.btn.btn-outline-primary.white-text(href='/login') đăng nhập
          a.btn.btn-primary(href='/register') đăng ký
</template>

<script>
import firebase from 'firebase'

import NavItemDropdown from './navbar/NavItemDropdown'

export default {
  name: 'tkg-manga-header',
  data() {
    return {
      user: null,
      transparent: true,
      target: { 'id': 'navbarToggler' },
      toggleState: false
    }
  },
  components: { NavItemDropdown },
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
a.btn.btn-outline-neutral.white-text:hover {
  color: #333 !important;
}
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

