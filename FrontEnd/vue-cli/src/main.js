import { createApp } from 'vue'
import Vue from 'vue'
import Pagina from './Pagina.vue'
import router from './router'
import maska from 'maska'

createApp(Pagina).use(router).use(maska).mount('#app')
