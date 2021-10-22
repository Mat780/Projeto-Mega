<template>
  <div class="conteiner">
    <!-- <modal v-if="showModal" @close="showModal = false" /> -->
    <div class="content content1">
      <div class=".identificacao identificacao">
        <div style="display: flex; width: 100%;">
          <!-- Nome da imagem utilizada como "imagem8" -->
          <img :src="imagem8" class="imagems imagem8" />
          <!-- Título -->
          <h2 class="titulo">Lista de Pacientes</h2>
        </div>
        <!-- Ao clicar nesse botão irá executar a função "AparecerCadastrarPaciente()" -->
        <button class="btn btnAdd" @click="AparecerCadastrarPaciente">
          <!-- Imagem que está sendo utilizada no código -->
          <img :src="adicionar" class="imgAdd" />
        </button>
      </div>
      <!-- Linha que aparece na parte inferior de "Lista de Paciente" e "Lista de Médicos" -->
      <hr class="linha" />
      <!-- Local onde irá aparecer as listas de pacientes -->
      <div class="listas">
        <!-- add v-for aqui -->
        <div class="listaFilhas">
          <div class="detalheAzulFilha"></div>
          <div class="textos"></div>
          <div class="btns">
            <!-- Ao clicar nesse botão irá executar a função "AparecerEditarPaciente()" -->
            <button class="btn btn2" @click="AparecerEditarPaciente">
              <!-- Imagem que está sendo utilizada no código -->
              <img :src="editar" class="btn2Editar" />
            </button>
            <!-- Ao clicar nesse botão irá executar a função "AparecerExcluirPaciente()" -->
            <button class="btn btn3" @click="AparecerExcluirPaciente">
              <!-- Imagem que está sendo utilizada no código -->
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
          <!-- Imagem que está sendo utilizada no código -->
          <img :src="imagem5" class="imagems imagem5" />
          <!-- Título -->
          <h2 class="titulo tituloM">Lista de Médicos</h2>
        </div>
        <!-- Ao digitar tudo que foi pedido, deve clicar no botão que ele irá executar a função de cadastrar médico -->
        <button class="btn btnAdd" @click="AparecerCadastrarMedico">
          <!-- Imagem para adicionar -->
          <img :src="adicionar" class="imgAdd" />
        </button>
      </div>
      <!-- Linha divisória -->
      <hr class="linha" />
      <div class="listas">
        <!-- add v-for aqui -->
        <div class="listaFilhas">
          <div class="detalheAzulFilha"></div>
          <div class="textos"></div>
          <div class="btns">
            <!-- Botão para editar médico -->
            <button class="btn btn2" @click="AparecerEditarMedico">
              <!-- Imagem de "editar" -->
              <img :src="editar" class="btn2Editar" />
            </button>
            <!-- Ao clicar nesse botão irá executar a função "aparecerExcluirMedico()" -->
            <button class="btn btn3" @click="aparecerExcluirMedico">
              <!-- Imagem de "excluir" -->
              <img :src="excluir" class="btn3Excluir" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- content2 -->
    <!-- Modal -->
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
    <confirmarPaciente
      :class="{ modal: true, 'is-active': modalExcluirPaciente }"
      @esconder="esconderExcluirPaciente"
    />
    <confirmarMedico
      :class="{ modal: true, 'is-active': modalExcluirMedico }"
      @esconder="esconderExcluirMedico"
    />
  </div>
</template>

<script>
import cadastrarPaciente from "./CadastrarPaciente.vue";
import cadastrarMedico from "./CadastrarMedico.vue";
import editarMedico from "./EditarMedico.vue";
import editarPaciente from "./EditarPaciente.vue";
import confirmarPaciente from "../modais/confirmarPaciente.vue";
import confirmarMedico from "../modais/confirmarMedico.vue";

export default {
  name: "administracao",
  components: {
    cadastrarPaciente,
    cadastrarMedico,
    editarMedico,
    editarPaciente,
    confirmarPaciente,
    confirmarMedico,
  },
  data() {
    return {
      // Nome das imagens que estão sendo utilizadas no código
      imagem5: "/img/Medica.svg",
      imagem8: "/img/Paciente.svg",
      adicionar: "/img/adicionar.png",
      excluir: "img/excluir.png",
      editar: "img/LaudoImg.png",
      // Todos esse modais estão recebendo "false" para não aparecer ao abrir a página, ao clicar por exemplo no botão de "+"" "Adicionar Paciente" ele irá receber "true"
      modalCadastrarPaciente: false,
      modalEditarPaciente: false,
      modalCadastrarMedico: false,
      modalEditarMedico: false,
      modalExcluirPaciente: false,
      modalExcluirMedico: false,
    };
  },
  methods: {
    // Função que esconde o "esconderCadastroPaciente()"
    esconderCadastroPaciente() {
      this.modalCadastrarPaciente = false;
    },
    // Função que esconde o "esconderEditarPaciente()"
    esconderEditarPaciente() {
      this.modalEditarPaciente = false;
    },
    // Função que esconde o "esconderCadastrarMedico()"
    esconderCadastrarMedico() {
      this.modalCadastrarMedico = false;
    },
    // Função que esconde o "esconderEditarMedico()"
    esconderEditarMedico() {
      this.modalEditarMedico = false;
    },
    // Função que aparece o "AparecerCadastrarPaciente()"
    AparecerCadastrarPaciente() {
      this.modalCadastrarPaciente = true;
    },
    // Função que aparece o "AparecerEditarPaciente()"
    AparecerEditarPaciente() {
      this.modalEditarPaciente = true;
    },
    // Função que aparecer o "AparecerCadastrarMedico()"
    AparecerCadastrarMedico() {
      this.modalCadastrarMedico = true;
    },
    // Função que aparece o "AparecerEditarMedico()"
    AparecerEditarMedico() {
      this.modalEditarMedico = true;
    },
    // Função que aparece o "AparecerExcluirPaciente()"
    AparecerExcluirPaciente() {
      this.modalExcluirPaciente = true;
    },
    // Função que esconde o "esconderExcluirPaciente()"
    esconderExcluirPaciente() {
      this.modalExcluirPaciente = false;
    },
    // Função que aoarece o "aparecerExcluirMedico()"
    aparecerExcluirMedico() {
      this.modalExcluirMedico = true;
    },
    // Função que esconde o "esconderExcluirMedico()"
    esconderExcluirMedico() {
      this.modalExcluirMedico = false;
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
.excluirMedico:hover {
  background-color: #e7a900ab;
  border: 2px solid white;
}
</style>
