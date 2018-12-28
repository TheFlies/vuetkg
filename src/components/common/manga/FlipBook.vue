<template lang="pug">
#book.mr-auto.ml-auto(
  @mousemove="mouseMoveHandler"
  @mousedown="mouseDownHandler"
  @mouseup="mouseUpHandler"
)
  #pages
    section
      div
        h2 History
        p Canvas was initially introduced by Apple for use inside
          | their own Mac OS X WebKit component, powering
          | applications like Dashboard widgets and the Safari
          | browser. Later, it was adopted by Gecko browsers and
          | Opera and standardized by the WHATWG on new proposed
          | specifications for next generation web technologies.
    section
      div
        h2 Usage
        p Canvas consists of a drawable region defined in HTML code
          | with height and width attributes. JavaScript code may
          | access the area through a full set of drawing functions
          | similar to other common 2D APIs, thus allowing for
          | dynamically generated graphics. Some anticipated uses
          | of canvas include building graphs, animations, games,
          | and image composition.
    canvas#pageflip-canvas
</template>

<script>
function Region() {
  this.left = 999999
  this.top = 999999
  this.right = 0
  this.bottom = 0
}
Region.prototype.reset = function() {
  this.left = 999999
  this.top = 999999
  this.right = 0
  this.bottom = 0
}
Region.prototype.inflate = function(x, y) {
  this.left = Math.min(this.left, x)
  this.top = Math.min(this.top, y)
  this.right = Math.max(this.right, x)
  this.bottom = Math.max(this.bottom, y)
}
Region.prototype.contains = function(x, y) {
  return x > this.left && x < this.right && y > this.top && y < this.bottom
}
Region.prototype.toRectangle = function(padding) {
  padding |= 0
  return {
    x: this.left - padding,
    y: this.top - padding,
    width: this.right - this.left + (padding * 2),
    height: this.bottom - this.top + (padding * 2)
  }
}
export default {
  name: 'tkg-flip-book',
  props: {
    bookWidth: {
      default: 830,
      type: Number
    },
    bookHeight: {
      default: 260,
      type: Number
    },
    pageWidth: {
      default: 400,
      type: Number
    },
    pageHeight: {
      default: 250,
      type: Number
    },
    pageMinWidth: {
      default: 1000,
      type: Number
    },
    pageMinHeight: {
      default: 680,
      type: Number
    },
    pageMarginX: {
      default: 32,
      type: Number
    },
    pageMarginY: {
      default: 10,
      type: Number
    },
    bookOffsetX: {
      default: 5,
      type: Number
    },
    canvasVerticalPadding: {
      default: 80,
      type: Number
    },
    canvasHorizontalPadding: {
      default: 20,
      type: Number
    }
  },
  data() {
    return {
      book: null,
      canvas: null,
      context: null,
      canvasPadding: 60,
      mouseOverWidth: 60,
      page: 0,
      mouse: { x: 0, y: 0 },
      flips: [],
      frameRate: 30,
      clickFrequency: 350,
      pages: [],
      dirtyRegion: new Region()
    }
  },
  computed: {
    pageY() {
      return (this.bookHeight - this.pageHeight) / 2
    },
    bookWidthClosed() {
      return (this.bookWidth / 2)
    },
    canvasWidth() {
      return this.bookWidth + (this.canvasHorizontalPadding * 2)
    },
    canvasHeight() {
      return this.bookHeight + (this.canvasVerticalPadding * 2)
    }
  },
  mounted() {
    this.canvas = document.getElementById('pageflip-canvas')
    this.context = this.canvas.getContext('2d')
    this.book = document.getElementById('book')
    // List of all the page elements in the DOM
    let pages = this.book.getElementsByTagName('section')
    // Organize the depth of our pages and create the flip definitions
    for (let i = 0, len = pages.length; i < len; i++) {
      pages[i].style.zIndex = len - i
      this.flips.push({
        // Current progress of the flip (left -1 to right +1)
        progress: 1,
        // The target value towards which progress is always moving
        target: 1,
        // The page DOM element related to this flip
        page: pages[i],
        // True while the page is being dragged
        dragging: false,
        over: false
      })
    }
    // Resize the canvas to match the book size
    this.canvas.width = this.bookWidth + (this.canvasPadding * 2)
    this.canvas.height = this.bookHeight + (this.canvasPadding * 2)
    // Offset the canvas so that it's padding is evenly spread around the book
    this.canvas.style.top = -this.canvasPadding + 'px'
    this.canvas.style.left = -this.canvasPadding + 'px'
    // Render the page flip 60 times a second
    setInterval(this.render, 1000 / 60)
  },
  methods: {
    mouseMoveHandler(event) {
      // Offset mouse position so that the top of the spine is 0,0
      this.mouse.x = event.clientX - this.book.offsetLeft - (this.bookWidth / 2)
      this.mouse.y = event.clientY - this.book.offsetTop
      if (Math.abs(this.mouse.x) < this.pageWidth && this.mouse.x > (this.pageWidth - this.mouseOverWidth)) {
        if (this.page + 1 < this.flips.length) {
          this.flips[this.page].over = true
        }
      } else {
        // animate this back to normal
        if (this.flips[this.page]) {
          if (this.flips[this.page].over) {
            this.flips[this.page].target = 1
            this.flips[this.page].over = false
          }
        }
      }
    },
    mouseDownHandler(event) {
      if (Math.abs(this.mouse.x) < this.pageWidth && (this.mouse.x > (this.pageWidth - this.mouseOverWidth) || this.mouse.x < 0)) {
        if (this.mouse.x < 0 && this.page - 1 >= 0) {
          this.flips[this.page - 1].dragging = true
        } else if (this.mouse.x > 0 && this.page + 1 < this.flips.length) {
          this.flips[this.page].dragging = true
        }
      }
      // Prevents the text selection cursor from appearing when dragging
      // but ok for other case
      if (this.page < this.flips.length && this.flips[this.page].dragging) {
        event.preventDefault()
      }
    },
    mouseUpHandler(event) {
      for (var i = 0; i < this.flips.length; i++) {
        // If this flip was being dragged we animate to its destination
        if (this.flips[i].dragging) {
          // Figure out which page we should go to next depending on the flip direction
          if (this.mouse.x < 0) {
            this.flips[i].target = -1
            this.page = Math.min(this.page + 1, this.flips.length)
          } else {
            this.flips[i].target = 1
            this.page = Math.max(this.page - 1, 0)
          }
        }
        this.flips[i].dragging = false
      }
    },
    render() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.canvas.style.zIndex = 0
      for (let i = 0; i < this.flips.length; i++) {
        let flip = this.flips[i]
        if (flip.dragging || flip.over) {
          flip.target = Math.max(Math.min(this.mouse.x / this.pageWidth, 1), -1)
        }
        flip.progress += (flip.target - flip.progress) * 0.2
        // If the flip is being dragged or is somewhere in the middle of the book, render it
        if (flip.dragging || flip.over || Math.abs(flip.progress) < 0.997) {
          this.canvas.style.zIndex = 1010
          this.drawFlip(flip)
        }
      }
    },
    drawFlip(flip) {
      // Strength of the fold is strongest in the middle of the book
      var strength = 1 - Math.abs(flip.progress)
      // Width of the folded paper
      var foldWidth = (this.pageWidth * 0.5) * (1 - flip.progress)
      // X position of the folded paper
      var foldX = this.pageWidth * flip.progress + foldWidth
      // How far the page should outdent vertically due to perspective
      var verticalOutdent = 20 * strength
      // The maximum width of the left and right side shadows
      var paperShadowWidth = (this.pageWidth * 0.5) * Math.max(Math.min(1 - flip.progress, 0.5), 0)
      var rightShadowWidth = (this.pageWidth * 0.5) * Math.max(Math.min(strength, 0.5), 0)
      var leftShadowWidth = (this.pageWidth * 0.5) * Math.max(Math.min(strength, 0.5), 0)
      // Change page element width to match the x position of the fold
      flip.page.style.width = Math.max(foldX, 0) + 'px'
      this.context.save()
      this.context.translate(this.canvasPadding + (this.bookWidth / 2), this.pageY + this.canvasPadding)
      // Draw a sharp shadow on the left side of the page
      this.context.strokeStyle = 'rgba(0,0,0,' + (0.05 * strength) + ')'
      this.context.lineWidth = 30 * strength
      this.context.beginPath()
      this.context.moveTo(foldX - foldWidth, -verticalOutdent * 0.5)
      this.context.lineTo(foldX - foldWidth, this.pageHeight + (verticalOutdent * 0.5))
      this.context.stroke()
      // Right side drop shadow
      var rightShadowGradient = this.context.createLinearGradient(foldX, 0, foldX + rightShadowWidth, 0)
      rightShadowGradient.addColorStop(0, 'rgba(0,0,0,' + (strength * 0.2) + ')')
      rightShadowGradient.addColorStop(0.8, 'rgba(0,0,0,0.0)')
      this.context.fillStyle = rightShadowGradient
      this.context.beginPath()
      this.context.moveTo(foldX, 0)
      this.context.lineTo(foldX + rightShadowWidth, 0)
      this.context.lineTo(foldX + rightShadowWidth, this.pageHeight)
      this.context.lineTo(foldX, this.pageHeight)
      this.context.fill()
      // Left side drop shadow
      var leftShadowGradient = this.context.createLinearGradient(foldX - foldWidth - leftShadowWidth, 0, foldX - foldWidth, 0)
      leftShadowGradient.addColorStop(0, 'rgba(0,0,0,0.0)')
      leftShadowGradient.addColorStop(1, 'rgba(0,0,0,' + (strength * 0.15) + ')')
      this.context.fillStyle = leftShadowGradient
      this.context.beginPath()
      this.context.moveTo(foldX - foldWidth - leftShadowWidth, 0)
      this.context.lineTo(foldX - foldWidth, 0)
      this.context.lineTo(foldX - foldWidth, this.pageHeight)
      this.context.lineTo(foldX - foldWidth - leftShadowWidth, this.pageHeight)
      this.context.fill()
      // Gradient applied to the folded paper (highlights & shadows)
      var foldGradient = this.context.createLinearGradient(foldX - paperShadowWidth, 0, foldX, 0)
      foldGradient.addColorStop(0.35, '#fafafa')
      foldGradient.addColorStop(0.73, '#eeeeee')
      foldGradient.addColorStop(0.9, '#fafafa')
      foldGradient.addColorStop(1.0, '#e2e2e2')
      this.context.fillStyle = foldGradient
      this.context.strokeStyle = 'rgba(0,0,0,0.06)'
      this.context.lineWidth = 0.5
      // Draw the folded piece of paper
      this.context.beginPath()
      this.context.moveTo(foldX, 0)
      this.context.lineTo(foldX, this.pageHeight)
      this.context.quadraticCurveTo(foldX, this.pageHeight + (verticalOutdent * 2), foldX - foldWidth, this.pageHeight + verticalOutdent)
      this.context.lineTo(foldX - foldWidth, -verticalOutdent)
      this.context.quadraticCurveTo(foldX, -verticalOutdent * 2, foldX, 0)
      this.context.fill()
      this.context.stroke()
      this.context.restore()
    }
  }
}
</script>

<style lang="scss" scoped>
#book {
  background: url("../../../assets/img/book.png") no-repeat;
  position: relative;
  width: 830px;
  height: 260px;
  margin-top: 25px;
}
#pages section {
  background: url("../../../assets/img/paper.png") no-repeat;
  display: block;
  width: 400px;
  height: 250px;
  position: absolute;
  left: 415px;
  top: 5px;
  overflow: hidden;
}
#pages section>div {
  display: block;
  width: 400px;
  height: 250px;
  font-size: 12px;
}
#pages section p,
#pages section h2 {
  padding: 3px 35px;
  line-height: 1.4em;
  text-align: justify;
}
#pages section h2{
  margin: 15px 0 10px;
}
#pageflip-canvas {
  position: absolute;
  z-index: 0;
}
.mplace {
  width: 100%;
  height: 100%;
  z-index: 10 !important;
}
</style>
