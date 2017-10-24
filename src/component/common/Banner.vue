<template lang="pug">
.page-header.section-dark.withbg(:style='parallax')
  .filter
  .moving-clouds(v-if='showClouds')
  .content-center
    .container
      .title-brand.noselect
        h1.presentation-title.display-1.text-light.dancing-font(v-if='title') {{title}}
        .fog-low(v-if='showFogs')
          img(src='../../assets/img/fog-low.png', alt='')
        .fog-low.right(v-if='showFogs')
          img(src='../../assets/img/fog-low.png', alt='')
      blockquote.blockquote.text-center.text-light.lora-font(v-if='quote', v-html='quote')
      br
      slot
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

.blockquote {
  border-top: 1px solid white;
  border-bottom: 1px solid white;
}
</style>
