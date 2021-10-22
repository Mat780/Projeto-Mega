<template>
  <div class="conteiner">
    <SideBar @aparecer="AparecerCadastrarPaciente" :addPaciente=true :adm=adm />
    <listaPacientes :name=name />
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
      adm: false,
      name: ""
    };
  },
  methods: {
    // Função que executa "esconderCadastroPaciente()"
    esconderCadastroPaciente() {
      this.modalCadastrarPaciente = false;
    },
    // Função que executa "AparecerCadastrarPaciente()"
    AparecerCadastrarPaciente() {
      this.modalCadastrarPaciente = true;
    },
    apareceAdm(){
      if(localStorage.getItem('role') == 2){
        this.adm = true;
      }
    },
    pegaNome(){
      let name = localStorage.getItem("name");
      name = name.split(" ");

      let len = name.length - 1;

      if(len > 0){
        name = name[0] + " " + name[len];
      }else{
        name = name[0]
      }

      this.name = name;
    }
  },
  beforeMount() {
    this.apareceAdm();
    this.pegaNome();
  }

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
