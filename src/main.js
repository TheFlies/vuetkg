// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase'
import App from './App'
import router from './router'

import BoostrapVue from 'bootstrap-vue'
Vue.use(BoostrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// global library setup
// Object.defineProperty(Vue.prototype, '$Chartist', {
//   get() {
//     return this.$root.Chartist
//   }
// })

// import Buefy from 'buefy'
// Vue.use(Buefy)
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
