import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './main.css'
import 'tw-elements'
import { MotionPlugin } from '@vueuse/motion'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons'
import {faFaceSmile, faCalendar} from '@fortawesome/free-regular-svg-icons'
import {faFontAwesomeAlt, faFontAwesome, faSquareFacebook} from '@fortawesome/free-brands-svg-icons'
import {faArrowUp } from '@fortawesome/free-solid-svg-icons'
import {
      faUserSecret,faArrowLeft,
      faArrowRight,
      faLocationDot,
      faBars,
      faHouseChimneyCrack,
      faCirclePlus,
      faHandPointRight,
      faQuestion,
      faCheck,
      faXmark
} from "@fortawesome/free-solid-svg-icons";

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
      faHouseChimneyCrack,
      faCirclePlus,
      faHandPointRight,
      faQuestion,
      faFaceSmile,
      faCalendar,
      faCheck,
      faXmark
);


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(store)
.use(router)
.use(MotionPlugin)
.mount('#app')
