import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView'
import VisiterView from '../views/VisiterView'
import AlentoursView from '../views/AlentoursView'
import DescriptionView from '../views/DescriptionView'
import GalleryView from '../views/GalleryView'
import TarifsView from '../views/TarifsView'
import LivreView from '../views/LivreView'
import DisponibiliteView from "../views/DisponibiliteView";

import VueScrollTo from 'vue-scrollto'


const routes = [
      {
            path: "/",
            name: "accueil",
            component: AccueilView,
      },

      {
            path: "/descriptifs",
            name: "descriptifs",
            component: DescriptionView,
      },

      {
            path: "/descriptifs/gallerie",
            name: "gallerie",
            component: GalleryView,
      },

      {
            path: "/comment-arriver",
            name: "arriver",
            component: VisiterView,
      },

      {
            path: "/alentours",
            name: "alentours",
            component: AlentoursView,
      },

      {
            path: "/livredor",
            name: "livre",
            component: LivreView,
      },

      {
            path: "/disponibilite",
            name: "disponibilite",
            component: DisponibiliteView,
      },

      {
            path: "/tarifs",
            name: "tarifs",
            component: TarifsView,
      },

];

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
