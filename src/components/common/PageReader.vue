<template lang="pug">
div
  b-container(fluid)
    b-row
      b-col(lg='8', md='10')
        p-canvas.mr-auto.ml-auto.d-block(:id="'can_'+page.num",
          :imgSrc='imgSrc'
          :width='page.width', :height='page.height',
          :drawRectEnabled='dre', :drawEllipseEnabled='dee',
          :currentText='cText'
        )
      b-col(lg='4', md='2')
        //- .drawing
        //-   p text box appear on top when a box drawed
        //-   b-form-textarea(v-model='currentText', placeholder='rawed', rows=3, max-rows=5, ref='inpt')
        //- .historical
        //-   p comment on translated box, raw text here next
</template>

<script>
import PCanvas from '@/components/common/PCanvas'
import fb from '@/modules/firebase.js'
let imgsRef = fb.storage.ref('manga')
export default {
  props: ['page', 'dre', 'dee', 'current-text'],
  components: { PCanvas },
  data() {
    return {
      cText: null,
      imgSrc: null
    }
  },
  watch: {
    currentText: function(val) {
      this.cText = val
    }
  },
  methods: {
    handleBoxCreated(txt) {
      this.cText = txt
      this.$parent.$refs.inpt.$el.focus()
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

<style lang="scss" scoped>
.drawing {
  position: fixed;
  bottom: 15px;
  right: 5px;
}
</style>
