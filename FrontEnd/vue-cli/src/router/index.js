import { createRouter, createWebHashHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Login from '../views/Login.vue'
import Adm from '../views/Adm.vue'
import ListarPacientes from '@/views/ListarPacientes.vue'
import ListaLaudos from '../views/ListaLaudos.vue'
import Upload from '../views/Upload.vue'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Adm',
    name: 'Adm',
    component: Adm
  },
  {
    path: '/ListarPacientes',
    name: 'ListarPacientes',
    component: ListarPacientes
  },
  {
    path: '/ListaLaudos',
    name: 'ListaLaudos',
    component: ListaLaudos
  },
  {
    path: '/Upload',
    name: 'Upload',
    component: Upload
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
