<template lang="pug">
  .nav-item.dropdown(:class="{'show': open}", @mouseover.prevent='collapse(true)', @mouseout='collapse(false)')
    a.nav-link.dropdown-toggle(:id='toggleid', data-toggle='dropdown',
      href='#', role='button', aria-haspopup='true', :aria-expanded="open?'true':'false'") {{title}}
    ul.dropdown-menu.dropdown-info(:aria-labelledby='toggleid', :class="{'show': open}", @mouseover='collapse(true)', @mouseout='collapse(false)')
      a.dropdown-item(v-for='item in items'): a(v-bind:href='item.href') {{item.title}}
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

<style scoped>
</style>
