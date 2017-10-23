<template lang="pug">
  .nav-item.dropdown(:class="{'show': open}", @click.prevent='collapse()')
    a.nav-link.dropdown-toggle(:id='toggleid', data-toggle='dropdown',
      href='#', role='button', aria-haspopup='true', :aria-expanded="open?'true':'false'") {{title}}
    ul.dropdown-menu.dropdown-menu-right.dropdown-danger(:aria-labelledby='toggleid', 
      :class="{'show': open}"
    )
      template(v-for='(item,idx) in items')
        a.dropdown-item(v-bind:href='item.href') {{item.title}}
        .dropdown-divider(v-if='idx < items.length - 1')
</template>

<script>
export default {
  name: 'nav-item-dropdown',
  props: ['title', 'items'],
  data() {
    return {
      open: false,
      toggleid: null
    }
  },
  mounted () {
    this.toggleid = 'nav-link-dropdown-toggle-' + this._uid
  },
  methods: {
    collapse() {
      this.open = !this.open
    }
  }
}
</script>

<style lang='scss'>
/* .dropdown-menu.dropdown-menu-right.dropdown-danger.show {
  background-color: #FFFFFF;
} */

@media screen and (max-width: 991px){
  .navbar .navbar-nav .dropdown-menu{
    background-color: #FFFFFF;
    border-radius: 12px;
    height: auto;
  }
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
</style>
