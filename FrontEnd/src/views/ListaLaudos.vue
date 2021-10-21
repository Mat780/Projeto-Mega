<template>
  <div class="conteiner">
      <SideBar/>
      <listaLaudos />
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import listaLaudos from "../components/ListaLaudos/listaLaudos.vue";

export default {
  name: "listarLaudos",
  components: {
    listaLaudos,
    SideBar,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.conteiner {
  width: 100vw;
  height: 100vh;
  display: flex;
  color: #2e4a7d;
  font-family: "Nunito";
  background-color: rgba(235, 242, 245, 1);
}
</style>
