import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    loggedIn: (state, user) => {
      state.user = user
    },
    loggedOut: state => {
      state.user = null
    }
  },
  getters: {
    isAdmin: state => {
      return ((state.user || {}).role || []).indexOf('admin') > -1
    },
    user: state => state.user
  }
})

export default store
