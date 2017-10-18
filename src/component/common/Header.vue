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
nav.navbar.navbar-expand-md.bg-primary.fixed-top(:class="{'navbar-transparent': transparent}")
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
        span &nbsp;by The Flies
    #navbarToggler.collapse.navbar-collapse(:class="toggleState ? '' : 'show'")
      ul.navbar-nav.ml-auto
        li.nav-item.active
          a.nav-link(href='#') gác
        nav-item-dropdown(title='xem sách', :items="[{'title':'hình','href':'/manga'},{'title':'chữ',href:'/book'}]", :class="toogleState?'':'ole'")
        nav-item-dropdown(title='ăn chơi', :items="[{'title':'ăn nhậu','href':'/drinking'},{'title':'chơi bời',href:'/game'},{'title':'gái gú',href:'/girl'}]", :class="toogleState?'':'ole'")
        li.nav-item(v-if='user')
          button.btn(@click.prevent="logout") đăng xuất
        li.nav-item(v-if='!user')
          a.btn.btn-outline-primary.white-text(href='/login') đăng nhập
          a.btn.btn-primary(href='/register') đăng ký
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
#navbarToggler.collapse.navbar-collapse {
  
}
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

