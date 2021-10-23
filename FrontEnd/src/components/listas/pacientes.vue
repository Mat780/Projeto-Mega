<template>
  <div class="listaPaciente" @click="ChangeUpload()" >
    <!-- imagem que está sendo utilizada no código -->
    <img :src="imagem8_2" class="imagem8_2" />
    <label>{{name}}</label>
    <label>{{cpf}}</label>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    cpf: String,
    idPaciente: Number,
  },
  data() {
    return {
      // Nome da imagem que está sendo utilizada
      imagem8_2: "../img/imagem8_2.svg",
    };
  },
  methods: {
    ChangeUpload() {
      localStorage.setItem('idPaciente', this.idPaciente);
      localStorage.setItem('namePacient', this.name);
      this.$router.push({ path: "/Login/ListarPacientes/Upload" });
    },
  }
};
</script>

<style scoped>
.listaPaciente {
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/img/RectanglePaciente.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: #fff;
  cursor: pointer;
  
  margin-right: 6%;
}

.imagem8_2 {
  margin-top: 20%;
}

label {
  position: relative;
  padding-top: 2%;
  color: #2e4a7d;
  font-weight: 500;
  font-size: 1.05em;
}
</style>
