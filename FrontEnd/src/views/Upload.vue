<template>
  <div class="conteiner">
    <div class="content">
      <!-- Puxa o componente SideBar para a página -->
      <SideBar :listaPaciente=true />

      <!-- Puxa o componente CompUpload para a página -->
      <CompUpload :name=name :namePacient=namePacient />
    </div>
  </div>
</template>

<script>
// Importa os componentes SideBar e CompUpload
import SideBar from "../components/SideBar.vue";
import CompUpload from "../components/Upload/CompUpload.vue"

// Exporta as informações do componente
export default {

  // Nome do componente 
  name: "Upload",

  data(){
    return{
      name: "",
      namePacient: ""
    }
  },

  // Componentes importados
  components: {
    SideBar,
    CompUpload,
  },

  methods: {
    pegaNome(){
      let name = localStorage.getItem("name");
      let namePacient = localStorage.getItem("namePacient");

      name = name.split(" ");
      namePacient = namePacient.split(" ");

      let len = name.length - 1;
      let len2 = namePacient.length - 1;

      if(len > 0){
        name = name[0] + " " + name[len];
      }else{
        name = name[0]
      }
      
      if(len2 > 0){
        namePacient = namePacient[0] + " " + namePacient[len2];
      }else{
        namePacient = namePacient[0]
      }

      this.name = name;
      this.namePacient = namePacient;
    }
  },

  beforeMount(){
    this.pegaNome();
  }

};

</script>

<style scoped>

.content{
  width: 100vw;
  height: 100vh;
  display: flex;
  color: #2e4a7d;
  background-color: rgba(235, 242, 245, 1);
}
</style>

