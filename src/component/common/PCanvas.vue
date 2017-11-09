<template lang="pug">
  div
    canvas(:width='width', :height='height', :id="'realcan' + _uid")
</template>

<script>
import {fabric} from 'fabric'

export default {
  props: ['width', 'height', 'data', 'imgSrc', 'draw-enabled'],
  data() {
    return {
      canvas: null,
      drawing: false,
      x: null,
      y: null,
      square: null
    }
  },
  mounted() {
    this.canvas = new fabric.Canvas('realcan' + this._uid)
    this.canvas.on('mouse:down', this.startDraw)
    this.canvas.on('mouse:up', this.removeDraw)
    this.canvas.on('mouse:move', this.draw)
    this.canvas.on('mouse:up', this.stopDraw)
    this.canvas.selection = false
    if (this.imgSrc) {
      fabric.Image.fromURL(this.imgSrc, (fimg) => {
        this.canvas.setBackgroundImage(this.imgSrc, this.canvas.renderAll.bind(this.canvas))
        this.$emit('imgloaded')
      })
    }
  },
  updated() {
    this.canvas = new fabric.Canvas('realcan' + this._uid)
    this.canvas.on('mouse:down', this.startDraw)
    this.canvas.on('mouse:up', this.removeDraw)
    this.canvas.on('mouse:move', this.draw)
    this.canvas.on('mouse:up', this.stopDraw)
    this.canvas.selection = false
    if (this.imgSrc) {
      // this.canvas.setBackgroundImage(this.imgSrc, this.canvas.renderAll.bind(this.canvas))
      fabric.Image.fromURL(this.imgSrc, (fimg) => {
        this.canvas.setBackgroundImage(this.imgSrc, this.canvas.renderAll.bind(this.canvas))
        this.$emit('imgloaded')
      })
    }
  },
  watch: {
    imgSrc: function(val) {
      if (this.canvas) {
        // this.canvas.setBackgroundImage(val, this.canvas.renderAll.bind(this.canvas))
        fabric.Image.fromURL(this.imgSrc, (fimg) => {
          this.canvas.setBackgroundImage(this.imgSrc, this.canvas.renderAll.bind(this.canvas))
          this.$emit('imgloaded')
        })
      }
    },
    drawEnabled: function(val) {
      this.canvas.getObjects().forEach(obj => {
        obj.selectable = val
      })
      this.canvas.renderAll()
    }
  },
  methods: {
    startDraw(options) {
      if (!this.drawEnabled || options.target) {
        return false
      }
      this.drawing = true
      let mouse = this.canvas.getPointer(options.e)
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
    removeDraw(options) {
      if (!this.drawing || !this.drawEnabled) {
        return false
      }
      let square = this.canvas.getActiveObject()
      let w = square.get('width')
      let h = square.get('height')
      if (w === 0 && h === 0) {
        this.canvas.remove(square)
      }
    },
    draw(options) {
      if (!this.drawing || !this.drawEnabled) {
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

<style lang="scss">
.canvas-container {
  margin-left: auto;
  margin-right: auto;
}
</style>
