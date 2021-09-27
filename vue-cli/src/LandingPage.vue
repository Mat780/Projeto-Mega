<template>
    <div id="LandingPage">
        <head>
            <link
                rel="stylesheet"
                type="text/css"
                href="//fonts.googleapis.com/css?family=Nunito"
            />
        </head>
        <CabecalhoHome />
        <BannerHome />
        <ParteSobreNos />
        <ParteExame />
        <EnderecoHome />
        <FormDuvidas />
        <FootHome />
    </div>
</template>



<script>
import BannerHome from "./components/HomeComp/BannerHome.vue";
import CabecalhoHome from "./components/HomeComp/CabecalhoHome.vue";
import EnderecoHome from "./components/HomeComp/EnderecoHome.vue";
import FootHome from "./components/HomeComp/FootHome.vue";
import FormDuvidas from './components/HomeComp/FormDuvidas.vue';
import ParteExame from "./components/parteExame.vue";
import ParteSobreNos from './components/parteSobreNos.vue';
export default {
    name: "LandingPage",
    data() {
        return {};
    },

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
* {
    margin: 0;
    padding: 0;
    font-family: Nunito;
    font-style: normal;
}

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