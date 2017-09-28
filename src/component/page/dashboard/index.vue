<template lang="pug">
#dashboard
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
import Navigation from '@/component/common/lucduong/navigation'
import MdFooter from '@/component/common/lucduong/footer'
import Sidebar from '@/component/common/lucduong/sidebar'

export default {
  name: 'tkg-dashboard',
  data () {
    return {
      sidebarToggled: false
    }
  },
  components: { Sidebar, MdFooter, Navigation },
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
@import "../../assets/sass/md/_variables.scss";
</style>
