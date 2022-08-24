import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './main.css'
import 'tw-elements'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
//import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
library.add(faUserSecret, faPhone, faFacebook)

/*vue.use(VueGoogleMaps, { 
    load: { 
        key: 'AIzaSyBUeHIupxp0Xs46su0HS87zMbKyS1KNIOo',
        libraries: 'places',
    }
}),*/

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(store)
.use(router)
.mount('#app')
