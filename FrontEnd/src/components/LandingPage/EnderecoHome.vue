<template>
  <div>
    <section class="EndHomeSec" id="EndHome">
      <div id="EndHomeList">
        <!-- Título -->
        <h1>Endereço</h1>
        <div class="EndHomeListDiv">
          <section class="EndHomeListSec">
            <!-- Imagem do endereço -->
            <img :src="endereco" class="EndHomeListSecImgs" />
            <!-- Descrição -->
            <p>Rua dos Doidões, Bairro Muito Doido, N° 127</p>
          </section>
        </div>
        <div class="EndHomeListDiv">
          <section class="EndHomeListSec">
            <!-- Imagem do ar -->
            <img :src="arCond" class="EndHomeListSecImgs" />
            <!-- Descrição -->
            <p>
              Ambiente climatizado, para o seu conforto ao atende-lo!
            </p>
          </section>
        </div>
        <div class="EndHomeListDiv">
          <section class="EndHomeListSec">
            <!-- Imagem da bola de futebol -->
            <img :src="bolaFut" class="EndHomeListSecImgs" />
            <!-- Descrição -->
            <p>
              Sala com brinquedos e passa-tempo para as crianças!
            </p>
          </section>
        </div>
      </div>
      <div id="DivMapsImg">
        <!--  Ao clicar no mapa irá ser direcionado para a localização da facom -->
        <a :href="facom" target="_blank">
          <!-- Imagem do mapa -->
          <img :src="maps" id="MapsImg" />
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "EnderecoHome",
  data() {
    return {
      // Nome das imagens que estão sendo utilizadas
      bg: "/img/EnderecoBorder.png",
      maps: "/img/Maps.png",
      arCond: "/img/ArCondicionado.png",
      bolaFut: "/img/BolaFut.png",
      endereco: "/img/End1.png",
      facom:
        "https://www.google.com.br/maps/place/FACOM+-+Faculdade+de+Computação+-+UFMS/@-20.5025357,-54.6124704,17.75z/data=!4m5!3m4!1s0x9486e5f501501899:0xa3a12020e73b352b!8m2!3d-20.5025212!4d-54.6134556",
    };
  },
};
</script>

<style scoped>
section {
  margin: 0;
  background-color: #ebf2f5;
  background-image: url("/img/EnderecoBorder.png");
  background-repeat: no-repeat;
}

h1 {
  color: #2e4a7d;

  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 2.5em;
  display: flex;
  align-items: center;
}

p {
  margin: 0 0 0 8px;
  color: rgba(46, 74, 125, 0.8);

  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  display: flex;
  align-items: center;
}

.EndHomeSec {
  padding: 2% 0 3% 0;
  display: grid;
  grid-template-columns: 50% 50%;
}

#EndHomeList {
  margin-left: 30px;
}

.EndHomeListSec {
  background: none;
  display: grid;
  grid-template-columns: 40px auto;
}

.EndHomeListDiv {
  margin-top: 12px;
}

#DivMapsImg {
  display: flex;
  justify-content: center;
  align-items: center;
}

#MapsImg {
  padding-top: 2%;
  max-width: 480px;
}
</style>
