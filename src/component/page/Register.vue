<template lang="pug">
#register.content
  .row
    .col-md-4
    .col-md-4
      .card
        transition(name='bounce')
          #cover.pbackground(v-if='coverShow' @mouseover='hideGirl')
        .card-header(data-background-color='grey')
          .ribbon
            .txt <a href='/'>gác</a>
          h4 Đăng ký
          p.category Tạo tài khoản mới
        .card-content
          form
            .row(v-if=error)
              .col-md-12
                span: p(style={color: 'red'}) {{error}}
            .row
              .col-md-8
                md-fg-input(label='Email', :labelFloating='true', v-model='account.email', required='true')
            .row
              .col-md-8
                md-fg-input(label='Password', type='password', :labelFloating='true', v-model='account.password')
            .row
              .btn.btn-info.pull-right(@click.prevent='showGirl', style={backgroundColor: 'red', color: 'white'}) gái?
              md-button.btn.btn-primary.pull-right(@click.prevent='register') đăng ký
            .row
              p.pull-right bạn đã có? <router-link to="/login">vào luôn</router-link>
            .clearfix
    .col-md-4
</template>


<script>
import firebase from 'firebase'

export default {
  name: 'tkg-register',
  data() {
    return {
      coverShow: true,
      account: {
        email: '',
        password: ''
      },
      error: ''
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
    },
    register() {
      this.error = ''
      if (!this.account.email || !this.account.password) {
        this.error = 'Missing email or password'
        return
      }
      firebase.auth().createUserWithEmailAndPassword(this.account.email, this.account.password)
        .then((user) => { this.$router.replace('/login') }, (err) => { this.error = err.message })
    }
  }
}
</script>

<style lang="scss" scoped>

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

.pbackground {
  border-radius: 5px;
  background-image: url('/static/images/login-background.png');
  background-color: #000;
  z-index: 1;
  top: 0px;
  right: 5px;
  left: 5px;
  bottom: 5px;
  width: auto;
  height: auto;
  margin-top: -10px;
  position: absolute;
  display: inline-block;
  background-position: bottom right, center center;
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
