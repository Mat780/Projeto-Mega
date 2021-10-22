<template>
  <div class="conteiner">
    <SideBar :adm=false :addPaciente=false :name=name />
    <administracao />
  </div>
</template>

<script>
import administracao from "../components/Adm/administracao.vue";
import SideBar from "../components/SideBar.vue";

export default {
  name: "Adm",
  components: {
    administracao,
    SideBar,
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #2e4a7d;
}

.conteiner {
  width: 100vw;
  height: 100vh;
  display: flex;
}
</style>
