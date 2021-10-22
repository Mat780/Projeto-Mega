<template>
  <div id="BannerHomeDiv">
    <section class="BannerHomeSection">
      <div id="BannerHomeTextDiv">
        <!-- Título -->
        <h1>Duck Health</h1>
        <!-- Descrição -->
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia
          euismod imperdiet. Pellentesque vel ultricies ante. lacinia euismod
          imperdiet. ultricies ante.
        </p>
        <!-- Botão ir para login -->
        <button id="BannerHomeButton" @click="ChangeLogin">
          <section class="BannerHomeSection">
            <!-- Imagem dentro do botão -->
            <img :src="buttonImg" id="BannerHomeImgButton" />
            <div id="BannerHomeButtonText">Acessar Laudos</div>
          </section>
        </button>
      </div>
      <div id="BannerHomeImgDiv">
        <!-- Imagem do banner
           -->
        <img :src="banner" id="BannerHomeImgBg" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "BannerHome",
  data() {
    return {
      // Nome das imagens que estão sendo utilizadas
      banner: "/img/bg-bannerAlt.png",
      buttonImg: "/img/LaudoImg.png",
    };
  },

  methods: {
    //   Função para mandar o usuário para a página de login
    ChangeLogin() {
      this.$router.push({ path: "@/Login" });
    },
  },
};
</script>

<style scoped>
div {
  margin: 0;
  padding: 0;
}

#BannerHomeDiv {
  background: #15c3d6;
  box-sizing: border-box;
  border-radius: 0px 0px 0px 150px;
}

.BannerHomeSection {
  display: grid;
  grid-template-columns: auto auto;
}

#BannerHomeImgDiv {
  text-align: right;
  padding-top: 30px;
}

#BannerHomeImgBg {
  max-width: 50vw;
  height: auto;
}

#BannerHomeImgButton {
  height: 1.2em;
  align-self: center;
  margin-left: 0.5em;
  margin-right: 0.5em;
}

#BannerHomeButton {
  margin-top: 125px;
  cursor: pointer;
}

#BannerHomeButtonText {
  text-align: center;
  padding-top: 0.1em;
  padding-right: 0.5em;

  color: #ffffff;
}

#BannerHomeTextDiv {
  margin: 90px 90px 142px 90px;
  text-align: center;
}

h1 {
  margin: 0 0 0 45px;
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 3rem;
  line-height: 87px;
  text-align: left;

  color: #ffd666;
}

p {
  margin: 0 0 0 45px;
  max-width: 20rem;
  color: #ffffff;

  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 33px;
  text-align: justify;
}

button {
  height: 12%;
  background: #2e4a7d;
  border-radius: 1.2rem;
  border: none;
  font-size: 3ex;
  padding: 0 5% 0 3%;
  color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1.5px solid #2e4a7d;
  transition: 0.5s ease all;
}

button:hover {
  color: #2e4a7d;
  background-color: #ffd666;
  border: 1.5px solid #fff;
}
</style>
