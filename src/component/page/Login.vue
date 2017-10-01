<template lang="pug">
#login.content
  .row.pull-center
    //- .col-md-4
    //- .col-md-4
    transition(name='bounce')
      #cover.box(v-if='coverShow' @mouseover='hideGirl')
    .card
      .card-header(data-background-color='grey')
        .ribbon
          .txt <a href='/'>gác</a>
        h4 Đăng nhập
        p.category Nhập tài khoản của bạn
      .card-content
        form
          .row
            .col-md-8
              md-fg-input(label='Username', :labelFloating='true')
          .row
            .col-md-8
              md-fg-input(label='Password', :labelFloating='true')
          .row
            .btn.btn-info.pull-right(@click.prevent='showGirl', style={backgroundColor: 'red', color: 'white'}) gái?
            md-button.btn.btn-primary.pull-right(@click.prevent='login') login
          .clearfix
    //- .col-md-4
</template>


<script>
export default {
  name: 'tkg-login',
  data() {
    return {
      coverShow: true
    }
  },
  mounted() {
    this.initMaterial()
  },
  updated() {
    this.initMaterial()
  },
  methods: {
    initMaterial() {
      $.material.init() // eslint-disable-line
    },
    showGirl() {
      this.coverShow = true
    },
    hideGirl() {
      this.coverShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  max-width: 620px;
  min-width: 310px;
  margin: 0 auto;
}


.content {
  margin-top: 5%;
}

.btn {
  background: #999999;
}

.card-header {
  background-image: url('/static/assets/css/images/overlay.png'), url('/static/images/pic0111.jpg');
  background-position: top right, center center;
  background-repeat: no-repeat, no-repeat;
  background-size: cover, cover;
}

.box {
  border-radius: 5px;
  background-image: url('/static/images/login-background.png');
  background-color: #000;
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  background-position: top right, center center;
  background-repeat: no-repeat, no-repeat;
  background-size: contain, cover;
  transition: all 0.5s ease-in-out;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}

.bounce-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}

.ribbon {
  -webkit-transform: rotate(-45deg); 
     -moz-transform: rotate(-45deg); 
      -ms-transform: rotate(-45deg); 
       -o-transform: rotate(-45deg); 
          transform: rotate(-45deg); 
    border: 15px solid transparent;
    border-bottom: 15px solid red;
    position: absolute;
    top: -19px;
    left: -10px;
    padding: 0 5px;
    width: 80px;
    color: white;
    font-family: sans-serif;
    size: 11px;
}
.ribbon .txt {
    position: absolute;
    top: -3px;
    left: 10px;
}
</style>
