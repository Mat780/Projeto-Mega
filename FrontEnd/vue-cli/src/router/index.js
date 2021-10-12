import { createRouter, createWebHashHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Login from '../views/Login.vue'
import Adicionar from '../views/Adicionar.vue'
import ListarPacientes from '../views/ListarPacientes.vue'
import ListaLaudos from '../views/ListaLaudos.vue'
import Upload from '../views/Upload.vue'
import Adm from '../views/Adm.vue'
import Editar from '../views/Editar.vue'
// import Batata from '../views/Batata.vue'


const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  // {
  // //   path: '/testando',
  // //   name:'testando',
  // //   component:model
  // // },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Editar',
    name: 'Editar',
    component: Editar
  },
  {
    path: '/Adicionar',
    name: 'Adicionar',
    component: Adicionar
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
  },
  {
    path: '/Adm',
    name: 'Adm',
    component: Adm
  },
  // {
  //   path:'/Batata',
  //   name:'Batata',
  //   component: Batata
  // },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
