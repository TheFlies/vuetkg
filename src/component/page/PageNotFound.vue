<template lang="pug">
#oops
  tkg-header(no-menu)
  .wrapper
    tkg-banner(
      title='Đây là đâu ?!?!',
      quote=`Lạc lối có <b>cây dừa</b> ngoài cõi<br/>
        </b>Cầu nhỏ</b> còn ướm hỏi <b>đường mòn</b><br/>
        Quay về <b>biển cả</b> vẹn tròn<br/>
        <b class='orange-text'>Gu gồ</b> bát ngát khi tròn <b>mênh mông</b><br/>
        <footer class="blockquote-footer white-text">
          <cite title="author">thomay.vn</cite>
        </footer>`,
      showFogs,
      showClouds
    )
      .container
        .row
          .col-lg-4.mr-auto.ml-auto
            .d-flex.justify-content-center
              .p-2
                a.btn.btn-outline-primary(href='/') Tàng kinh gác
              .p-2
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

#oops .blockquote b {
  font-weight: bolder;
  color: orange;
}

#oops .btn-outline-primary {
  color: white;
  border-color: white;
}

#oops .btn-outline-primary:hover {
  background-color: grey;
}

#oops .btn {
  width: 8rem;
}

#oops .btn-primary {
  color: white;
  background-color: grey;
  border-color: transparent;
}

#oops .btn-primary:hover {
  background-color: grey;
}
</style>
