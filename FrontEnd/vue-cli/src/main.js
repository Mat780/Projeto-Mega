import { createApp } from 'vue'
import Pagina from './Pagina.vue'
import router from './router'
import maska from 'maska'

import '../node_modules/bulma/css/bulma.css'

createApp(Pagina).use(router).use(maska).mount('#app')
