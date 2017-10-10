<template>
<div id="landing" class="landing">
  <div id="page-wrapper">
    <!-- Header -->
    <tkg-header></tkg-header>

    <!-- Banner -->
    <tkg-banner></tkg-banner>

    <!-- Main -->
    <section id="main" class="container">
      <special-box class="box special" 
                   spanImgClass="image featured"
                   spanImgSrc="static/images/pic011.jpg" >
        <header class="major">
          <h2>Căn gác nhỏ, ngôi nhà cuối phố
          <br />
          chẳng hiểu vì sao không khép bao giờ...</h2>
          <p>Nơi để tìm học và đọc và chia sẻ những quyển sách,<br />
          những tập truyện hay của Việt Nam cũng như thế giới.</p>
        </header>
      </special-box>

      <special-box class="box special features">
        <div class="features-row">
          <section>
            <span class="icon major fa-bolt accent2"></span>
            <h3>Hình có chữ</h3>
            <p>Xem truyện.</p>
          </section>
          <section>
            <span class="icon major fa-area-chart accent3"></span>
            <h3>Chữ không hình</h3>
            <p>Đọc sách.</p>
          </section>
        </div>
        <div class="features-row">
          <section>
            <span class="icon major fa-cloud accent4"></span>
            <h3>Ăn chơi</h3>
            <p>Quán xá, tụ điểm, trò chơi.</p>
          </section>
          <section>
            <span class="icon major fa-lock accent5"></span>
            <h3>Không biết xếp vào đâu</h3>
            <p>Linh tinh lặt vặt.</p>
          </section>
        </div>
      </special-box>

      <div class="row">
        <div class="6u 12u(narrower)">

          <section class="box special">
            <span class="image featured"><img src="static/images/pic022.jpg" alt="" /></span>
            <h3>Dzịt giả - Truyện tranh</h3>
            <p>Dịch theo khung chữ trên hình.</p>
            <ul class="actions">
              <li><a href="#" class="button alt">Coi thêm</a></li>
            </ul>
          </section>

        </div>
        <div class="6u 12u(narrower)">

          <section class="box special">
            <span class="image featured"><img src="static/images/pic033.jpg" alt="" /></span>
            <h3>Dzật giả - Truyện chữ</h3>
            <p>Dịch theo từng đoạn, câu văn.</p>
            <ul class="actions">
              <li><a href="#" class="button alt">Chi tiết</a></li>
            </ul>
          </section>

        </div>
      </div>

    </section>

    <!-- CTA -->
    <tkg-cta></tkg-cta>

    <!-- Footer -->
    <tkg-footer></tkg-footer>
  </div>
</div>
</template>

<script>
require('../../../static/assets/js/util.js')
require('../../../static/assets/js/main.js')

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '~/static/assets/css/main.css';
</style>
