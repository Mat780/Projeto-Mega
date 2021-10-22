<template>
  <div class="conteinerLaudos">
    <div class="contentLaudos">
      <!-- mensagem crua -->
      <span class="tituloLaudos">Laudo do Eletrocardiograma</span>
      <!-- Linha divisória -->
      <hr class="linhaLaudos" />
      <!-- Imagem dos laudos -->
      <img :src="imgLaudos" class="imgLaudos" />
    </div>
    <div class="content2Laudos">
      <div class="parteEsquerdaLaudos">
        <!-- Imagem do calendário -->
        <img :src="calendario" class="calendario" />
        <div class="divLinha"></div>
      </div>
      <!-- Botão para baixar laudo -->
      <button class="btnBaixarLaudo">
        <!-- Imagem de download -->
        <img :src="download" />
        Baixar Laudo
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    laudos: { type: Object, required: true },
  },
  data() {
    return {
      // Nome das imagens que estão sendo utilizadas
      download: "/img/download.png",
      imgLaudos: "/img/imgLaudos.png",
      calendario: "/img/caledario.png",
    };
  },
};
</script>

<style scoped>
.conteinerLaudos {
  width: 48%;
  height: 50%;
  border-radius: 16px;
  font-size: 20px;
  padding-top: 1%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contentLaudos {
  width: 95%;
  height: 75%;
  border-radius: 8px 8px 8px 0px;
  padding-top: 4%;
  background-image: linear-gradient(to top, #ffd66680, #ffd666);
}

.tituloLaudos {
  position: relative;
  left: 45%;
  font-weight: 900;
}

.linhaLaudos {
  width: 100%;
  border: 2px solid #fff;
  background-color: #fff;
  margin-top: 4%;
}

.imgLaudos {
  position: relative;
  left: 8%;
  bottom: 10vh;
}

.content2Laudos {
  width: 95%;
  height: 27%;
  display: flex;
  justify-content: space-between;
}

.parteEsquerdaLaudos {
  width: 62%;
  height: 70%;
  border-radius: 0px 0px 8px 8px;
  background-color: rgba(255, 214, 102, 0.5);
  display: flex;
}

.calendario{
  padding-left: 10%;
  align-self: center;
}

.divLinha{
  height: 55%;
  border-right: 2px solid #2e4a7d;
  align-self: center;
  padding-left: 3%;
}

.btnBaixarLaudo {
  width: 35%;
  height: 65%;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 18px;
  margin-top: 2%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(18, 175, 203, 1);
  cursor: pointer;
  transition: 0.4s;
}

.btnBaixarLaudo:hover {
  background-color: #ffd666;
}
</style>
