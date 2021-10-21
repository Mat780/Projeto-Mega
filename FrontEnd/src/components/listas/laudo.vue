<template>
  <div class="laudo">
    <div class="parteEsquerda">
<<<<<<< HEAD
      <h4 class="nomeDoLaudo">{{ laudo.description }}</h4>
      <h5 class="nomeDoMedico">Dr. Hans Chucrute</h5>
    </div>
    <div class="parteDireita">
      <div class="parteBtns">
        <button class="btn">
          <img :src="download" class="img download" />
        </button>
        <button class="btn" @click="aparecerExcluirLaudo">
          <img :src="excluir" class="img excluir" />
        </button>
      </div>
      <h6 class="DataDoLaudo">{{ laudo.description2 }}</h6>
    </div>
    <confirmarLaudo
      :class="{ modal: true, 'is-active': modalExcluirLaudo }"
      @esconder="esconderExcluirLaudo"
      @remove="remove"
    />
=======
      <!-- Títulos -->
      <h4 class="nomeDoLaudo">{{ laudo.description }}</h4>
      <!-- Títulos(0 nome do médico que fez o laudo) -->
      <h5 class="nomeDoMedico">Dr. Hans Chucrute</h5>
    </div>
    <!-- Parte direita da "class=laudo" -->
    <div class="parteDireita">
      <div class="parteBtns">
        <!-- Botão que faz o download -->
        <button class="btn">
          <!-- Imagem de download -->
          <img :src="download" class="img download" />
        </button>
        <!-- Botão ao clicar ele remove o laudo -->
        <button @click="$emit('remove', laudo)" class="btn">
          <!-- Imagem de excluir -->
          <img :src="excluir" class="img excluir" />
        </button>
      </div>
      <!-- Título -->
      <h6 class="DataDoLaudo">{{ laudo.description2 }}</h6>
    </div>
>>>>>>> e362a7926731c2cd0cf7fa6396b11ea28549b6ab
  </div>
</template>

<script>
import confirmarLaudo from "../modais/confirmarLaudo.vue";

export default {
  props: {
    laudo: { type: Object, required: true },
  },
<<<<<<< HEAD
  components: {
    confirmarLaudo,
  },
  data() {
    return {
      excluir: "/img/excluir.png",
      download: "/img/download.png",
      modalExcluirLaudo: false,
    };
  },
  methods: {
    aparecerExcluirLaudo() {
      this.modalExcluirLaudo = true;
    },
    esconderExcluirLaudo() {
      this.modalExcluirLaudo = false;
    },
    remove(laudo) {
      this.$emit("remove", laudo);
    },
  },
=======
  data() {
    return {
      // Imagens que estão sendo utilizadas no código
      excluir: "/img/excluir.png",
      download: "/img/download.png",
    };
  },
>>>>>>> e362a7926731c2cd0cf7fa6396b11ea28549b6ab
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
