<template>
  <div id="app" class="landing">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import "assets/sass/md/_variables.scss";

/* loading style*/
.loader {
  margin: 0 auto;
  width: 60px;
  position: absolute;
  display: block;
  left: 0;
  right: 0;
  z-index: 1;
  -webkit-transform: translate3d(0, -50%, 0);
  -moz-transform: translate3d(0, -50%, 0);
  -o-transform: translate3d(0, -50%, 0);
  -ms-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
  text-align: center;
  top: 50%;
}

.loader:before {
  content: '';
  display: block;
  padding-top: 100%;
}

.circular {
  animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite, color 2s ease-in-out infinite;
  stroke-linecap: round;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
@keyframes color {
  100%,
  0% {
    stroke: #9c27b0;
  }
  50% {
    stroke: #ff9800;
  }
  100% {
    stroke: #9c27b0;
  }
}

// dashboard
.table {
  thead {
    th {
      font-weight: $headings-font-weight;
    }
  }
}
@media (min-width: 992px) {
  .typo-line {
    padding-left: 140px;
    margin-bottom: 40px;
    position: relative;
    .category {
      transform: translateY(-50%);
      top: 50%;
      left: 0px;
      position: absolute;
    }
  }
}
.places-buttons .btn {
  margin-bottom: 30px
}
.space-70 {
  height: 70px;
  display: block;
}
.sidebar .nav>li.active-pro {
  position: absolute;
  width: 100%;
  bottom: 10px;
}
.tim-row {
  margin-bottom: 20px;
  padding-top: 50px;
  h3 {
    margin-top: 0;
  }
}
.tim-typo {
  padding-left: 25%;
  margin-bottom: 40px;
  position: relative;
  .tim-note {
    bottom: 10px;
    color: #c0c1c2;
    display: block;
    font-weight: 400;
    font-size: 13px;
    line-height: 13px;
    left: 0;
    margin-left: 20px;
    position: absolute;
    width: 260px;
  }
}
</style>
