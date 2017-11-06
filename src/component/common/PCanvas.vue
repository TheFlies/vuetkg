<template lang="pug">
  canvas(:width='width', :height='height', ref='canvas')
</template>

<script>
export default {
  props: ['width', 'height'],
  data() {
    return {
      canvas: {}
    }
  },
  mounted() {
    this.canvas = this.$refs.canvas
    this.context = this.canvas.getContext('2d')
    this.context.rect(20, 20, 150, 100)
    this.context.stroke()

    this.context.fillStyle = '#FFFFFF'
    this.context.fill() // (20, 20, 150, 100)
  }
}
</script>

