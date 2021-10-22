<template>
  <div class="conteiner">
    <!-- <modal v-if="showModal" @close="showModal = false" /> -->
    <div class="content content1">
      <div class=".identificacao identificacao">
        <div style="display: flex; width: 100%;">
          <!-- Imagem que está sendo utilizada no código -->
          <img :src="imagem8" class="imagems imagem8" />
          <!-- Título  -->
          <h2 class="titulo">Lista de Pacientes</h2>
        </div>
        <!-- Botão que executa a função "AparecerCadastrarPaciente()" -->
        <button class="btn btnAdd" @click="AparecerCadastrarPaciente">
          <!-- Imagem de adicionar -->
          <img :src="adicionar" class="imgAdd" />
        </button>
      </div>
      <!-- Linha divisória -->
      <hr class="linha" />
      <div class="listas">
        <!-- Pacientes -->
        <listaPaciente
          v-for="lP in listaDePacientes.slice().reverse()"
          :key="lP.id"
          @remove="removeListaPaciente"
          :listaPaciente="lp"
        />
      </div>
      <!-- listas -->
    </div>
    <!-- content1 -->
    <div class="content content2">
      <div class="identificacao identificacao2">
        <div style="display: flex; width: 100%;">
          <!-- Imagem que está sendo usada no código -->
          <img :src="imagem5" class="imagems imagem5" />
          <!-- Título -->
          <h2 class="titulo tituloM">Lista de Médicos</h2>
        </div>
        <!-- Ao clicar nesse botão irá executar a função "AparecerCadastrarMedico()" -->
        <button class="btn btnAdd" @click="AparecerCadastrarMedico">
          <!-- Imagem de adicionar -->
          <img :src="adicionar" class="imgAdd" />
        </button>
      </div>
      <!-- Linha divisória -->
      <hr class="linha" />
      <div class="listas">
        <!-- Médico -->
        <listaMedico
          v-for="lM in listaDeMedicos.slice().reverse()"
          :key="lM.id"
          @remover="removeListaMedico"
          :listaMedico="lm"
        />
      </div>
      <!-- listas -->
    </div>
    <!-- content2 -->
    <cadastrarPaciente
      :class="{ modal: true, 'is-active': modalCadastrarPaciente }"
      @addListaPaciente="addPaciente(listaDePaciente)"
      @esconder="esconderCadastroPaciente"
    />
    <cadastrarMedico
      :class="{ modal: true, 'is-active': modalCadastrarMedico }"
      @addListaMedico="addMedico(listaDeMedico)"
      @esconder="esconderCadastrarMedico"
    />
  </div>
  <!-- conteiner -->
</template>

<script>
import cadastrarPaciente from "./CadastrarPaciente.vue";
import cadastrarMedico from "./CadastrarMedico.vue";
import listaPaciente from "../listas/listaPaciente.vue";
import listaMedico from "../listas/listaMedico.vue";

export default {
  name: "administracao",
  components: {
    cadastrarPaciente,
    cadastrarMedico,
    listaPaciente,
    listaMedico,
  },
  data() {
    return {
      // Nome das imagens que estão sendo utilizadas
      imagem5: "/img/Medica.svg",
      imagem8: "/img/Paciente.svg",
      adicionar: "/img/adicionar.png",
      excluir: "img/excluir.png",
      editar: "img/LaudoImg.png",
      // Modal que recebe false pra não executar diretamente tal função
      modalCadastrarPaciente: false,
      modalCadastrarMedico: false,
      listaDePacientes: [],
      listaDePaciente: { checked: false },
      listaDeMedicos: [],
      listaDeMedico: { checked: false },
    };
  },
  methods: {
    // Função que executa "esconderCadastroPaciente()"
    esconderCadastroPaciente() {
      this.modalCadastrarPaciente = false;
    },
    // Função que executa "esconderCadastrarMedico()"
    esconderCadastrarMedico() {
      this.modalCadastrarMedico = false;
    },
    // Função que executa "AparecerCadastrarPaciente()"
    AparecerCadastrarPaciente() {
      this.modalCadastrarPaciente = true;
    },
    // Função que executa "AparecerCadastrarMedico()"
    AparecerCadastrarMedico() {
      this.modalCadastrarMedico = true;
    },
    // Adiciona as lista de Pacientes
    addPaciente(listaDePaciente) {
      listaDePaciente.id = Date.now();
      this.listaDePacientes.push(listaDePaciente);
      this.listaDePaciente = { checked: false };
    },
    // remove as lista de Pacientes
    removeListaPaciente(listaDePaciente) {
      if (listaDePaciente) {
        console.log(listaDePaciente);
        const index = this.listaDePacientes.findIndex(
          (item) => item.id === listaDePaciente.id
        );
        this.listaDePacientes.splice(index, 1);
      }
    },
    // Adiciona as lista de Medicos
    addMedico(listaDeMedico) {
      listaDeMedico.id = Date.now();
      this.listaDeMedicos.push(listaDeMedico);
      this.listaDeMedico = { checked: false };
    },
    // remove as lista de Medicos
    removeListaMedico(listaDeMedico) {
      if (listaDeMedico) {
        console.log(listaDeMedico);
        const index = this.listaDeMedicos.findIndex(
          (item) => item.id === listaDeMedico.id
        );
        this.listaDeMedicos.splice(index, 1);
      }
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
  color: #2e4a7d;
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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
}

.btnAdd {
  align-self: center;
  box-shadow: none;
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
