<template>
  <div class="conteiner">
    <SideBar />
    <listaPacientes />
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import listaPacientes from "../components/ListarPacientes/listaPacientes.vue";

export default {
  name: "ListarPacientes",
  components: {
    SideBar,
    listaPacientes,
  },
};
</script>

<style scoped>

.conteiner {
  width: 100vw;
  height: 100vh;
  display: flex;
  color: #2e4a7d;
  font-family: "Nunito";
  background-color: rgba(235, 242, 245, 1);
}
</style>
