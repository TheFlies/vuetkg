<template lang="pug">
.sidebar(data-color='blue')
  .logo
    a.simple-text(href='http://theflies.mooo.com/')
      | The Flies
  .sidebar-wrapper
    navbar-search(v-if='open')
    navbar-right(v-if='open', :mobile='true')
    ul.nav
      item(title='Dashboard', icon='dashboard', href='/dashboard')
      item(title='User Profile', icon='person', href='/dashboard/person')
      item(title='Table List', icon='content_paste', href='/dashboard/table')
      item(title='Typography', icon='library_books', href='/dashboard/typography')
      item(title='Icons', icon='bubble_chart', href='/dashboard/icons')
      item(title='Maps', icon='location_on', href='/dashboard/maps')
      item(title='Notifications', icon='notifications', href='/dashboard/notifications')
      li(:class='{ "active-pro" : !open }')
        a(href='upgrade.html')
          i.material-icons unarchive
          p Upgrade to PRO
  .sidebar-background
</template>
<script>
import Item from './item'
import NavbarSearch from '@/component/common/lucduong/navigation/navbar-search'
import NavbarRight from '@/component/common/lucduong/navigation/navbar-right'
export default {
  props: {
    open: Boolean
  },
  components: {
    Item,
    NavbarSearch,
    NavbarRight
  }
}
</script>

<style lang="scss">
.sidebar-background {
  background-image: url('../../../../assets/img/sidebar-2.jpg')
}
</style>