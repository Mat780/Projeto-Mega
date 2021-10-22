<template>
  <div class="conteiner">
    <SideBar @aparecer="AparecerCadastrarPaciente"/>
    <listaPacientes />
    <cadastrarPaciente
      :class="{ modal: true, 'is-active': modalCadastrarPaciente }"
      @esconder="esconderCadastroPaciente"
    />
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import listaPacientes from "../components/ListarPacientes/listaPacientes.vue";
import cadastrarPaciente from "../components/Adm/CadastrarPaciente.vue";

export default {
  name: "ListarPacientes",
  components: {
    SideBar,
    listaPacientes,
    cadastrarPaciente,
  },
  data() {
    return {
      modalCadastrarPaciente: false,
    };
  },
  methods: {
    esconderCadastroPaciente() {
      this.modalCadastrarPaciente = false;
    },
    AparecerCadastrarPaciente() {
      this.modalCadastrarPaciente = true;
    },
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
