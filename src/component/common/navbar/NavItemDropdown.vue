<template lang="pug">
  .nav-item.dropdown(:class="{'show': open}", @mouseover.prevent='collapse(true)', @mouseout='collapse(false)')
    a.nav-link.dropdown-toggle(:id='toggleid', data-toggle='dropdown',
      href='#', role='button', aria-haspopup='true', :aria-expanded="open?'true':'false'") {{title}}
    ul.dropdown-menu.dropdown-menu-right.dropdown-danger(:aria-labelledby='toggleid', 
      :class="{'show': open}", @mouseover='collapse(true)', @mouseout='collapse(false)'
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
    collapse(show) {
      setTimeout(() => {
        this.open = show
      }, 300)
    }
  }
}
</script>

<style lang='scss' scoped>
/* .dropdown-menu.dropdown-menu-right.dropdown-danger.show {
  background-color: #FFFFFF;
} */

@media (max-width: 767px){
  .navbar .navbar-nav .dropdown-menu{
    background-color: #FFFFFF;
    border-radius: 12px;
    height: auto;
    overflow-y: scroll;
  }
  .dropdown-item{
      &:hover{
          color: #000 !important;
      }
  }
}
</style>
