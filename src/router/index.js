import Vue from 'vue'
import Router from 'vue-router'
import TkgLanding from '@/component/page/Landing'
import TkgLogin from '@/component/page/Login'
import PageNotFound from '@/component/page/PageNotFound'
import TkgDashboard from '@/component/page/dashboard'
import Hello from '@/component/Hello'

import Typography from '@/component/page/dashboard/typography'
import Home from '@/component/page/dashboard/home'
import UserProfile from '@/component/page/dashboard/userprofile'
import TableList from '@/component/page/dashboard/tablelist'
import Icons from '@/component/page/dashboard/icons'
import Maps from '@/component/page/dashboard/maps'
import Notifications from '@/component/page/dashboard/notifications'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'Landing',
      component: TkgLanding
    },
    { path: '/login', name: 'Login', component: TkgLogin },
    {
      path: '/dashboard',
      component: TkgDashboard,
      children: [
        { path: '', name: 'Dashboard', component: Home },
        { path: 'person', name: 'User Profile', component: UserProfile },
        { path: 'table', name: 'Table List', component: TableList },
        { path: 'typography', name: 'Typography', component: Typography },
        { path: 'icons', name: 'Icons', component: Icons },
        { path: 'maps', name: 'Maps', component: Maps },
        { path: 'notifications', name: 'Notifications', component: Notifications }
      ]
    },
    // ... other routes ...
    // and finally the default route, when none of the above matches:
    { path: '*', component: PageNotFound },
    { path: '/test-mdl', component: Hello }
  ]
})
