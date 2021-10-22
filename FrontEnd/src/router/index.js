import { createRouter, createWebHashHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Login from '../views/Login.vue'
import Adm from '../views/Adm.vue'
import ListarPacientes from '@/views/ListarPacientes.vue'
import ListaLaudos from '../views/ListaLaudos.vue'
import Upload from '../views/Upload.vue'

import axios from 'axios';

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
    path: '/Login/ListaLaudos',
    name: 'ListaLaudos',
    component: ListaLaudos,
    // beforeEnter: (to, from, next) =>{
    //   if(localStorage.getItem('token') != undefined){

    //     var req = {
    //       headers: {
    //         Authorization: 'Bearer ' + localStorage.getItem('token')
    //       }
    //     }

    //     axios.post("http://localhost:8080/login/paciente",{},req).then(res =>{
    //       console.log(res);
    //       next();
    //     }).catch(err =>{
    //       console.log(err);
    //       next('/');
    //     })
    //   }else{
    //     next('/');
    //   }
    // }
  },
  {
    path: '/Login/ListarPacientes',
    name: 'ListarPacientes',
    component: ListarPacientes,
    // beforeEnter: (to, from, next) =>{
    //   if(localStorage.getItem('token') != undefined){

    //     var req = {
    //       headers: {
    //         Authorization: 'Bearer ' + localStorage.getItem('token')
    //       }
    //     }

    //     axios.post("http://localhost:8080/login/medico",{},req).then(res =>{
    //       console.log(res);
    //       next();
    //     }).catch(err =>{
    //       console.log(err);
    //       next('/');
    //     })
    //   }else{
    //     next('/');
    //   }
    // }
  },
  {
    path: '/Login/ListarPacientes/Upload',
    name: 'Upload',
    component: Upload,
    // beforeEnter: (to, from, next) =>{
    //   if(localStorage.getItem('token') != undefined){

    //     var req = {
    //       headers: {
    //         Authorization: 'Bearer ' + localStorage.getItem('token')
    //       }
    //     }

    //     axios.post("http://localhost:8080/login/medico",{},req).then(res =>{
    //       console.log(res);
    //       next();
    //     }).catch(err =>{
    //       console.log(err);
    //       next('/');
    //     })
    //   }else{
    //     next('/');
    //   }
    // }
  },
  {
    path: '/Login/Adm',
    name: 'Adm',
    component: Adm,
    // beforeEnter: (to, from, next) =>{
    //   if(localStorage.getItem('token') != undefined){

    //     var req = {
    //       headers: {
    //         Authorization: 'Bearer ' + localStorage.getItem('token')
    //       }
    //     }

    //     axios.post("http://localhost:8080/login/adm",{},req).then(res =>{
    //       console.log(res);
    //       next();
    //     }).catch(err =>{
    //       console.log(err);
    //       next('/');
    //     })
    //   }else{
    //     next('/');
    //   }
    // }
  }
  

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
