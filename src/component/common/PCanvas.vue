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
      nodraw: false,
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
  },
  updated() {
    // if (!this.canvas) {
    this.canvas = new fabric.Canvas(this.$el)
    this.canvas.on('mouse:down', this.startDraw)
    this.canvas.on('mouse:move', this.draw)
    this.canvas.on('mouse:up', this.stopDraw)
    this.canvas.selection = false
  },
  watch: {
    imgSrc: function(val) {
      this.canvas.setBackgroundImage(val, this.canvas.renderAll.bind(this.canvas))
    }
  },
  methods: {
    startDraw(options) {
      if (!this.nodraw) {
        let mouse = this.canvas.getPointer(options.e)

        console.log(options.target)

        console.log(JSON.stringify(this.boxes, null, 2))
        if (this.boxes.filter(b => {
          b.containsPoint({x: options.e.clientX, y: options.e.clientY})
        }).length > 0) {
          return false
        }

        this.drawing = true
        this.x = mouse.x
        this.y = mouse.y

        let square = new fabric.Rect({
          width: 0,
          height: 0,
          left: this.x,
          top: this.y,
          fill: 'white'
        })

        square.on('mouseover', (options) => {
          this.nodraw = true
        })

        square.on('mouseout', (options) => {
          this.nodraw = false
        })

        this.canvas.add(square)
        this.canvas.renderAll()
        this.canvas.setActiveObject(square)

        this.boxes.push(square)
      }
    },
    draw(options) {
      if (!this.drawing || this.nodraw) {
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
      this.canvas.renderAll()
    },
    stopDraw() {
      if (this.drawing) {
        this.drawing = false
      }
    }
  }
}
</script>

