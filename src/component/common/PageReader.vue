<template lang="pug">
  b-container(fluid)
    b-row
      b-col(sm='9')
        p-canvas.mr-auto.ml-auto.d-block(:id="'can_'+page.num",
          :imgSrc='imgSrc'
          :width='page.width', :height='page.height',
          :drawRectEnabled='dre', :drawEllipseEnabled='dee',
          :currentText='currentText'
        )
        //- slot(v-bind='currentText')
      b-col(sm='3')
        .drawing
          p text box appear on top when a box drawed
          b-form-textarea(v-model='currentText', placeholder='rawed', rows=3, max-rows=5)
        .historical
          p comment on translated box, raw text here next
</template>

<script>
import PCanvas from '@/component/common/PCanvas'

import fb from '../../firebase.js'
let imgsRef = fb.storage.ref('manga')

export default {
  props: ['page', 'dre', 'dee'],
  components: { PCanvas },
  data() {
    return {
      currentText: null,
      imgSrc: null
    }
  },
  methods: {
    handleBoxCreated(txt) {
      console.log(txt)
      if (txt) {
        this.currentText = txt
      } else {
        this.currentText = ''
      }
    }
  },
  mounted() {
    imgsRef.child(this.page.imgRef).getDownloadURL().then((url) => {
      this.imgSrc = url
    })
  },
  created() {
    this.$on('pr:box:selected', this.handleBoxCreated)
  },
  destroyed() {
    this.$off()
  }
}
</script>

<style lang="scss">
</style>
