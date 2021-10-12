<template>
  <div class="conteiner">
    <!-- <modal v-if="showModal" @close="showModal = false" /> -->
    <div class="content content1">
      <div class=".identificacao identificacao">
        <div style="display: flex; width: 100%;">
          <img :src="imagem8" class="imagems imagem8" />
          <h2 class="titulo">Lista de Pacientes</h2>
        </div>
        <button class="btn btnAdd" @click="AbrirCadastrarPaciente">
          <img :src="adicionar" class="imgAdd" />
        </button>
      </div>
      <hr class="linha" />
      <div class="listas">
        <!-- add v-for aqui -->
        <div class="listaFilhas">
          <div class="detalheAzulFilha"></div>
          <div class="textos"></div>
          <div class="btns">
            <button class="btn btn2" @click="AbrirEditarPaciente">
              <img :src="editar" class="btn2Editar" />
            </button>
            <button class="btn btn3">
              <img :src="excluir" class="btn3Excluir" />
            </button>
          </div>
        </div>
      </div>
      <!-- listas -->
    </div>
    <!-- content1 -->
    <div class="content content2">
      <div class="identificacao identificacao2">
        <div style="display: flex; width: 100%;">
          <img :src="imagem5" class="imagems imagem5" />
          <h2 class="titulo tituloM">Lista de Médicos</h2>
        </div>
        <button class="btn btnAdd" @click="AbrirCadastrarMedico">
          <img :src="adicionar" class="imgAdd" />
        </button>
      </div>
      <hr class="linha" />
      <div class="listas">
        <!-- add v-for aqui -->
        <div class="listaFilhas">
          <div class="detalheAzulFilha"></div>
          <div class="textos"></div>
          <div class="btns">
            <button class="btn btn2" @click="AbrirEditarMedico">
              <img :src="editar" class="btn2Editar" />
            </button>
            <button class="btn btn3">
              <img :src="excluir" class="btn3Excluir" />
            </button>
          </div>
        </div>
      </div>
      <!-- listas -->
    </div>
    <!-- content2 -->
  </div>
  <!-- conteiner -->
</template>

<script>
export default {
  name: "administracao",
  data() {
    return {
      showModal: false,
      imagem5: "/img/Medica.svg",
      imagem8: "/img/Paciente.svg",
      adicionar: "/img/adicionar.png",
      excluir: "img/excluir.png",
      editar: "img/LaudoImg.png",
    };
  },
  methods: {
    AbrirCadastrarPaciente() {
      //  this.showModal = true;
      this.$router.push("/Login/Adm/CadastrarPaciente");
    },
    AbrirEditarPaciente() {
      this.$router.push("/Login/Adm/EditarPaciente");
    },
    AbrirCadastrarMedico() {
      this.$router.push("/Login/Adm/CadastrarMedico");
    },
    AbrirEditarMedico(){
      this.$router.push("/Login/Adm/EditarMedico");
    }
  },
};
</script>

<style scoped>
.conteiner {
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(235, 242, 245, 1);
}

.content {
  width: 42%;
  height: 85%;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.identificacao {
  width: 92%;
  display: flex;
  justify-content: space-between;
  padding-top: 3%;
  padding-bottom: 2%;
}

.imagems {
  width: 4.8vw;
  height: 100%;
}

.titulo {
  font-size: 1.5em;
  align-self: center;
  margin-left: 2%;
}

.tituloM {
  right: 19.3%;
}

.btn {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  background-color: #2e4a7d;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 1s;
}

.btnAdd {
  align-self: center;
}

.btn:hover {
  border: 1px solid #fff;
  background-color: #ffd666;
}

.imgAdd {
  width: 50%;
}

.linha {
  width: 91%;
  border: 1.2px solid #2e4a7d;
  background-color: #2e4a7d;
}

.listas {
  width: 91%;
  height: 78%;
  margin-top: 3%;
  overflow-y: scroll;
}

.listaFilhas {
  width: 98%;
  height: 20%;
  border-radius: 8px;
  background-image: linear-gradient(to top, #ffd66680, #ffd666);
  display: flex;
}

.detalheAzulFilha {
  width: 3%;
  height: 100%;
  border-radius: 8px 0 0 8px;
  background-color: #2e4a7d;
}

.textos {
  width: 70%;
  height: 100%;
}

.btns {
  display: flex;
  width: 27%;
  justify-content: space-evenly;
  align-items: center;
}

.btn2Editar {
  width: 65%;
}

.btn3Excluir {
  width: 50%;
}
.btn2:hover {
  background-color: #e7a900ab;
  border: 2px solid white;
}
.btn3:hover {
  background-color: #e7a900ab;
  border: 2px solid white;
}
</style>
