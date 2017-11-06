import Vue from 'vue'
import Router from 'vue-router'
import TkgLanding from '@/component/page/Landing'
import TkgLogin from '@/component/page/Login'
import TkgRegister from '@/component/page/Register'
import TkgBook from '@/component/page/Book'
import TkgManga from '@/component/page/Manga'
import TkgMangaReader from '@/component/page/MangaReader'
import PageNotFound from '@/component/page/PageNotFound'
// import TkgDashboard from '@/component/page/dashboard'
// import Hello from '@/component/Hello'

// import Typography from '@/component/page/dashboard/typography'
// import Home from '@/component/page/dashboard/home'
// import UserProfile from '@/component/page/dashboard/userprofile'
// import TableList from '@/component/page/dashboard/tablelist'
// import Icons from '@/component/page/dashboard/icons'
// import Maps from '@/component/page/dashboard/maps'
// import Notifications from '@/component/page/dashboard/notifications'

import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'Landing',
      component: TkgLanding
    },
    { path: '/login', name: 'Login', component: TkgLogin, props: (r) => ({ back: r.query.back }) },
    { path: '/register', name: 'Register', component: TkgRegister, props: (r) => ({ email: r.query.email }) },
    { path: '/book', name: 'Danh sach truyen chu', component: TkgBook },
    { path: '/manga', name: 'Danh sach truyen tranh', component: TkgManga },
    { path: '/manga/:id(\\d+)/:volume(\\d+)/:chapter(\\d+)?', name: 'Xem truyen tranh', component: TkgMangaReader },
    // {
    //   path: '/dashboard',
    //   component: TkgDashboard,
    //   children: [
    //     { path: '', name: 'Dashboard', component: Home },
    //     { path: 'person', name: 'User Profile', component: UserProfile },
    //     { path: 'table', name: 'Table List', component: TableList },
    //     { path: 'typography', name: 'Typography', component: Typography },
    //     { path: 'icons', name: 'Icons', component: Icons },
    //     { path: 'maps', name: 'Maps', component: Maps },
    //     { path: 'notifications', name: 'Notifications', component: Notifications }
    //   ]
    // },
    // { path: '/test-mdl', component: Hello, meta: { requiresAuth: true } },
    // ... other routes ...
    // and finally the default route, when none of the above matches:
    { path: '*', component: PageNotFound }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('login')
  else next()
})

export default router
