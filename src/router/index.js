import Vue from 'vue'
import Router from 'vue-router'
import TkgLanding from '@/component/page/Landing'
import PageNotFound from '@/component/page/PageNotFound'
import Hello from '@/component/Hello'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing',
      component: TkgLanding
    },
    // ... other routes ...
    // and finally the default route, when none of the above matches:
    { path: '*', component: PageNotFound },
    { path: '/test-mdl', component: Hello }
  ]
})
