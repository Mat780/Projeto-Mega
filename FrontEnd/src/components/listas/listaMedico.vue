<template>
  <div class="listaFilhas">
    <div class="detalheAzulFilha"></div>
    <div class="textos">
      <span class="cardNameAdm">{{this.name}}</span>
      <span class="cardCpfAdm">{{this.cardCpf}}</span>
    </div>
    <div class="btns">
      <!-- Ao clicar nesse botão irá executar a função "AparecerEditarMedico()" -->
      <button class="btn btn2" @click="AparecerEditarMedico">
        <!-- Imagem de editar -->
        <img :src="editar" class="btn2Editar" />
      </button>
      <!-- Ao clicar nesse botão irá executar a função "aparecerExcluirMedico()" -->
      <button class="btn btn3" @click="aparecerExcluirMedico">
        <!-- Imagem de "excluir" -->
        <img :src="excluir" class="btn3Excluir" />
      </button>
    </div>
    <confirmarMedico
      :class="{ modal: true, 'is-active': modalExcluirMedico }"
      @esconder="esconderExcluirMedico"
      @remover="remover"
    />
    <editarMedico
      :class="{ modal: true, 'is-active': modalEditarMedico }"
      @esconder="esconderEditarMedico"
    />
  </div>
</template>

<script>
import confirmarMedico from "../modais/confirmarMedico.vue";
import editarMedico from "../Adm/EditarMedico.vue";

export default {
  props: {
    name: String,
    cpf: String,
    idMedico: Number
  },
  components: {
    editarMedico,
    confirmarMedico,
  },
  data() {
    return {
      // Nome das imagens que estão sendo utilizadas
      excluir: "img/excluir.png",
      editar: "img/LaudoImg.png",
      modalExcluirMedico: false,
      modalEditarMedico: false,
      cardCpf: ""
    };
  },
  methods: {
    // Função que executa "esconderEditarMedico()"
    esconderEditarMedico() {
      this.modalEditarMedico = false;
    },
    // Função que executa "AparecerEditarMedico()"
    AparecerEditarMedico() {
      this.modalEditarMedico = true;
    },
    // Função que aoarece o "aparecerExcluirMedico()"
    aparecerExcluirMedico() {
      this.modalExcluirMedico = true;
    },
    // Função que esconde o "esconderExcluirMedico()"
    esconderExcluirMedico() {
      this.modalExcluirMedico = false;
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
