<template>
  <div class="laudo">
    <div class="parteEsquerda">
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
  </div>
</template>

<script>
export default {
  props: {
    laudo: { type: Object, required: true },
  },
  data() {
    return {
      // Imagens que estão sendo utilizadas no código
      excluir: "/img/excluir.png",
      download: "/img/download.png",
    };
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
