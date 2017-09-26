<template>
  <div id="page-wrapper">
    <!-- Header -->
    <tkg-header></tkg-header>

    <!-- Banner -->
    <tkg-banner></tkg-banner>

    <!-- Main -->
    <section id="main" class="container">

      <section class="box special">
        <header class="major">
          <h2>Căn gác nhỏ, ngôi nhà cuối phố
          <br />
          chẳng hiểu vì sao không khép bao giờ...</h2>
          <p>Nơi để tìm học và đọc và chia sẻ những quyển sách,<br />
          những tập truyện hay của Việt Nam cũng như thế giới.</p>
        </header>
        <span class="image featured"><img src="static/images/pic011.jpg" alt="" /></span>
      </section>

      <section class="box special features">
        <div class="features-row">
          <section>
            <span class="icon major fa-bolt accent2"></span>
            <h3>Manga, truyện tranh, nhứng thứ xem bằng hình</h3>
            <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
          </section>
          <section>
            <span class="icon major fa-area-chart accent3"></span>
            <h3>Truyện kiếm hiệp, tiên hiệp, tùm lum thứ</h3>
            <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
          </section>
        </div>
        <div class="features-row">
          <section>
            <span class="icon major fa-cloud accent4"></span>
            <h3>Những tuyển tập kinh điển</h3>
            <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
          </section>
          <section>
            <span class="icon major fa-lock accent5"></span>
            <h3>Không biết xếp vào đâu</h3>
            <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
          </section>
        </div>
      </section>

      <div class="row">
        <div class="6u 12u(narrower)">

          <section class="box special">
            <span class="image featured"><img src="static/images/pic022.jpg" alt="" /></span>
            <h3>Dzịt giả - Truyện tranh</h3>
            <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
            <ul class="actions">
              <li><a href="#" class="button alt">Learn More</a></li>
            </ul>
          </section>

        </div>
        <div class="6u 12u(narrower)">

          <section class="box special">
            <span class="image featured"><img src="static/images/pic033.jpg" alt="" /></span>
            <h3>Dzật giả - Truyện chữ</h3>
            <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
            <ul class="actions">
              <li><a href="#" class="button alt">Learn More</a></li>
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
</template>

<script>

import TkgHeader from '../common/Header'
import TkgBanner from '../common/Banner'
import TkgFooter from '../common/Footer'
import TkgCta from '../common/BetaInvite'

export default {
  name: 'tkg-landing',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { TkgHeader, TkgBanner, TkgFooter, TkgCta }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
