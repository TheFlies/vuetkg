import firebase from 'firebase/app'
import 'firebase/auth'
import NProgress from 'nprogress'

import router from '@/router'

import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

// permission judge function
// function hasPermission(roles, permissionRoles) {
//   if (roles.indexOf('admin') >= 0) return true

//   if (!permissionRoles) return true

//   return roles.some(role => permissionRoles.indexOf(role) >= 0)
// }

router.beforeEach((to, from, next) => {
  NProgress.start()

  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(r => r.meta.auth)

  if (requiresAuth && !currentUser) next({ path: 'login', query: { back: to.path } })
  else next()
})

router.afterEach(() => NProgress.done())
