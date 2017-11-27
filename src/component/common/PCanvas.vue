<template lang="pug">
  div
    canvas(:width='width', :height='height', :id="'realcan' + _uid")
</template>

<script>
import {fabric} from 'fabric'

import EventBus from '@/event-bus'

let dr = (x, y) => new fabric.Rect({
  width: 0,
  height: 0,
  left: x,
  top: y,
  fill: 'white',
  hasRotatingPoint: false
})

let ddr = (w, h) => {
  return { width: w, height: h }
}

let dde = (rx, ry) => {
  return { rx: rx / 2, ry: ry / 2 }
}

let de = (x, y) => new fabric.Ellipse({
  width: 0,
  height: 0,
  left: x,
  top: y,
  originX: 'left',
  originY: 'top',
  fill: 'white',
  hasRotatingPoint: false
})

export default {
  props: ['width', 'height', 'data', 'imgSrc', 'draw-rect-enabled', 'draw-ellipse-enabled'],
  data() {
    return {
      canvas: null,
      drawing: false,
      square: null,
      drawFunc: null,
      drawUpdateResultFunc: null
    }
  },
  mounted() {
    EventBus.$on('pr:delete', this.deleteActiveObject)

    this.canvas = new fabric.Canvas('realcan' + this._uid)
    this.canvas.on('mouse:down', this.onMouseDown)
    this.canvas.on('mouse:up', this.onMouseUp)
    this.canvas.on('mouse:move', this.onMouseMove)
    this.canvas.on('object:moving', this.onMouseUp)
    this.canvas.selection = false
    if (this.imgSrc) {
      fabric.Image.fromURL(this.imgSrc, (fimg) => {
        this.canvas.setBackgroundImage(this.imgSrc, this.canvas.renderAll.bind(this.canvas))
        this.$emit('imgloaded')
      })
    }
  },
  destroyed() {
    EventBus.$off('pr:delete')
  },
  updated() {
    EventBus.$on('pr:delete', this.deleteActiveObject)

    this.canvas = new fabric.Canvas('realcan' + this._uid)
    this.canvas.on('mouse:down', this.onMouseDown)
    this.canvas.on('mouse:up', this.onMouseUp)
    this.canvas.on('mouse:move', this.onMouseMove)
    this.canvas.on('object:moving', this.onMouseUp)

    this.canvas.selection = false
    if (this.imgSrc) {
      fabric.Image.fromURL(this.imgSrc, (fimg) => {
        this.canvas.setBackgroundImage(this.imgSrc, this.canvas.renderAll.bind(this.canvas))
        this.$emit('imgloaded')
      })
    }
  },
  watch: {
    imgSrc: function(val) {
      if (this.canvas) {
        fabric.Image.fromURL(this.imgSrc, (fimg) => {
          this.canvas.setBackgroundImage(this.imgSrc, this.canvas.renderAll.bind(this.canvas))
          this.$emit('imgloaded')
        })
      }
    },
    drawRectEnabled: function(val) {
      this.drawPreparing(val, dr, ddr)
    },
    drawEllipseEnabled: function(val) {
      this.drawPreparing(val, de, dde)
    }
  },
  methods: {
    drawPreparing(val, df, drf) {
      if (val) {
        this.drawFunc = df
        this.drawUpdateResultFunc = drf
      } else {
        this.drawFunc = this.drawUpdateResultFunc = null
      }
      this.drawing = val
      this.canvas.getObjects().forEach(obj => {
        obj.selectable = val
      })
      this.canvas.renderAll()
    },
    onMouseDown(options) {
      if (!this.drawFunc || options.target) {
        return false
      }
      this.drawing = true

      let mouse = this.canvas.getPointer(options.e)
      let square = this.drawFunc(mouse.x, mouse.y)
      this.canvas.add(square).setActiveObject(square)
    },
    onMouseUp(options) {
      if (this.drawing) {
        this.drawing = false
      }
      this.canvas.getObjects().forEach(o => {
        let w = o.get('width')
        let h = o.get('height')
        if (w === 0 && h === 0) {
          console.log('remove the unusable object')
          this.canvas.remove(o)
        }
      })
    },
    onMouseMove(options) {
      if (!this.drawing) {
        return false
      }
      let mouse = this.canvas.getPointer(options.e)
      let square = this.canvas.getActiveObject()
      if (square) {
        let w = Math.abs(mouse.x - square.get('left'))
        let h = Math.abs(mouse.y - square.get('top'))

        if (!w || !h) {
          return false
        }
        square.set(this.drawUpdateResultFunc(w, h))
        square.setCoords()
        this.canvas.renderAll()
      }
    },
    deleteActiveObject(cp) {
      if (cp === this.$el.id) {
        if (this.canvas) {
          let ao = this.canvas.getActiveObject() || { get: () => {} }
          this.canvas.remove(ao)
        }
      }
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
