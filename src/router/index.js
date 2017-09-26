import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/pages/Landing'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    }
  ]
})
