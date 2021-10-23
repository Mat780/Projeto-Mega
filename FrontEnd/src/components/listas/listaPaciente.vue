<template>
  <div class="listaFilhas">
    <div class="detalheAzulFilha"></div>
    <div class="textos">
      <span class="cardNameAdm">{{this.name}}</span>
      <span class="cardCpfAdm">{{this.cardCpf}}</span>
    </div>
    <div class="btns">
      <!-- Botão que executa a função "AparecerEditarPaciente()" -->
      <button class="btn btn2" @click="AparecerEditarPaciente">
        <!-- Imagem de editar -->
        <img :src="editar" class="btn2Editar" />
      </button>
      <!-- Ao clicar nesse botão irá executar a função "AparecerExcluirPaciente()" -->
      <button class="btn btn3" @click="AparecerExcluirPaciente">
        <!-- Imagem que está sendo utilizada no código -->
        <img :src="excluir" class="btn3Excluir" />
      </button>
    </div>
    <confirmarPaciente
      :class="{ modal: true, 'is-active': modalExcluirPaciente }"
      @esconder="esconderExcluirPaciente"
      @remove="excluirPaciente"
    />
    <editarPaciente
      :class="{ modal: true, 'is-active': modalEditarPaciente }"
      @esconder="esconderEditarPaciente"
      :cpfProps="this.cpf"
    />
  </div>
</template>

<script>
import confirmarPaciente from "../modais/confirmarPaciente.vue";
import editarPaciente from "../Adm/EditarPaciente.vue";

export default {
  props: {
    name: String,
    cpf: String,
    idPaciente: Number,
  },
  components: {
    confirmarPaciente,
    editarPaciente,
  },
  data() {
    return {
      // Nome das imagens que estão sendo utilizadas
      excluir: "img/excluir.png",
      editar: "img/LaudoImg.png",
      modalExcluirPaciente: false,
      modalEditarPaciente: false,
      cardCpf: "",
    };
  },
  methods: {
    // Função que aparece o "AparecerExcluirPaciente()"
    AparecerExcluirPaciente() {
      this.modalExcluirPaciente = true;
    },
    // Função que esconde o "esconderExcluirPaciente()"
    esconderExcluirPaciente() {
      this.modalExcluirPaciente = false;
    },
    // Função que executa "AparecerEditarPaciente()"
    AparecerEditarPaciente() {
      this.modalEditarPaciente = true;
    },
    // Função que executa "esconderEditarPaciente()"
    esconderEditarPaciente() {
      this.modalEditarPaciente = false;
    },
    // Função que executa "remove(laudo)"
    excluirPaciente(){
      this.$emit("remove", this.cpf);
    },

    cpfApplier(){
      let cpfMudado = "";
      cpfMudado = cpfMudado + this.cpf[0];
      cpfMudado = cpfMudado + this.cpf[1];
      cpfMudado = cpfMudado + this.cpf[2];
      cpfMudado = cpfMudado + "."

      cpfMudado = cpfMudado + this.cpf[3];
      cpfMudado = cpfMudado + this.cpf[4];
      cpfMudado = cpfMudado + this.cpf[5];
      cpfMudado = cpfMudado + "."

      cpfMudado = cpfMudado + this.cpf[6];
      cpfMudado = cpfMudado + this.cpf[7];
      cpfMudado = cpfMudado + this.cpf[8];
      cpfMudado = cpfMudado + '-'
      
      cpfMudado = cpfMudado + this.cpf[9];
      cpfMudado = cpfMudado + this.cpf[10];

      this.cardCpf = cpfMudado;
    }
    
  },

  beforeMount(){
    this.cpfApplier();
  }
};
</script>

<style scoped>
.listaFilhas {
  width: 98%;
  height: 20%;
  border-radius: 8px;
  background-image: linear-gradient(to top, #ffd66680, #ffd666);
  display: flex;
  margin-top: 2%;
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
  padding-left: 3%;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cardNameAdm{
  font-size: 1.1em;
  font-weight: 600;
  color: #2e4a7d;
}

.cardCpfAdm{
  font-size: 0.8em;
  font-weight: 600;
  color: #2e4a7db4;
}

.btns {
  display: flex;
  width: 27%;
  justify-content: space-evenly;
  align-items: center;
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
