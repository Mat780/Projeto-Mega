<template>
  <div class="laudo">
    <!-- Parte esquerda do laudo -->
    <div class="parteEsquerda">
      <!-- Título -->
      <h4 class="nomeDoLaudo">{{ laudo.description }}</h4>
      <!-- Título -->
      <h5 class="nomeDoMedico">Dr. Hans Chucrute</h5>
    </div>
    <!-- Parte direita do laudo -->
    <div class="parteDireita">
      <!-- div de botões -->
      <div class="parteBtns">
        <!-- Botão de download -->
        <button class="btn">
          <!-- Imagem que está sendo utilizada no código -->
          <img :src="download" class="img download" />
        </button>
        <!-- Ao clicar, executa a função "aparecerExcluirLaudo()" -->
        <button class="btn" @click="aparecerExcluirLaudo">
          <!-- Imagem que está sendo utilizada no código -->
          <img :src="excluir" class="img excluir" />
        </button>
      </div>
      <!-- Título -->
      <h6 class="DataDoLaudo">{{ laudo.description2 }}</h6>
    </div>
    <confirmarLaudo
      :class="{ modal: true, 'is-active': modalExcluirLaudo }"
      @esconder="esconderExcluirLaudo"
      @remove="remove"
    />
  </div>
</template>

<script>
import confirmarLaudo from "../modais/confirmarLaudo.vue";

export default {
  props: {
    laudo: { type: Object, required: true },
  },
  components: {
    confirmarLaudo,
  },
  data() {
    return {
      // Nome das imagens que estão sendo utilizadas
      excluir: "/img/excluir.png",
      download: "/img/download.png",
      modalExcluirLaudo: false,
    };
  },
  methods: {
    // Função que executa "aparecerExcluirLaudo()"
    aparecerExcluirLaudo() {
      this.modalExcluirLaudo = true;
    },
    // Função que executa "esconderExcluirLaudo()"
    esconderExcluirLaudo() {
      this.modalExcluirLaudo = false;
    },
    // Função que executa "remove(laudo)"
    remove(laudo) {
      this.$emit("remove", laudo);
    },
  },
};
</script>

<style scoped>
.laudo {
  width: 98%;
  height: 20%;
  background-image: linear-gradient(to top, #ffd66680, #ffd666);
  border-radius: 8px;
  margin-bottom: 4%;
  display: flex;
  justify-content: space-between;
}

.parteEsquerda {
  padding-top: 2.5%;
  padding-left: 5%;
}

.parteDireita {
  display: flex;
  flex-direction: column;
}

.nomeDoLaudo {
  color: #2e4a7d;
  font-size: 25px;
}

.nomeDoMedico {
  width: 100%;
  font-size: 13px;
  color: #999898;
  position: relative;
  bottom: 20%;
}

.DataDoLaudo {
  width: 100%;
  color: #999898;
  position: relative;
  top: 8%;
  right: 6%;
}

.parteBtns {
  width: 85%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 1.5vh;
}

.btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-top: 3.5%;
  border: none;
  background-color: #2e4a7d;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 1s;
}

.btn:hover {
  border: 1px solid #fff;
  background-color: #ffd666;
}

.img {
  width: 50%;
}
</style>
