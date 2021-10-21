<template>
    <div id="LandingPage">
        <!-- Ele puxa todos os componentes para a página -->
        <CabecalhoHome />
        <BannerHome/>
        <ParteSobreNos/>
        <ParteExame />
        <EnderecoHome />
        <FormDuvidas/>
        <FootHome />
    </div>
</template>



<script>
// Importa todos os componentes que serão usados
import BannerHome from "../components/LandingPage/BannerHome.vue";
import CabecalhoHome from "../components/LandingPage/CabecalhoHome.vue";
import EnderecoHome from "../components/LandingPage/EnderecoHome.vue";
import FootHome from "../components/LandingPage/FootHome.vue";
import FormDuvidas from '../components/LandingPage/FormDuvidas.vue';
import ParteExame from "../components/LandingPage/parteExame.vue";
import ParteSobreNos from '../components/LandingPage/parteSobreNos.vue';

// Exporta as informações do componente
export default {

    // Nome do componente
    name: "LandingPage",

    // Os componentes que serão usados na página
    components: {
        BannerHome,
        EnderecoHome,
        ParteExame,
        CabecalhoHome,
        FootHome,
        FormDuvidas,
        ParteSobreNos,
    },

};
</script>

<style>
#Foot {
    width: 100%;
    height: 20%;
    background-color: #15c3d6;

    border-radius: 0px 100px 0px 0px;
    display: flex;
    align-items: center;
}

#frase-rodapé {
    color: white;
}

#LandingPage{
    background-color: #EBF2F5;
}

</style>