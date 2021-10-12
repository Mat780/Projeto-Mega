<template>
     <head>
          <link
               rel="stylesheet"
               type="text/css"
               href="//fonts.googleapis.com/css?family=Nunito"
          />
     </head>
     <div class="conteiner">
          <SideBar />
          <administracao />
     </div>
</template>

<script>
import administracao from "../components/Adm/administracao.vue";
import SideBar from "../components/Adm/SideBar.vue";
export default {
     name: "Adm",
     components: {
          administracao,
          SideBar,
     },
};
</script>

<style scoped>
* {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     color: #2e4a7d;
     font-family: "Nunito";
}

.conteiner {
     width: 100vw;
     height: 100vh;
     display: flex;
}
</style>