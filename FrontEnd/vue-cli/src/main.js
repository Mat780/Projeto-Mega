import { createApp } from 'vue'
import Vue from 'vue'
import Pagina from './Pagina.vue'
import router from './router'


createApp(Pagina).use(router).mount('#app')
