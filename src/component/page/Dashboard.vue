<template lang="pug">
#app
  .wrapper(:class="{ 'nav-open' : navOpened }")
    sidebar(:open='navOpened')
    md-notifications
    .main-panel
      navigation(@toggleSideBar='toggleSideBar')
      router-view
      md-footer
      .close-layer(v-if='navOpened', @click='onCloseLayerClick')
</template>

<script>
export default {
  name: 'tkg-dashboard',
  data () {
    return {
      sidebarToggled: false
    }
  },
  computed: {
    navOpened () {
      return this.sidebarToggled
    }
  },
  mounted () {
    this.initMaterial()
  },
  updated () {
    this.initMaterial()
  },
  methods: {
    initMaterial () {
      $.material.init () // eslint-disable-line
    },
    toggleSideBar () {
      this.sidebarToggled = !this.sidebarToggled
    },
    onCloseLayerClick () {
      this.toggleSideBar()
    }
  }
}
</script>

<style lang="scss">

</style>
