import Landing from '@/views/Landing.vue'
// import PageNotFound from '@/views/PageNotFound.vue'
import { createWebHistory } from 'vue-router'
import { createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing,
  },
  // {
  //   path: '/register',
  //   name: 'Register',
  //   props: (r: any) => ({ email: r.query.email }),
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '@/views/Register.vue'),
  // },
  // {
  //   path: '/book',
  //   name: 'Book Shelves',
  //   component: () => import(/* webpackChunkName: "book" */ '@/views/Book.vue'),
  //   meta: {
  //     auth: true,
  //   },
  // },
  // {
  //   path: '/manga',
  //   name: 'Manga Shelves',
  //   component: () =>
  //     import(/* webpackChunkName: "manga" */ '@/views/Manga.vue'),
  //   meta: {
  //     auth: true,
  //   },
  // },
  // {
  //   path: '/manga/:id(\\d+)/:volume(\\d+)/:chapter(\\d+)?',
  //   name: 'Xem truyen tranh',
  //   component: () =>
  //     import(/* webpackChunkName: "manga-reader" */ '@/views/MangaReader.vue'),
  //   meta: {
  //     auth: true,
  //   },
  // },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '@/views/Login.vue'),
  //   props: (r: any) => ({ back: r.query.back }),
  // },
  // { path: '*', component: PageNotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router }
