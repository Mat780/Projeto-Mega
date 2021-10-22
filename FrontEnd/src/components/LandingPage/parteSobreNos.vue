<template>
  <div id="content">
    <div class="carrosel">
      <ul>
        <li>
          <!-- imagem que está sendo utilizada no código -->
          <img :src="Carrossel" class="img" />
        </li>
        <li>
          <!-- imagem que está sendo utilizada no código -->
          <img :src="Carrossel4" class="img" />
        </li>
        <li>
          <!-- imagem que está sendo utilizada no código -->
          <img :src="Carrossel3" class="img" />
        </li>
        <li>
          <!-- imagem que está sendo utilizada no código -->
          <img :src="Carrossel5" class="img" />
        </li>
      </ul>
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
      //Nome das imagens que estão sendo utilizadas no código -->
      Carrossel: "/img/carrosel.png",
      Carrossel3: "/img/Carrossel3.svg",
      Carrossel4: "/img/Carrossel4.svg",
      Carrossel5: "/img/Carrossel5.svg",
    };
  },
};
</script>

<style scoped>
#content {
  display: flex;
  color: rgba(46, 74, 125, 0.8);
  padding: 5% 0 5% 5%;
  background-image: url("/img/Bola.png");
  background-repeat: no-repeat;
  background-position: top;
  background-position-y: -40vh;
  z-index: 0;
}

.carrosel {
  width: 600px;
  height: 400px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);
}

ul {
  width: 2400px;
  display: flex;
}

li {
  position: relative;
  animation: slide 10s infinite ease-out;
}

@keyframes slide {
  0% {
    left: 0px;
  }
  15% {
    left: 0px;
  }

  25% {
    left: -600px;
  }
  35% {
    left: -600px;
  }

  50% {
    left: -1200px;
  }
  65% {
    left: -1200px;
  }

  80% {
    left: -1800px;
  }
  92% {
    left: -1800px;
  }

  100% {
    left: 0px;
  }
}

img {
  width: 600px;
  height: 400px;
}

.parte_Esquerda {
  width: 50%;
  height: 65vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 3%;
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
