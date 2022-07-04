<script setup lang="ts">
// .page-header.section-dark.withbg(:style='parallax')
//   .filter
//   .moving-clouds(v-if='showClouds')
//   .content-center
//     .container
//       .title-brand.noselect
//         h1.presentation-title.display-1.text-light.dancing-font(v-if='title') {{title}}
//         .fog-low(v-if='showFogs')
//           img(src='@/assets/img/fog-low.png', alt='')
//         .fog-low.right(v-if='showFogs')
//           img(src='@/assets/img/fog-low.png', alt='')
//         blockquote.blockquote.text-center.text-light.lora-font(v-if='quote', v-html='quote')
//         br
//         slot
// </template>

import { isBelow } from '@/utils/window'
import { debounce, isNull } from 'lodash'
import { onBeforeUnmount, onMounted, ref } from 'vue'

// <script>
// export default {
//   name: 'tkg-banner',
//   props: {
//     'data-parallax': Boolean,
//     'title': String,
//     'show-fogs': Boolean,
//     'quote': String,
//     'show-clouds': Boolean
//   },
//   data() {
//     return {
//       parallax: null
//     }
//   },
//   mounted() {
//     this.scrolling()
//   },
//   methods: {
//     enableParallax(oVal) {
//       return {
//         'transform': 'translate3d(0,' + oVal + 'px,0)',
//         '-webkit-transform': 'translate3d(0,' + oVal + 'px,0)',
//         '-ms-transform': 'translate3d(0,' + oVal + 'px,0)',
//         '-o-transform': 'translate3d(0,' + oVal + 'px,0)'
//       }
//     },
//     scrolling() {
//       let windowWidth = window.innerWidth
//       if (this.dataParallax && windowWidth >= 768) {
//         this.parallax = this.enableParallax(document.documentElement.scrollTop / 8, windowWidth)
//       } else {
//         this.parallax = null
//       }
//     }
//   },
//   created () {
//     if (this.dataParallax) {
//       window.addEventListener('scroll', this.scrolling)
//     }
//   },
//   destroyed () {
//     if (this.dataParallax) {
//       window.removeEventListener('scroll', this.scrolling)
//     }
//   }
// }
const me = ref()
function _scroll_handler() {
  let lastPos: number | null,
    newPos: number,
    timer: number,
    delta: number,
    delay = 300

  const clear = () => {
    lastPos = null
    delta = 0
  }

  clear()

  return () => {
    newPos = window.scrollY
    if (!isNull(lastPos)) {
      delta = newPos - lastPos
    }
    lastPos = newPos
    clearTimeout(timer)
    timer = setTimeout(clear, delay)
    return delta
  }
}
const scrollHandler = _scroll_handler()
const scrp = () => {
  console.log('delta', scrollHandler())
}

onMounted(() => {
  window.addEventListener('scroll', scrp)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrp)
})
</script>

<style scoped>
.banner {
  @apply bg-gray-800 w-full h-350px overflow-hidden opacity-70;
}
</style>

<template>
  <div id="banner" class="banner" ref="me">
    <div
      class="w-full h-350px absolute top-0 left-0 bgimg-banner01_dot_jpg bg-center bg-no-repeat bg-cover"
    ></div>
  </div>
</template>
