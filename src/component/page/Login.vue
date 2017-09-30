<template lang="pug">
#login.content
  .row
    .col-md-4
    .col-md-4
      transition(name='bounce')
        #cover.box(v-if='coverShow' @mouseover='hideGirl')
      .card(@focus="focusOne" @blue="lostFocus")
        .card-header(data-background-color='grey')
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
</template>


<script>
export default {
  name: 'tkg-login',
  data() {
    return {
      coverShow: true
    }
  },
  mounted () {
    this.initMaterial()
  },
  updated () {
    this.initMaterial()
  },
  methods: {
    initMaterial () {
      $.material.init () // eslint-disable-line
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
.content {
  margin-top: 15%;
}
.btn {
  background: #999999;
}
.card-header {
  background-image: url('/static/assets/css/images/login-background.png'), url('/static/images/pic0111.jpg');
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
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

</style>
