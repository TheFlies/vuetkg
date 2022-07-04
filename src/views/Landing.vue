<script setup lang="ts">
// #landing
//   tkg-header(color-on-scroll=300)
//   b-container.p-0(fluid)
//     tkg-banner(
//       data-parallax
//       title='Tàng Kinh Gác'
//       quote=`
//       <p class="mb-0 white-text">
//         "Xa chốn ngựa xe xuân mộng đến
//         <br/>
//         Vui bên sách vở tuổi già ngâm"
//       </p>
//       <footer class="blockquote-footer text-light">
//         <cite title="author">Nguyễn Bỉnh Khiêm</cite>
//       </footer>`
//       show-fogs
//       show-clouds
//     )
//     .main#landing-man
//       b-container.text-center
//           special-box(spanImgClass='image featured', spanImgSrc='landing/pic011.jpg')
//             header.major
//               h2 Căn gác nhỏ, ngôi nhà cuối phố
//                 | <br/>
//                 | chẳng hiểu vì sao không khép bao giờ...
//               p Nơi để tìm đọc và chia sẻ những quyển sách,<br />
//                 | những tập truyện hay của Việt Nam cũng như thế giới.
//           special-box.box.special.coloms
//             .coloms-row
//               section
//                 span.major.fa.fa-bolt.accent2
//                 h3 Hình có chữ
//                 p Xem truyện.
//               section
//                 span.major.fa.fa-area-chart.accent3
//                 h3 Chữ không hình
//                 p Đọc sách.
//             .coloms-row
//               section
//                 span.major.fa.fa-cloud.accent4
//                 h3 Ăn chơi
//                 p Quán xá, tụ điểm, trò chơi.
//               section
//                 span.major.fa.fa-lock.accent5
//                 h3 Không biết xếp vào đâu
//                 p Linh tinh lặt vặt.
//           b-row
//             b-col(md='6' style="margin-bottom: 30px")
//               special-box(style="height: 100%")
//                 span.image.featured: img(src='@/assets/img/landing/pic022.jpg', alt='')
//                 h3 Dzịt giả - Truyện tranh
//                 p Dịch theo khung chữ trên hình.
//                 .actions
//                   b-btn.btn-outline-primary.text-black(v-b-modal="'translator'") Coi thêm
//             b-col(md='6' style="margin-bottom: 30px")
//               special-box(style="height: 100%")
//                 span.image.featured: img(src='@/assets/img/landing/pic033.jpg', alt='')
//                 h3 Dzật giả - Truyện chữ
//                 p Dịch theo từng đoạn, câu văn.
//                 .actions
//                   b-btn.btn-outline-primary.text-black(v-b-modal="'translator'") Chi tiết
//   b-modal(id='translator', center)
//     p Này nhấn đăng ký để dịch
//   tkg-cta
//   tkg-footer(show-design)

import TkgHeader from '@/components/common/Header.vue'
import TkgBanner from '@/components/common/Banner.vue'
// import TkgFooter from '@/components/common/Footer'
// import TkgCta from '@/components/common/BetaInvite'
// import SpecialBox from '@/components/common/SpecialBox'

// // we need this to resolve the expression
// import '@/assets/img/landing/pic011.jpg'

// export default {
//   name: 'tkg-landing',
//   data () {
//     return {
//       msg: 'Welcome to Your Vue.js App'
//     }
//   },
//   components: {
//     TkgHeader,
//     TkgBanner,
//     TkgFooter,
//     TkgCta,
//     SpecialBox
//   }
// }
</script>

<template>
  <div id="landing" class="h-1200px overflow-y-auto">
    <tkg-header transparent-after="#banner" />
    <tkg-banner />
  </div>
</template>

<style lang="scss" scoped>
#landing-man {
  @apply -mt-7;
}
</style>
