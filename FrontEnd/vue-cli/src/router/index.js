import { createRouter, createWebHashHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Login from '../views/Login.vue'
import Adm from '../views/Adm.vue'
import ListarPacientes from '@/views/ListarPacientes.vue'
import ListaLaudos from '../views/ListaLaudos.vue'
import Upload from '../views/Upload.vue'
import CadastrarPaciente from '../components/Adm/CadastrarPaciente.vue'
import CadastrarMedico from '../components/Adm/CadastrarMedico.vue'
import EditarPaciente from '../components/Adm/EditarPaciente.vue'
import EditarMedico from '../components/Adm/EditarMedico.vue'

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
    path: '/login/Adm',
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
  },
  {
    path: '/Login/Adm/CadastrarPaciente',
    name: 'CadastrarPaciente',
    component: CadastrarPaciente
  },
  {
    path: '/Login/Adm/EditarPaciente',
    name: 'EditarPaciente',
    component: EditarPaciente
  },
  {
    path: '/Login/Adm/CadastrarMedico',
    name: 'CadastrarMedico',
    component: CadastrarMedico
  },
  {
    path: '/Login/Adm/EditarMedico',
    name: 'EditarMedico',
    component: EditarMedico
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
