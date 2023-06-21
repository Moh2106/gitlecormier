import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './main.css'
import 'tw-elements'
import { MotionPlugin } from '@vueuse/motion'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons'
import {faFontAwesomeAlt, faFontAwesome, faSquareFacebook} from '@fortawesome/free-brands-svg-icons'
import {faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft, faArrowRight, faLocationDot, faBars, faHouseChimneyCrack } from '@fortawesome/free-solid-svg-icons'

library.add(
      faUserSecret,
      faPhone,
      faSquareFacebook,
      faMagnifyingGlassPlus,
      faArrowUp,
      faBars,
      faLocationDot,
      faArrowLeft,
      faArrowRight,
      faFontAwesomeAlt,
      faFontAwesome,
      faHouseChimneyCrack
);


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(store)
.use(router)
.use(MotionPlugin)
.mount('#app')
