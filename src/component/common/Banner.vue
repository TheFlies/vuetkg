<template lang="pug">
.page-header.section-dark.withbg(:style='parallax')
  .filter
  .moving-clouds.withbg(v-if='showClouds')
  .content-center
    .container
      .title-brand.noselect
        h1.presentation-title.dancing-font(v-if='title') {{title}}
        .fog-low(v-if='showFogs')
          img(src='../../assets/pk-2.1.0/img/fog-low.png', alt='')
        .fog-low.right(v-if='showFogs')
          img(src='../../assets/pk-2.1.0/img/fog-low.png', alt='')
        blockquote.blockquote.lora-font(v-if='quote', v-html='quote')
        br
        slot
//- section#banner
//-   h2 Tàng Kinh Gác
//-   blockquote "Xa chốn ngựa xe xuân mộng đến<br/>Vui bên sách vở tuổi già ngâm"<cite> - Nguyễn Bỉnh Khiêm</cite>
//-   ul.actions
//-     li: a.html5up-button.special(href='/register') Đăng ký
//-     li: a.html5up-button(href='#') Tìm hiểu thêm
</template>

<<script>
export default {
  name: 'tkg-banner',
  props: ['data-parallax', 'title', 'show-fogs', 'quote', 'show-clouds'],
  data() {
    return {
      parallax: null
    }
  },
  mounted() {
    this.scrolling()
  },
  methods: {
    enableParallax(oVal, windowWidth) {
      return {
        'transform': 'translate3d(0,' + oVal + 'px,0)',
        '-webkit-transform': 'translate3d(0,' + oVal + 'px,0)',
        '-ms-transform': 'translate3d(0,' + oVal + 'px,0)',
        '-o-transform': 'translate3d(0,' + oVal + 'px,0)'
      }
    },
    scrolling() {
      let windowWidth = window.innerWidth
      if (this.dataParallax && windowWidth >= 768) {
        this.parallax = this.enableParallax(document.documentElement.scrollTop / 8, windowWidth)
      } else {
        this.parallax = null
      }
    }
  },
  created () {
    if (this.dataParallax) {
      window.addEventListener('scroll', this.scrolling)
    }
  },
  destroyed () {
    if (this.dataParallax) {
      window.removeEventListener('scroll', this.scrolling)
    }
  }
}
</script>

<style scoped>
.dancing-font {
  font-family: 'Dancing Script', cursive
}
.lora-font {
  font-family: 'Lora', serif
}

/*
blockquote {
  font-family: 'Lora', serif
}

a .button {
  font-family: 'Roboto Slab', serif
} */
.section-dark.withbg {
  background-image: url(../../assets/img/banner01.jpg)
}
.moving-clouds.withbg {
  background-image: url(../../assets/pk-2.1.0/img/clouds.png)
}
</style>
