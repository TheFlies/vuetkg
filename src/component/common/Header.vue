<template lang="pug">
//- b-navbar(toggleable='md', type='light', variant='light', fixed='top', :class="{'navbar-transparent': transparent}")
//-   b-nav-toggle(target='nav_collapse')
//-   b-navbar-brand TKG by The Flies
//-   b-collapse#nav_collapse(is-nav)
//-     b-nav(is-nav-bar)
//-       b-nav-item(href="#") Link
//-       b-nav-item(href="#" disabled) Disabled
//-     b-nav.ml-auto(is-nav-bar)
//-       b-nav-form
//-         b-form-input(size='sm', type='text', placeholder='search')
//-         b-button(size='sm', class='my-2 my-sm-0', type='submit') Search
//-       b-nav-item-dropdown(text='Lang', right)
//-         b-dropdown-item(href='#') EN
//-         b-dropdown-item(href='#') VN
//-       b-nav-item-dropdown(right)
//-         template(slot='button-content')
//-           em User
//-         b-dropdown-item(href='#') Profile
//-         b-dropdown-item(href='#') Signout
nav.navbar.navbar-expand-lg.bg-primary.fixed-top(:class="{'navbar-transparent': transparent}")
  .container-fluid
    .navbar-translate
      button.navbar-toggler.navbar-toggler-right.navbar-burger(v-if='!noMenu', type='button',
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
    #navbarToggler.collapse.navbar-collapse(v-if='!noMenu', :class="toggleState ? '' : 'show'")
      ul.navbar-nav.ml-auto
        li.nav-item.active
          a.nav-link(href='#') gác
        //- nav-item-dropdown(title='xem sách', :items="[{'title':'hình','href':'/manga'},{'title':'chữ',href:'/book'}]", :class="toggleState?'':'ole'")
        //- nav-item-dropdown(title='ăn chơi', :items="[{'title':'ăn nhậu','href':'/drinking'},{'title':'chơi bời',href:'/game'},{'title':'gái gú',href:'/girl'}]", :class="toggleState?'':'ole'")
        b-nav-item-dropdown(text='xem sách')
          b-dropdown-item(href='/manga') hình
          b-dropdown-item(href='/manga') chữ
        b-nav-item-dropdown(text='ăn chơi')
          b-dropdown-item(href='/drinking') nhậu
          b-dropdown-item(href='/game') game
          b-dropdown-item(href='/girl') gái
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
  props: ['color-on-scroll', 'no-menu'],
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
@media screen and (max-width: 991px){
  .dropdown.show .dropdown-menu .dropdown-item:hover {
    color: #fff;
    background-color: #f7765f;
  }
  .dropdown.show .dropdown-menu .dropdown-item:first-child:hover {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  .dropdown.show .dropdown-menu .dropdown-item:last-child:hover {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  .nav-item .white-text {
    color: #000;
  }

  .nav-item:hover .white-text {
    color: #FFF;
  }
}
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

