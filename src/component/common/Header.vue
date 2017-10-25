<template lang="pug">
b-navbar(toggleable='md', type='dark', variant='dark', fixed='top', :class="{'bg-transparent': transparent}")
  b-nav-toggle(target='nav_collapse')
  b-navbar-brand(href='/') TKG
    span.h6 &nbsp; by The Flies
  b-collapse#nav_collapse(is-nav)
    b-nav.ml-auto(is-nav-bar)
      b-nav-item-dropdown.text-white(text='xem sách', right)
        b-dropdown-item(href='/manga') hình
        b-dropdown-item(href='/book') chữ
      b-nav-item-dropdown.text-white(text='ăn chơi', right)
        b-dropdown-item(href='/drinking') nhậu
        b-dropdown-item(href='/game') game
        b-dropdown-item(href='/girl') gals
      b-nav-item.text-center.nav-item-btn.login(href='/login') đăng nhập
      b-nav-item.text-center.nav-item-btn.register(href='/register') đăng ký
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'tkg-header',
  props: ['color-on-scroll', 'no-menu'],
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
    logout() {
      firebase.auth().signOut().then(() => {
        this.user = null
        this.$router.replace('/')
      })
    },
    scrolling() {
      this.transparent = window.scrollY <= this.colorOnScroll
    }
  },
  created () {
    if (this.colorOnScroll) {
      window.addEventListener('scroll', this.scrolling)
    }
  },
  destroyed () {
    if (this.colorOnScroll) {
      window.removeEventListener('scroll', this.scrolling)
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-item-btn.login {
  width: 8rem;
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, .5);
  :hover {
    box-shadow: inset 0 0 0 2px rgba(255, 255, 255, .5);
  }
}
.nav-item-btn.register {
  width: 8rem;
  background-color: #e7746f !important;
  :hover {
    background-color: #e7746f !important;
  }
}
@media screen and (max-width: 991px){
  // .dropdown.show .dropdown-menu .dropdown-item:hover {
  //   color: #fff;
  //   background-color: #f7765f;
  // }
  // .dropdown.show .dropdown-menu .dropdown-item:first-child:hover {
  //   border-top-left-radius: 12px;
  //   border-top-right-radius: 12px;
  // }
  // .dropdown.show .dropdown-menu .dropdown-item:last-child:hover {
  //   border-bottom-left-radius: 12px;
  //   border-bottom-right-radius: 12px;
  // }
  // .nav-item .white-text {
  //   color: #000;
  // }

  // .nav-item:hover .white-text {
  //   color: #FFF;
  // }
}
</style>

