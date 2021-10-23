<template>
  <div class="conteiner">
    <!-- <modal v-if="showModal" @close="showModal = false" /> -->
    <div class="content content1">
      <div class=".identificacao identificacao">
        <div style="display: flex; width: 100%;">
          <!-- Imagem que está sendo utilizada no código -->
          <img :src="imagem8" class="imagems imagem8" @click="pullPacientes()" />
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

        <ListaPaciente
          v-for="lP in listaPacientes.slice()"
          :key="lP.idUser"
          @remove="removerUsuario"
          :name="lP.name"
          :cpf="lP.cpf"
          :idPaciente="lP.idPaciente"
        />

        <!-- <Laudo
            v-for="l in laudos.slice()"
            :key="l.idPaciente"
            @remove="removeLista"
            :laudo="l"
            :name="nomeMedico"
            :file="DropzoneFile.value"
          /> -->

      </div>
      <!-- listas -->
    </div>
    <!-- content1 -->
    <div class="content content2">
      <div class="identificacao identificacao2">
        <div style="display: flex; width: 100%;">
          <!-- Imagem que está sendo usada no código -->
          <img :src="imagem5" class="imagems imagem5" @click="pullMedicos()"/>
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
        <ListaMedico
          v-for="lM in listaMedicos.slice().reverse()"
          :key="lM.id"
          @remover="removeListaMedico"
          :name="lM.name"
          :cpf="lM.cpf"
          :idMedico="lM.idMedico"
        />
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
  </div>
  <!-- conteiner -->
</template>

<script>
import cadastrarPaciente from "./CadastrarPaciente.vue";
import cadastrarMedico from "./CadastrarMedico.vue";
import ListaPaciente from "../listas/listaPaciente.vue";
import ListaMedico from "../listas/listaMedico.vue";
import axios from "axios"

export default {
  name: "administracao",
  components: {
    cadastrarPaciente,
    cadastrarMedico,
    ListaPaciente,
    ListaMedico,
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
      listaPacientes: [],
      listaMedicos: [],

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

    // remove o usuário
    removerUsuario(cpf) {
      axios.delete("http://localhost:8080/user/" + cpf);
      this.$router.go();
    },
    
    pullPacientes(){
      axios.get("http://localhost:8080/pacientes").then(data => {
        console.log(data.data);
        data.data.forEach((value, index) => {
          let lista = {}

          lista.idPaciente = value.idPaciente;
          lista.cpf = value.cpf;
          lista.name = value.nome;

          this.listaPacientes[index] = lista;
        })
      })
    },
    pullMedicos(){
      axios.get("http://localhost:8080/medicos").then(data => {
        console.log(data.data);
        data.data.forEach((value, index) => {
          let lista = {}
          
          lista.idMedico = value.idMedico;
          lista.cpf = value.cpf;
          lista.name = value.nome;

          this.listaMedicos[index] = lista;
        })
      })
    },
    
  },

  beforeMount(){
    this.pullPacientes();
    this.pullMedicos();
  }
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
  margin-bottom: 3%;
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
