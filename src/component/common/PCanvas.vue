<template lang="pug">
  div
    canvas(:width='width', :height='height', :id="'realcan' + _uid")
</template>

<script>
import {fabric} from 'fabric'

import EventBus from '@/event-bus'

const makeTextClass = (Clazz, type) => {
  return fabric.util.createClass(fabric.Group, {
    type: type,
    initialize: function(options) {
      options || (options = {})

      let items = []
      items[0] = new fabric.Text('', {
        fontSize: 16
      })
      items[1] = new Clazz(options)

      this.callSuper('initialize', options)
      this.addWithUpdate(items[0])
      this.addWithUpdate(items[1])
    },
    toObject: function() {
      return fabric.util.object.extend(this.callSuper('toObject'), {
        text: this.get('text')
      })
    },
    _render: function(ctx) {
      this.callSuper('_render', ctx)
      // ctx.font = '20px Helvetica'
      // ctx.textAlign = 'center'
      // ctx.fillStyle = '#333'
      // ctx.fillText(this.text, 0, 0) // -this.width / 2, -this.height / 2 + 20)
    }
  })
}

const TextRect = makeTextClass(fabric.Rect, 'textRect')
const TextEllipse = makeTextClass(fabric.Ellipse, 'textEllipse')

let dr = (x, y) => new TextRect({
  width: 0,
  height: 0,
  left: x,
  top: y,
  // originX: 'center',
  // originY: 'center',
  fill: 'white',
  objectCaching: false,
  opacity: 0,
  // fill: 'rgba(255,255,255,0)',
  hasRotatingPoint: false
  // stroke: 'rgba(100,200,200,0.5)'
})

let ddr = (w, h) => {
  return { width: w, height: h }
}

let dde = (rx, ry) => {
  return { rx: rx / 2, ry: ry / 2 }
}

let de = (x, y) => new TextEllipse({
  width: 0,
  height: 0,
  left: x,
  top: y,
  originX: 'left',
  originY: 'top',
  // fill: 'white',
  fill: 'rgba(255,255,255,0)',
  hasRotatingPoint: false
  // stroke: 'rgba(100,200,200,0.5)'
})

// let dtext = (text) => new fabric.Text(text, {
//   fontSize: 16,
//   originX: 'center',
//   originY: 'center'
// })

export default {
  props: ['width', 'height', 'data', 'imgSrc', 'draw-rect-enabled', 'draw-ellipse-enabled', 'current-text'],
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
    drawEllipseEnabled: function(val) {
      this.drawPreparing(val, de, dde)
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
        console.log('update the text pleasssse!!!!')
        ao.set('text', txt)
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
      let square = this.drawFunc(mouse.x, mouse.y)
      // if (this.currentText) {
      //   console.log(this.currentText)
      //   let text = dtext(this.currentText, mouse)
      //   let group = new fabric.Group([square, text])
      //   this.canvas.add(group).setActiveObject(group)
      // } else {
      this.canvas.add(square).setActiveObject(square)
      // }
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
      let r = this.canvas.getActiveObject()
      if (r) {
        console.log('pos: x:' + r.top + ' y:' + r.left + ' w:' + r.width + ' h:' + r.height)
        r.set('text', this.currentText)
        r.setCoords()
        this.canvas.renderAll()
        this.$parent.$emit('pr:box:created')
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
        fabric.util.animate({
          startValue: op.target.get('opacity'),
          endValue: 1,
          duration: 100,
          onChange: (val) => {
            op.target.set('opacity', val)
            this.canvas.renderAll()
          },
          onComplete: () => {
            // op.target.setCoords()
          }
        })
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
        fabric.util.animate({
          startValue: op.target.get('opacity'),
          endValue: 0,
          duration: 100,
          onChange: (val) => {
            op.target.set('opacity', val)
            this.canvas.renderAll()
          },
          onComplete: () => {
            // op.target.setCoords()
          }
        })
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
