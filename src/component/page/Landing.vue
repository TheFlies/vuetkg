<template lang="pug">
#landing
  tkg-header(color-on-scroll=500)
  .wrapper
    tkg-banner(data-parallax=true)
    .main#landing-man
      .container
        .text-center
          special-box(spanImgClass='image featured', spanImgSrc='static/images/pic011.jpg')
            header.major
              h2 Căn gác nhỏ, ngôi nhà cuối phố
                | <br/>
                | chẳng hiểu vì sao không khép bao giờ...
              p Nơi để tìm học và đọc và chia sẻ những quyển sách,<br />
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
  components: { TkgHeader, TkgBanner, TkgFooter, TkgCta, SpecialBox }
}
</script>

<style scoped>
#landing-man {
  margin-top: -13.5em;
}
.main .section:first-of-type {
    position: relative;
    z-index: 2;
}

header.major p {
	display: inline-block;
	border-top: solid 2px #e5e5e5;
	color: #777;
	margin: 1.5em 0 0 0;
	padding: 1.5em 0 0 0;
  font-style: normal;
  font-size: 1.25em;
}

.major.fa {
  background: #666;
	border-radius: 100%;
	color: #ffffff;
	cursor: default;
	display: inline-block;
	height: 5.5em;
	line-height: 5.5em;
	margin: 0 0 2em 0;
	width: 5.5em;
}

.major.fa {
  background: #666;
	border-radius: 100%;
	color: #ffffff;
	cursor: default;
	display: inline-block;
	height: 5.5em;
	line-height: 5.5em;
	margin: 0 0 2em 0;
	width: 5.5em;
}

.major.fa:before {
	font-size: 2.5em;
}

.major.fa.accent1 {
	background: #666;
	color: #ffffff;
}

.major.fa.accent2 {
	background: #e89980;
	color: #ffffff;
}

.major.fa.accent3 {
	background: #7fcdb8;
	color: #ffffff;
}

.major.fa.accent4 {
	background: #90b0ba;
	color: #ffffff;
}

.major.fa.accent5 {
	background: #e5cb95;
	color: #ffffff;
}

.section.card, .section.coloms {
  padding: 3em;
}

.box.coloms .coloms-row {
	border-top: solid 2px #e5e5e5;
	position: relative;
}

.box.coloms .coloms-row:after {
	clear: both;
	content: '';
	display: block;
}

.box.coloms .coloms-row section {
	float: left;
	padding: 3em;
	width: 50%;
}

.box.coloms .coloms-row section :last-child {
	margin-bottom: 0;
}

.box.coloms .coloms-row section:nth-child(2n) {
	padding-right: 0;
}

.box.coloms .coloms-row section:nth-child(2n):before {
	background: #e5e5e5;
	content: '';
	display: block;
	height: 100%;
	margin-left: -3em;
	position: absolute;
	top: 0;
	width: 2px;
}

.box.coloms .coloms-row section:nth-child(2n-1) {
	padding-left: 0;
}

.box.coloms .coloms-row:first-child {
	border-top: 0;
}

.box.coloms .coloms-row:first-child section {
	padding-top: 0;
}

.box.coloms .coloms-row:last-child {
	padding-bottom: 0;
}

.box.coloms .coloms-row:last-child section {
	padding-bottom: 0;
}
</style>
