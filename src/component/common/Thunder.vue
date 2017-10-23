<template lang="pug">
.thunder
  canvas#canvas1
  canvas#canvas2
  canvas#canvas3
  slot
</template>

<script>
export default {
  name: 'tkg-login',
  props: ['no-rain', 'no-lightning', 'no-rain-trough'],
  data() {
    return {
      rainThroughNum: 500,
      rainTrough: [],
      speedRainTrough: 25,
      rainNum: 500,
      rain: [],
      lightning: [],
      lightTimeCurrent: 0,
      lightTimeTotal: 0,
      canvas1: null,
      canvas2: null,
      canvas3: null,
      ctx1: null,
      ctx2: null,
      ctx3: null,
      w: null,
      h: null
    }
  },
  methods: {
    random(min, max) {
      return Math.random() * (max - min + 1) + min
    },
    clearcanvas1() {
      this.ctx1.clearRect(0, 0, this.w, this.h)
    },
    clearcanvas2() {
      this.ctx2.clearRect(0, 0, this.canvas2.width, this.canvas2.height)
    },
    clearCanvas3() {
      this.ctx3.globalCompositeOperation = 'destination-out'
      this.ctx3.fillStyle = 'rgba(0,0,0,' + this.random(1, 30) / 100 + ')'
      this.ctx3.fillRect(0, 0, this.w, this.h)
      this.ctx3.globalCompositeOperation = 'source-over'
    },
    animateRainTrough() {
      this.clearcanvas1()
      for (let i = 0; i < this.rainThroughNum; i++) {
        if (this.rainTrough[i].y >= this.h) {
          this.rainTrough[i].y = this.h - this.rainTrough[i].y - this.rainTrough[i].length * 5
        } else {
          this.rainTrough[i].y += this.speedRainTrough
        }
        this.drawRainTrough(i)
      }
    },
    animateRain() {
      this.clearcanvas2()
      for (let i = 0; i < this.rainNum; i++) {
        this.rain[i].x += this.rain[i].xs
        this.rain[i].y += this.rain[i].ys
        if (this.rain[i].x > this.w || this.rain[i].y > this.h) {
          this.rain[i].x = Math.random() * this.w
          this.rain[i].y = -20
        }
        this.drawRain(i)
      }
    },
    animateLightning() {
      this.clearCanvas3()
      this.lightTimeCurrent++
      if (this.lightTimeCurrent >= this.lightTimeTotal) {
        this.createLightning()
        this.lightTimeCurrent = 0
        this.lightTimeTotal = 200 // rand(100, 200)
      }
      this.drawLightning()
    },
    createRainTrough() {
      this.w = this.canvas1.width = this.canvas2.width = this.canvas3.width = window.innerWidth
      this.h = this.canvas1.height = this.canvas2.height = this.canvas3.height = window.innerHeight
      for (let i = 0; i < this.rainThroughNum; i++) {
        this.rainTrough[i] = {
          x: this.random(0, this.w),
          y: this.random(0, this.h),
          length: Math.floor(this.random(1, 830)),
          opacity: Math.random() * 0.2,
          xs: this.random(-2, 2),
          ys: this.random(10, 20)
        }
      }
    },
    createRain() {
      for (var i = 0; i < this.rainNum; i++) {
        this.rain[i] = {
          x: Math.random() * this.w,
          y: Math.random() * this.h,
          l: Math.random() * 1,
          xs: -4 + Math.random() * 4 + 2,
          ys: Math.random() * 10 + 10
        }
      }
    },
    createLightning() {
      var x = this.random(100, this.w - 100)
      var y = this.random(0, this.h / 4)

      var createCount = this.random(1, 3)
      for (var i = 0; i < createCount; i++) {
        let single = {
          x: x,
          y: y,
          xRange: this.random(5, 30),
          yRange: this.random(10, 25),
          path: [
            {
              x: x,
              y: y
            }
          ],
          pathLimit: this.random(40, 55)
        }
        this.lightning.push(single)
      }
    },
    drawRain(i) {
      this.ctx2.beginPath()
      this.ctx2.moveTo(this.rain[i].x, this.rain[i].y)
      this.ctx2.lineTo(
        this.rain[i].x + this.rain[i].l * this.rain[i].xs,
        this.rain[i].y + this.rain[i].l * this.rain[i].ys
      )
      this.ctx2.strokeStyle = 'rgba(174,194,224,0.5)'
      this.ctx2.lineWidth = 1
      this.ctx2.lineCap = 'round'
      this.ctx2.stroke()
    },
    drawRainTrough(i) {
      this.ctx1.beginPath()
      var grd = this.ctx1.createLinearGradient(
        0,
        this.rainTrough[i].y,
        0,
        this.rainTrough[i].y + this.rainTrough[i].length
      )
      grd.addColorStop(0, 'rgba(255,255,255,0)')
      grd.addColorStop(1, 'rgba(255,255,255,' + this.rainTrough[i].opacity + ')')

      this.ctx1.fillStyle = grd
      this.ctx1.fillRect(this.rainTrough[i].x, this.rainTrough[i].y, 1, this.rainTrough[i].length)
      this.ctx1.fill()
    },
    drawLightning() {
      for (var i = 0; i < this.lightning.length; i++) {
        let light = this.lightning[i]

        light.path.push({
          x:
            light.path[light.path.length - 1].x +
            (this.random(0, light.xRange) - light.xRange / 2),
          y: light.path[light.path.length - 1].y + this.random(0, light.yRange)
        })

        if (light.path.length > light.pathLimit) {
          this.lightning.splice(i, 1)
        }

        this.ctx3.strokeStyle = 'rgba(255, 255, 255, .1)'
        this.ctx3.lineWidth = 3
        if (this.random(0, 15) === 0) {
          this.ctx3.lineWidth = 6
        }
        if (this.random(0, 30) === 0) {
          this.ctx3.lineWidth = 8
        }

        this.ctx3.beginPath()
        this.ctx3.moveTo(light.x, light.y)
        for (var pc = 0; pc < light.path.length; pc++) {
          this.ctx3.lineTo(light.path[pc].x, light.path[pc].y)
        }
        if (Math.floor(this.random(0, 30)) === 1) {
          // to fos apo piso
          this.ctx3.fillStyle = 'rgba(255, 255, 255, ' + this.random(1, 3) / 100 + ')'
          this.ctx3.fillRect(0, 0, this.w, this.h)
        }
        this.ctx3.lineJoin = 'miter'
        this.ctx3.stroke()
      }
    },
    animloop() {
      if (!this.noRainTrough) {
        this.animateRainTrough()
      }
      if (!this.noRain) {
        this.animateRain()
      }
      if (!this.noLightning) {
        this.animateLightning()
      }
      requestAnimationFrame(this.animloop)
    }
  },
  mounted() {
    this.canvas1 = document.getElementById('canvas1')
    this.canvas2 = document.getElementById('canvas2')
    this.canvas3 = document.getElementById('canvas3')
    this.ctx1 = this.canvas1.getContext('2d')
    this.ctx2 = this.canvas2.getContext('2d')
    this.ctx3 = this.canvas3.getContext('2d')

    if (!this.noRainTrough) {
      this.createRainTrough()
    }
    if (!this.noRain) {
      this.createRain()
    }

    if (!this.noRain || !this.noRainTrough || !this.noLightning) {
      this.animloop()
    }
  },
  updated() {
    this.canvas1 = document.getElementById('canvas1')
    this.canvas2 = document.getElementById('canvas2')
    this.canvas3 = document.getElementById('canvas3')
    this.ctx1 = this.canvas1.getContext('2d')
    this.ctx2 = this.canvas2.getContext('2d')
    this.ctx3 = this.canvas3.getContext('2d')

    if (!this.noRainTrough) {
      this.createRainTrough()
    }
    if (!this.noRain) {
      this.createRain()
    }

    if (!this.noRain || !this.noRainTrough || !this.noLightning) {
      this.animloop()
    }
  },
  created () {
    window.addEventListener('resize', this.createRainTrough)
  },
  destroyed () {
    window.removeEventListener('resize', this.createRainTrough)
  }
}
</script>

