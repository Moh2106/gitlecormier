import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView'
import LienView from '../views/LienView'
import VisiterView from '../views/VisiterView'
import AlentoursView from '../views/AlentoursView'
import DescriptionView from '../views/DescriptionView'
import GalleryView from '../views/GalleryView'
import TarifsView from '../views/TarifsView'
import LivreView from '../views/LivreView'
import ReservationView from '../views/ReservationView'

import VueScrollTo from 'vue-scrollto'


const routes = [
  {
    path: '/',
    name: 'accueil',
    component: AccueilView
  },

  {
    path: '/liens',
    name: 'lien',
    component: LienView
  },

  {
    path: '/descriptifs',
    name: 'descriptifs',
    component: DescriptionView
  },

  {
    path: '/gallerie',
    name: 'gallerie',
    component: GalleryView
  },

  {
    path: '/comment-arriver',
    name: 'arriver',
    component: VisiterView
  },

  {
    path: '/alentours',
    name: 'alentours',
    component: AlentoursView,
  },

  {
    path: '/livredor',
    name: 'livre',
    component: LivreView
  },

  {
    path: '/reservation',
    name: 'reservation',
    component: ReservationView
  },

  {
    path: '/tarifs',
    name: 'tarifs',
    component: TarifsView
  },

  /*{
    path: '/*',
    name: 'tarifs',
    redirect: '/tarifs',
  },*/

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    VueScrollTo.scrollTo(10, { duration : 500})
  }
  next()
})

export default router
