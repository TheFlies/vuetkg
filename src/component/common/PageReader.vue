<template lang="pug">
  b-container(fluid)
    b-row
      b-col(sm='9')
        slot
      b-col(sm='3')
        .drawing
          p text box appear on top when a box drawed
          b-form-textarea(v-model='currentText', placeholder='rawed', rows=3, max-rows=5)
        .historical
          p comment on translated box, raw text here next
</template>

<script>
import PCanvas from '@/component/common/PCanvas'
export default {
  props: [],
  components: { PCanvas },
  data() {
    return {
      currentText: null
    }
  }
}
</script>

<style lang="scss">
</style>