<style lang="scss" scoped>

.thunder .card-register {
  background: none;
}


.thunder h3 {
  color: red;
  font-family: Nosifer, Roboto Slab, sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
}

.thunder .btn-danger {
  border-color: black;
  background-color: #ddd;
  color: #111;
  font-family: Nosifer, Roboto Slab, sans-serif;
}

// lightning and rain
@mixin size($size) {
  width: $size;
  height: $size;
}

@mixin abs-pos {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

.thunder canvas {
  @include size(100%);
}

.thunder {
  @include size(100%);
  background-color: #222;
  // background-image: url("https://drive.google.com/uc?export=view&id=0BzFF7FmbJUo5X0NEUXFVd0NBcWc");
  background-size: cover;
  background-position: 0 0;
  background-repeat: no-repeat;
  position: relative;
  z-index: 0;
  &:after {
    content: "";
    @include size(100%);
    @include abs-pos;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 0;
    animation: thunder-bg 6s infinite;
  }
}

.thunder .container {
  z-index: 4;
}

canvas {
  @include abs-pos;
}

#canvas3 {
  z-index: 1;
}

#canvas2 {
  z-index: 2;
}

#canvas1 {
  z-index: 3;
}

$color1: rgba(34, 34, 34, 0.9);
$color2: rgba(59, 59, 59, 0.3);
.thunder {
  @at-root {
    @keyframes thunder-bg {
      0% {
        background-color: $color1;
      }
      9% {
        background-color: $color1;
      }
      10% {
        background-color: $color2;
      }
      10.5% {
        background-color: $color1;
      }
      80% {
        background-color: $color1;
      }
      82% {
        background-color: $color2;
      }
      83% {
        background-color: $color1;
      }
      83.5% {
        background-color: $color2;
      }
      100% {
        background-color: $color1;
      }
    }
    @-webkit-keyframes thunder-bg {
      0% {
        background-color: $color1;
      }
      9% {
        background-color: $color1;
      }
      10% {
        background-color: $color2;
      }
      10.5% {
        background-color: $color1;
      }
      80% {
        background-color: $color1;
      }
      82% {
        background-color: $color2;
      }
      83% {
        background-color: $color1;
      }
      83.5% {
        background-color: $color2;
      }
      100% {
        background-color: $color1;
      }
    }
  }
}
</style>
