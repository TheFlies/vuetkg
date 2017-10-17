<template lang="pug">
//- header#header.alt
//-   h1
//-     a(href='/') TKG
//-     |
//-     | by The Flies
//-   nav#nav: ul
//-     li: a(href='/') gác
//-     li
//-       a.html5up-icon.fa-angle-down(href='#') xem sách
//-       ul
//-         li: a(href='/manga') hình
//-         li: a(href='/book') chữ
//-     li
//-       a.html5up-icon.fa-angle-down(href='#') ăn chơi
//-       ul
//-         li: a(href='/drinking') ăn nhậu
//-         li: a(href='/games') chơi bời
//-         li: a(href='/girls') gái gú
//-     li(v-if='user')
//-       a(@click.prevent="logout", href='/') đăng xuất
//-     li(v-if='!user')
//-       a(href='/login') đăng nhập
//-       | hay
//-       a.html5up-button(href='/register') đăng ký
nav.navbar.navbar-expand-md.fixed-top(:class="{'navbar-transparent': transparent}")
  .container
    .navbar-translate
      button.navbar-toggler.navbar-toggler.right.navbar-burger(type='button', data-toggle='collapse', data-target='#navbarToggler', aria-controls='navbarTogglerDemo02' aria-expanded='false' aria-label='Toggle navigation')
        span.navbar-toggler-bar
        span.navbar-toggler-bar
        span.navbar-toggler-bar
      a.navbar-brand(href='/') TKG
        span &nbsp;by The Flies
    #navbarToggler.collapse.navbar-collapse
      ul.navbar-nav.ml-auto
        li.nav-item
          a.nav-link(href='#') gác
        nav-item-dropdown(title='xem sách', :items="[{'title':'hình','href':'/manga'},{'title':'chữ',href:'/book'}]")
        nav-item-dropdown(title='ăn chơi', :items="[{'title':'ăn nhậu','href':'/drinking'},{'title':'chơi bời',href:'/game'},{'title':'gái gú',href:'/girl'}]")
        //- .nav-item.dropdown
          a#dropdownMenuButton.nav-link.dropdown-toggle(data-toggle='dropdown', href='#', role='button', aria-haspopup='true', aria-expanded='false') xem sách
          ul.dropdown-menu.dropdown-info(aria-labelledby='dropdownMenuButton')
            a.dropdown-item(href='manga') hình
            a.dropdown-item(href='book') chữ
</template>

<script>
import firebase from 'firebase'

import NavItemDropdown from './navbar/NavItemDropdown'

export default {
  name: 'tkg-header',
  props: ['color-on-scroll'],
  data() {
    return {
      user: null,
      transparent: true
    }
  },
  components: { NavItemDropdown },
  mounted () {
    this.user = firebase.auth().currentUser
  },
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.user = null
        this.$router.replace('/')
      })
    },
    scrolling() {
      this.transparent = window.scrollY <= this.colorOnScroll
    },
    show() {
      console.log('how do i show')
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

