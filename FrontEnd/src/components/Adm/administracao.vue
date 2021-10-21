<template>
  <div class="conteiner">
    <!-- <modal v-if="showModal" @close="showModal = false" /> -->
    <div class="content content1">
      <div class=".identificacao identificacao">
        <div style="display: flex; width: 100%;">
          <img :src="imagem8" class="imagems imagem8" />
          <h2 class="titulo">Lista de Pacientes</h2>
        </div>
        <button class="btn btnAdd" @click="AparecerCadastrarPaciente">
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
            <button class="btn btn2" @click="AparecerEditarPaciente">
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
        <button class="btn btnAdd" @click="AparecerCadastrarMedico">
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
            <button class="btn btn2" @click="AparecerEditarMedico">
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
    <cadastrarPaciente
      :class="{ modal: true, 'is-active': modalCadastrarPaciente }"
      @esconder="esconderCadastroPaciente"
    />
    <cadastrarMedico
      :class="{ modal: true, 'is-active': modalCadastrarMedico }"
      @esconder="esconderCadastrarMedico"
    />
    <editarMedico
      :class="{ modal: true, 'is-active': modalEditarMedico }"
      @esconder="esconderEditarMedico"
    />
    <editarPaciente
      :class="{ modal: true, 'is-active': modalEditarPaciente }"
      @esconder="esconderEditarPaciente"
    />
  </div>
  <!-- conteiner -->
</template>

<script>
import cadastrarPaciente from "./CadastrarPaciente.vue";
import cadastrarMedico from "./CadastrarMedico.vue";
import editarMedico from "./EditarMedico.vue";
import editarPaciente from "./EditarPaciente.vue";


export default {
  name: "administracao",
  components: {
    cadastrarPaciente,
    cadastrarMedico,
    editarMedico,
    editarPaciente,
  },
  data() {
    return {
      imagem5: "/img/Medica.svg",
      imagem8: "/img/Paciente.svg",
      adicionar: "/img/adicionar.png",
      excluir: "img/excluir.png",
      editar: "img/LaudoImg.png",
      modalCadastrarPaciente: false,
      modalEditarPaciente: false,
      modalCadastrarMedico: false,
      modalEditarMedico: false,
    };
  },
  methods: {
    esconderCadastroPaciente() {
      this.modalCadastrarPaciente = false;
    },
    esconderEditarPaciente() {
      this.modalEditarPaciente = false;
    },
    esconderCadastrarMedico() {
      this.modalCadastrarMedico = false;
    },
    esconderEditarMedico() {
      this.modalEditarMedico = false;
    },
    AparecerCadastrarPaciente() {
      this.modalCadastrarPaciente = true;
    },
    AparecerEditarPaciente() {
      this.modalEditarPaciente = true;
    },
    AparecerCadastrarMedico() {
      this.modalCadastrarMedico = true;
    },
    AparecerEditarMedico() {
      this.modalEditarMedico = true;
    },
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
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid #2e4a7d;
  background-color: #2e4a7d;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.8s ease all;
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
  height: 72%;
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
