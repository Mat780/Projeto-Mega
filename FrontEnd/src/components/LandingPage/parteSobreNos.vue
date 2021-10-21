<template>
  <div id="content">
    <div>
      <div class="parte_Direita">
        <!-- Ao clicar, ele irá trocar para uma imagem jogando-a para esquerda -->
        <button class="LandingBotoes" @click="TrocarEsquerda">
          <!-- Imagem que está sendo utilizada com o nome "SetaEsquerda" -->
          <img class="LandingBotoesImg" :src="SetaEsquerda" />
        </button>

        <img :src="ImgAtt" style="width: 80%;transition: 0.5s;" />
        <!-- Ao clicar, ele irá trocar para uma imagem jogando-a para esquerda -->
        <button class="LandingBotoes" @click="TrocarDireita">
          <!-- Imagem que está sendo utilizada com o nome "SetaDireita" -->
          <img class="LandingBotoesImg" :src="SetaDireita" />
        </button>
      </div>
      <div style="display: flex; justify-content: space-evenly; height: 4.2vh;">
        <!-- Bolinhas que estão na parte inferior das imagens que passam para o lado esquerdo e direito  -->
        <div id="BolinhasDoCarrossel">
          <div class="BolasCarrossel">
            <!-- Bolinha de número 1 que está sendo usada na parte inferior do quadrado-->
            <div v-if="Bcarro1" class="BolasCarrosselIluminada"></div>
          </div>
          <div class="BolasCarrossel">
            <!-- Bolinha de número 2 que está sendo usada na parte inferior do quadrado-->
            <div v-if="Bcarro2" class="BolasCarrosselIluminada"></div>
          </div>
          <div class="BolasCarrossel">
            <!-- Bolinha de número 3 que está sendo usada na parte inferior do quadrado-->
            <div v-if="Bcarro3" class="BolasCarrosselIluminada"></div>
          </div>
          <div class="BolasCarrossel">
            <!-- Bolinha de número 4 que está sendo usada na parte inferior do quadrado-->
            <div v-if="Bcarro4" class="BolasCarrosselIluminada"></div>
          </div>
          <div class="BolasCarrossel">
            <!-- Bolinha de número 5 que está sendo usada na parte inferior do quadrado-->
            <div v-if="Bcarro5" class="BolasCarrosselIluminada"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="parte_Esquerda">
      <!-- Título -->
      <h1 id="titulo">Sobre Nós</h1>
      <!-- Descrição -->
      <p id="descricao">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
        nesciunt, iusto suscipit modi optio molestias vero perferendis itaque
        illum similique voluptas porro vel labore totam id placeat quidem a
        earum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus facilis adipisci pariatur deserunt nulla illo itaque! Ipsum
        veritatis aspernatur ad delectus iusto assumenda et ea dignissimos
        obcaecati quod, id repudiandae. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Commodi, reiciendis eius aliquid numquam ab ea, velit
        pariatur.
      </p>
    </div>
  </div>
</template>

<script>
export default {
    name: "parteSobreNos",
    data() {
        return {
            SetaEsquerda: '/img/SetaEsquerda.svg',
            SetaDireita: '/img/SetaDireita.svg',
            cont: 0,
            ImgAtt: '/img/imagen4.png',
            imagen4: "/img/imagen4.png",
            Bcarro1: true,
            Bcarro2: false,
            Bcarro3: false,
            Bcarro4: false,
            Bcarro5: false,
            Carrossel2: '/img/Carrossel2.svg',
            Carrossel3: '/img/Carrossel3.svg',
            Carrossel4: '/img/Carrossel4.svg',
            Carrossel5: '/img/Carrossel5.svg'
        };
    },
    methods: {
        TrocaDeImgs(){
            if(this.cont == 0){
                this.ImgAtt = this.imagen4;
                this.Bcarro1 = true;

                this.Bcarro5 = false;
                this.Bcarro2 = false;  

            } else if (this.cont == 1){
                this.ImgAtt = this.Carrossel2;
                this.Bcarro2 = true;

                this.Bcarro1 = false;
                this.Bcarro3 = false;

            } else if (this.cont == 2){
                this.ImgAtt = this.Carrossel3;
                this.Bcarro3 = true;

                this.Bcarro2 = false;
                this.Bcarro4 = false;

            } else if (this.cont == 3){
                this.ImgAtt = this.Carrossel4;
                this.Bcarro4 = true;

                this.Bcarro3 = false;
                this.Bcarro5 = false;
            } else if (this.cont == 4){
                this.ImgAtt = this.Carrossel5;
                this.Bcarro5 = true;

                this.Bcarro1 = false;
                this.Bcarro4 = false;
            }
        },
        TrocarEsquerda(){
            if(this.cont == 0){
                this.cont = 4;
            } else {
                this.cont--;
            }
            this.TrocaDeImgs();
        },
        TrocarDireita(){
            if(this.cont == 4){
                this.cont = 0;
            } else {
                this.cont++;
            }
            this.TrocaDeImgs();
        }
    },  
};
</script>

<style scoped>
#content {
  display: flex;
  color: rgba(46, 74, 125, 0.8);
  padding-top: 5%;
  padding-bottom: 5%;
  background-image: url("/img/Bola.png");
  background-repeat: no-repeat;
  background-position: top;
  background-position-y: -40vh;
}
.parte_Direita {
  display: flex;
  width: 50vw;
  height: 65vh;
  padding-left: 1%;
  background-color: transparent;
}
#imagen7 {
  width: 75%;
  height: 90%;
  margin: 3% 0 0 18%;
}
.parte_Esquerda {
  width: 50%;
  height: 65vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#titulo {
    margin-top: 5%;
    font-weight: 800;
    font-size: 2em;

}
#descricao {
  width: 92%;
  font-size: 20px;
  line-height: 28px;
  text-align: justify;
  margin-top: 5%;
}

.LandingBotoesImg {
  max-width: 4vw;
}

.LandingBotoes {
  border: none;
  background: none;
  align-self: center;
  align-items: center;
}

#BolinhasDoCarrossel {
  display: flex;
  align-items: center;

  padding: 0px 1vw 0px 1vw;
  border-radius: 1rem;
  background-color: #f2f2f2;
}

.BolasCarrossel {
  border-radius: 50%;
  display: inline-block;

  height: 2.5vh;
  width: 1.3vw;
  margin-right: 0.3vw;

  background-color: #c4c4c4;
}
.BolasCarrosselIluminada {
  border-radius: 50%;
  margin-left: 0.15vw;
  margin-top: 0.1vh;

  height: 2vh;
  width: 0.9vw;
  margin-right: 0.3vw;

  background-color: #ffd666;
}
</style>
