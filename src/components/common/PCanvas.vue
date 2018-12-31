<template lang="pug">
div
  canvas(:width='width', :height='height', :id="'realcan' + _uid")
</template>

<script>
import { fabric } from 'fabric'
import EventBus from '@/modules/event-bus'

let dr = (x, y) => {
  let r = new fabric.Rect({
    width: 0,
    height: 0,
    left: x,
    top: y,
    originX: 'start',
    originY: 'start',
    fill: 'white',
    objectCaching: false,
    opacity: 1,
    // fill: 'rgba(255,255,255,0)',
    hasRotatingPoint: false
    // stroke: 'rgba(100,200,200,0.5)'
  })
  let t = new fabric.Text('', {
    top: y - 10,
    left: x,
    fontSize: 20,
    fillStyle: '#333'
  })
  return new fabric.Group([r, t])
}
let ddr = (w, h) => {
  return { width: w, height: h }
}
export default {
  props: ['width', 'height', 'data', 'imgSrc', 'draw-rect-enabled', 'draw-ellipse-enabled', 'current-text'],
  data() {
    return {
      canvas: null,
      drawing: false,
      mp: {},
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
    this.canvas.on('object:scaling', this.onObjectScale)
    this.canvas.on('mouse:over', this.onMouseOver)
    this.canvas.on('mouse:out', this.onMouseOut)
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
    this.canvas.dispose()
  },
  updated() {
    EventBus.$on('pr:delete', this.deleteActiveObject)
    this.canvas = new fabric.Canvas('realcan' + this._uid)
    this.canvas.on('mouse:down', this.onMouseDown)
    this.canvas.on('mouse:up', this.onMouseUp)
    this.canvas.on('mouse:move', this.onMouseMove)
    this.canvas.on('object:moving', this.onMouseUp)
    this.canvas.on('object:scaling', this.onObjectScale)
    this.canvas.on('mouse:over', this.onMouseOver)
    this.canvas.on('mouse:out', this.onMouseOut)
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
          this.$parent.$emit('imgloaded')
        })
      }
    },
    drawRectEnabled: function(val) {
      this.drawPreparing(val, dr, ddr)
    },
    currentText: function(val) {
      this.drawText(val)
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
    drawText(txt) {
      let ao = this.canvas.getActiveObject()
      if (ao) {
        ao._objects[1].set('text', txt)
        ao.setCoords()
        this.canvas.renderAll()
      }
    },
    onMouseDown(options) {
      if (!this.drawFunc || options.target) {
        return false
      }
      this.drawing = true
      let mouse = this.canvas.getPointer(options.e)
      this.mp = mouse
      let group = this.drawFunc(mouse.x, mouse.y)
      this.canvas.add(group).setActiveObject(group)
    },
    onMouseUp(options) {
      if (this.drawing) {
        this.drawing = false
      }
      let r = this.canvas.getActiveObject()
      if (r) {
        let mouse = this.canvas.getPointer(options.e)
        if (mouse.x === this.mp.x && mouse.y === this.mp.y) {
          this.canvas.remove(r)
        } else {
          let obj = r
          let w = obj.width * obj.scaleX
          let h = obj.height * obj.scaleY
          obj._objects[0].set({
            'height': obj.height,
            'width': obj.width,
            'scaleX': 1,
            'scaleY': 1,
            h: h,
            w: w
          })
          obj._objects[1].set({
            'height': obj.height,
            'width': obj.width,
            'scaleX': 1,
            'scaleY': 1,
            'textAlign': 'left',
            'originX': 'center',
            'originY': 'start',
            h: h,
            w: w,
            top: 0,
            left: 0
          })
          let text = r._objects[1].get('text')
          this.$parent.$emit('pr:box:selected', text)
        }
      }
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
        this.canvas.renderAll()
      }
    },
    onMouseOver(op) {
      if (op.target) {
        // fabric.util.animate({
        //   startValue: op.target.get('strokeWidth'),
        //   endValue: 5,
        //   duration: 100,
        //   onChange: (val) => {
        //     op.target.set('strokeWidth', val)
        //     this.canvas.renderAll()
        //   },
        //   onComplete: () => {
        //     op.target.setCoords()
        //   }
        // })
        // fabric.util.animate({
        //   startValue: op.target.get('opacity'),
        //   endValue: 1,
        //   duration: 100,
        //   onChange: (val) => {
        //     op.target.set('opacity', val)
        //     this.canvas.renderAll()
        //   },
        //   onComplete: () => {
        //     // op.target.setCoords()
        //   }
        // })
      }
    },
    onMouseOut(op) {
      if (op.target) {
        // fabric.util.animate({
        //   startValue: op.target.get('strokeWidth'),
        //   endValue: 0,
        //   duration: 100,
        //   onChange: (val) => {
        //     op.target.set('strokeWidth', val)
        //     this.canvas.renderAll()
        //   },
        //   onComplete: () => {
        //     op.target.setCoords()
        //   }
        // })
        // fabric.util.animate({
        //   startValue: op.target.get('opacity'),
        //   endValue: 0,
        //   duration: 100,
        //   onChange: (val) => {
        //     op.target.set('opacity', val)
        //     this.canvas.renderAll()
        //   },
        //   onComplete: () => {
        //     // op.target.setCoords()
        //   }
        // })
      }
    },
    onObjectScale(op) {
      console.log('go')
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
