import { createApp } from 'vue';
import Pagina from './Pagina.vue';
import router from './router';

const pag = createApp(Pagina).use(router);

pag.mount('#app');


//createApp(Pagina).use(router).mount('#app');

//createApp(LandingPage).mount('#app')
//import LandingPage from './LandingPage.vue'