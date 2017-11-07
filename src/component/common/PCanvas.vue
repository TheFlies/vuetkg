<template lang="pug">
  canvas(:width='width', :height='height', ref='canvas')
</template>

<script>
import {fabric} from 'fabric'

export default {
  props: ['width', 'height', 'data', 'imgSrc'],
  data() {
    return {
      canvas: null,
      drawing: false,
      x: null,
      y: null,
      square: null,
      boxes: []
    }
  },
  mounted() {
    this.canvas = new fabric.Canvas(this.$el)
    this.canvas.on('mouse:down', this.startDraw)
    this.canvas.on('mouse:move', this.draw)
    this.canvas.on('mouse:up', this.stopDraw)
    this.canvas.selection = false

    let square = new fabric.Rect({width: 100, height: 100, left: 10, top: 15, fill: 'white'})
    this.canvas.add(square)
    this.boxes.push(square)
  },
  updated() {
    // if (!this.canvas) {
    // this.canvas = new fabric.Canvas(this.$el)
    // this.canvas.on('mouse:down', this.startDraw)
    // this.canvas.on('mouse:move', this.draw)
    // this.canvas.on('mouse:up', this.stopDraw)
    // this.canvas.selection = false
    this.canvas.renderAll()
  },
  watch: {
    imgSrc: function(val) {
      this.canvas.setBackgroundImage(val, this.canvas.renderAll.bind(this.canvas))
    }
  },
  methods: {
    startDraw(options) {
      if (options.target) {
        return false
      }
      this.drawing = true
      let mouse = this.canvas.getPointer(options.e)

      // // console.log(JSON.stringify(this.boxes, null, 2))
      if (this.boxes.filter(b => {
        // console.log('contained: ' + this.canvas.containsPoint(null, b, mouse))
        return b.containsPoint(mouse)
      }).length > 0) {
        return false
      }

      // this.drawing = true
      this.x = mouse.x
      this.y = mouse.y

      let square = new fabric.Rect({
        width: 0,
        height: 0,
        left: this.x,
        top: this.y,
        fill: 'white',
        hasRotatingPoint: false
      })
      // square.per
      this.canvas.add(square)
      this.canvas.renderAll()
      this.canvas.setActiveObject(square)
    },
    draw(options) {
      if (!this.drawing) {
        return false
      }
      let mouse = this.canvas.getPointer(options.e)
      let w = Math.abs(mouse.x - this.x)
      let h = Math.abs(mouse.y - this.y)

      if (!w || !h) {
        return false
      }

      let square = this.canvas.getActiveObject()
      square.set('width', w).set('height', h)
      square.set('hasRotatingPoint', false)
      this.canvas.add(square)
      this.canvas.renderAll()
    },
    stopDraw() {
      if (this.drawing) {
        this.drawing = false
      }
    },
    deleteActiveObject() {
      console.log('delete')
      this.canvas.getActiveObject().remove()
    }
  }
}
</script>

