// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase'
import App from './App'
import router from './router'
import store from './store'

import BoostrapVue from 'bootstrap-vue'

// FIX-ME: work around for bootstrap-vue bug
// https://github.com/bootstrap-vue/bootstrap-vue/issues/1201
let originalVueComponent = Vue.component
Vue.component = function(name, definition) {
  if (name === 'bFormCheckboxGroup' || name === 'bCheckboxGroup' ||
      name === 'bCheckGroup' || name === 'bFormRadioGroup') {
    definition.components = {bFormCheckbox: definition.components[0]}
  }
  originalVueComponent.apply(this, [name, definition])
}
Vue.use(BoostrapVue)

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
      store,
      template: '<App/>',
      components: { App },
      data: {
        // Chartist
      }
    })
  }
})
