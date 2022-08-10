import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView'
import VisiterView from '../views/VisiterView'
import AlentoursView from '../views/AlentoursView'

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: AccueilView
  },

  {
    path: '/arrive',
    name: 'arriver',
    component: VisiterView
  },

  {
    path: '/alentours',
    name: 'alentours',
    component: AlentoursView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
