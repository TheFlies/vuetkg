import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/component/page/Landing'
import PageNotFound from '@/component/page/PageNotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    // ... other routes ...
    // and finally the default route, when none of the above matches:
    { path: '*', component: PageNotFound }
  ]
})
