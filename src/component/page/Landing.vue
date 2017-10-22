<template lang="pug">
#landing
  tkg-header(color-on-scroll=500)
  .wrapper
    tkg-banner(
      data-parallax=true,
      title='Tàng Kinh Gác',
      quote=`
      "Xa chốn ngựa xe xuân mộng đến<br/>Vui bên sách vở tuổi già ngâm"
      <footer class="blockquote-footer white-text">
        <cite title="author">Nguyễn Bỉnh Khiêm</cite>
      </footer>`,
      show-fogs,
      show-clouds
    )
    .main#landing-man
      .container
        .text-center
          special-box(spanImgClass='image featured', spanImgSrc='static/images/pic011.jpg')
            header.major
              h2 Căn gác nhỏ, ngôi nhà cuối phố
                | <br/>
                | chẳng hiểu vì sao không khép bao giờ...
              p Nơi để tìm đọc và chia sẻ những quyển sách,<br />
                | những tập truyện hay của Việt Nam cũng như thế giới.
          special-box.box.special.coloms
            .coloms-row
              section
                span.major.fa.fa-bolt.accent2
                h3 Hình có chữ
                p Xem truyện.
              section
                span.major.fa.fa-area-chart.accent3
                h3 Chữ không hình
                p Đọc sách.
            .coloms-row
              section
                span.major.fa.fa-cloud.accent4
                h3 Ăn chơi
                p Quán xá, tụ điểm, trò chơi.
              section
                span.major.fa.fa-lock.accent5
                h3 Không biết xếp vào đâu
                p Linh tinh lặt vặt.
          .row
            .col-md-6
              special-box
                span.image.featured: img(src='static/images/pic022.jpg', alt='')
                h3 Dzịt giả - Truyện tranh
                p Dịch theo khung chữ trên hình.
                .actions
                  a.btn.btn-outline-black.black-text(href='#') Coi thêm
            .col-md-6
              special-box
                span.image.featured: img(src='static/images/pic033.jpg', alt='')
                h3 Dzật giả - Truyện chữ
                p Dịch theo từng đoạn, câu văn.
                .actions
                  a.btn.btn-outline-black.black-text(href='#') Chi tiết
    tkg-cta
    tkg-footer
//- #landing.landing
//-   #page-wrapper
//-     tkg-header
//-     tkg-banner
//-     section#main.container
//-       special-box.box.special(
//-                    spanImgClass='image featured',
//-                    spanImgSrc='static/images/pic011.jpg')
//-         header.major
//-           h2 Căn gác nhỏ, ngôi nhà cuối phố
//-             | <br/>
//-             | chẳng hiểu vì sao không khép bao giờ...
//-           p Nơi để tìm học và đọc và chia sẻ những quyển sách,<br />
//-             | những tập truyện hay của Việt Nam cũng như thế giới.
//-       special-box.box.special.coloms
//-         .coloms-row
//-           section
//-             span.html5up-icon.major.fa-bolt.accent2
//-             h3 Hình có chữ
//-             p Xem truyện.
//-           section
//-             span.html5up-icon.major.fa-area-chart.accent3
//-             h3 Chữ không hình
//-             p Đọc sách.
//-         .coloms-row
//-           section
//-             span.html5up-icon.major.fa-cloud.accent4
//-             h3 Ăn chơi
//-             p Quán xá, tụ điểm, trò chơi.
//-           section
//-             span.html5up-icon.major.fa-lock.accent5
//-             h3 Không biết xếp vào đâu
//-             p Linh tinh lặt vặt.

//-       .row
//-         div(class='6u 12u(narrower)')
//-           section.box.special
//-             span.image.featured: img(src='static/images/pic022.jpg', alt='')
//-             h3 Dzịt giả - Truyện tranh
//-             p Dịch theo khung chữ trên hình.
//-             ul.actions
//-               li: a.html5up-button.alt(href='#') Coi thêm
//-         div(class='6u 12u(narrower)')
//-           section.box.special
//-             span.image.featured: img(src='static/images/pic033.jpg', alt='')
//-             h3 Dzật giả - Truyện chữ
//-             p Dịch theo từng đoạn, câu văn.
//-             ul.actions
//-               li: a.html5up-button.alt(href='#') Chi tiết

//-     tkg-cta
//-     tkg-footer
</template>

<script>
import TkgHeader from '../common/Header'
import TkgBanner from '../common/Banner'
import TkgFooter from '../common/Footer'
import TkgCta from '../common/BetaInvite'
import SpecialBox from '../common/SpecialBox'

export default {
  name: 'tkg-landing',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    TkgHeader,
    TkgBanner,
    TkgFooter,
    TkgCta,
    SpecialBox
  }
}
</script>

<style lang="scss" scoped>
#landing-man {
  margin-top: -7em;
}
.main .section:first-of-type {
    position: relative;
    z-index: 2;
}
h2, h3 {
  font-family: 'Roboto Slab', serif;
  margin-bottom: .5em;
}

p {
  font-family: 'Roboto Slab', serif;
}

@media (max-width: 575px) {
  #landing-man {
    margin-top: -2em;
  }
}
</style>
