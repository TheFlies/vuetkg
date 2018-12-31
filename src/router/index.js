import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/views/Landing.vue'
import PageNotFound from '@/views/PageNotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/register',
      name: 'Register',
      props: (r) => ({ email: r.query.email }),
      component: () => import(/* webpackChunkName: "about" */ '@/views/Register.vue')
    },
    {
      path: '/book',
      name: 'Book Shelves',
      component: () => import(/* webpackChunkName: "book" */ '@/views/Book.vue')
    },
    {
      path: '/manga',
      name: 'Manga Shelves',
      component: () => import(/* webpackChunkName: "manga" */ '@/views/Manga.vue')
    },
    {
      path: '/manga/:id(\\d+)/:volume(\\d+)/:chapter(\\d+)?',
      name: 'Xem truyen tranh',
      component: () => import(/* webpackChunkName: "manga-reader" */ '@/views/MangaReader.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Login.vue'),
      props: (r) => ({ back: r.query.back })
    },
    { path: '*', component: PageNotFound }
  ]
})
