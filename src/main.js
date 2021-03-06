import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'

import App from './App.vue'
import router from './router'
import store from './store'

import './plugins'
import './permission'

import './registerServiceWorker'

Vue.config.productionTip = false

let app
/* eslint-disable no-new */
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
      data: {
        // Chartist
      }
    }).$mount('#app')
  }
})
