// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase'
import App from './App'
import router from './router'

// Libraries
import jquery from '../static/assets/js/jquery.min.js'
global.jQuery = jquery
global.$ = jquery

require('../static/assets/js/jquery.dropotron.min.js')

require('../static/assets/js/jquery.scrollgress.min.js')

import skel from '../static/assets/js/skel.min.js'
global.skel = skel

import './assets/style.scss'
import 'buefy/lib/buefy.css'

Vue.config.productionTip = false

// global library setup
// Object.defineProperty(Vue.prototype, '$Chartist', {
//   get() {
//     return this.$root.Chartist
//   }
// })

import Buefy from 'buefy'
Vue.use(Buefy)
Vue.use(VueFire)

let app
/* eslint-disable no-new */
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App },
      data: {
        // Chartist
      }
    })
  }
})
