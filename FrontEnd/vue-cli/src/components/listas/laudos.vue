<template>
  <!-- div que está contendo todas as outra divs -->
  <div class="conteinerLaudos">
    <!-- div que possui os laudos dentro dela -->
    <div class="contentLaudos">
      <!-- Mensagem crua -->
      <span class="tituloLaudos">Laudo do Eletrocardiograma</span>
      <!-- linha branca dentro de laudos -->
      <hr class="linhaLaudos" />
      <!-- imagem dos laudos -->
      <img :src="imgLaudos" class="imgLaudos" />
    </div>
    <!-- Parte inferior dentro do "divconteinerLaudos" -->
    <div class="content2Laudos">
      <!-- Parte esquerda do laudo que possui a data -->
      <div class="parteEsquerdaLaudos">
        <!-- Imagem do calendário do lado esquerdo dos laudos -->
        <img :src="calendario" class="calendario" />
        <!-- Linha ao lado direito do calendário -->
        <div class="divLinha"></div>
      </div>
      <!-- Botão para baixar o laudo -->
      <button class="btnBaixarLaudo">
        <!-- Imagem de download -->
        <img :src="download" />
        <!-- Descrição do botão de baixar laudo -->
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
      // Nome das imagens que estão sendo utilizadas no código
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
  bottom: 26%;
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

.calendario {
  padding-left: 10%;
  align-self: center;
}

.divLinha {
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
