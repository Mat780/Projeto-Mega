<template>
  <nav>
    <body id="nav" :class="{ sticky: active }">
      <header id="nav-container" :class="toggleNavClass()">
        <div class="logo">
          <img :src="pato" alt="" />
        </div>

        <div class="click">
          <a @click="scrollInicio" class="nomes">Inicio</a>
          <a @click="scrollSobre" class="nomes">Sobre</a>
          <a @click="scrollExames" class="nomes">Exames</a>
          <a @click="scrollContato" class="nomes">Contato</a>
        </div>
      </header>
    </body>
  </nav>
</template>

<script>
export default {
  name: "Cabecalho",
  data() {
    return {
      pato: "/img/DuckHealth.svg",
      active: false,
    };
  },
  methods: {
    //Ao dar scroll na tela, ele acompanha, deixando fixo
    toggleNavClass() {
      if (this.active == false) {
        return "nav";
      } else {
        return "fix-nav";
      }
    },

    // função que irá fazer a página ir para área "Inicio" sem sair da laddingPage
    scrollInicio() {
      const element = document.getElementById("BannerHomeDiv");
      element.scrollIntoView({ behavior: "smooth" });
    },

    // função que irá fazer a página ir para área "Sobre" sem sair da laddingPage
    scrollSobre() {
      const element = document.getElementById("content");
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    },

    // função que irá fazer a página ir para área "Exames" sem sair da laddingPage
    scrollExames() {
      const element = document.getElementById("HomeExames");
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    },

    // função que irá fazer a página ir para área "Contato" sem sair da laddingPage
    scrollContato() {
      const element = document.getElementById("Contato");
      element.scrollIntoView({ behavior: "smooth", block: "end" });
    },

    mounted() {
      // Pega o elemento inteiro da navbar pelo id, se o scroll da tela for maior que o offset da navbar, ele irá ativar a variável true, caso contrário, ira desativa.
      let navBar = document.getElementById("nav");
      if (window.scrollY > navBar.offsetTop) {
        this.active = true;
      } else {
        this.active = false;
      }
    },
  },
};
</script>

<style scoped>

body {
  font-family: Nunito;
  font-size: 28px;
}

header {
  position: relative;
  width: 100%;
  height: 100px;
  background: #15c3d6;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.logo {
    position: relative;
    right: 56%;
    box-sizing: border-box;
    width: 6%;
    height: 80%;
    background-color: #2e4a7d;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
}

.click {
  color: #ffffff;
  margin-right: 9%;
  display: flex;
}

.nomes {
  padding: 0 4%;
  cursor: pointer;
  text-decoration: none;
  color: unset;
}

.nomes:hover {
  color: #2e4a7d;
}

footer > img {
  margin-left: 2%;
}

.nav {
  transition: 100ms;
  padding-top: 10px;
}

.fix-nav {
  transition: 100ms;
  padding-top: 5px;
}

#nav {
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
}
</style>
