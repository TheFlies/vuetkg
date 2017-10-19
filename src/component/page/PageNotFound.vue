<template lang="pug">
#oops
  tkg-header(no-menu)
  .wrapper
    tkg-banner(
      title='Đây là đâu ?!?!',
      showFogs,
      showClouds
    )
      .container
        .row
          .col-lg-4.mr-auto.ml-auto
            .d-flex.justify-content-center
              a.btn.btn-outline-primary(href='/') Tàng kinh gác
              a.btn.btn-primary(href='https://google.com') Gu gồ
  //- section#banner
  //-   h2 Ooops!!!
  //-   p Đây là đâu đây ta.
  //-   ul(class='actions')
  //-     li: a.html5up-button.special(href='/') Tàng Kinh Gác
  //-     li: a.html5up-button(href='https://google.com') Gu Gồ
</template>

<script>
import TkgHeader from '@/component/common/Header'
import TkgBanner from '@/component/common/Banner'

export default {
  components: { TkgHeader, TkgBanner }
}
</script>

<style scoped>
#oops .page-header {
  background-image: url(../../assets/img/island.jpg);
}
#oops a {
  margin-right: 5px;
  margin-left: 5px;
  z-index: 2;
}

</style>
