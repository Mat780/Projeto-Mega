<template>
  <nav>
    <body id="nav" :class="{ sticky: active }">
      <!-- Executa a função "toggleNavClass() "-->
      <header id="nav-container" :class="toggleNavClass()">
        <div class="logo">
          <!-- Imagem do pato -->
          <img :src="pato" alt="" />
        </div>
        <div class="click">
          <!-- Lista que da para clicar e ser direcionado para "Inicio" "Sobre"
            "Exames" "Contato"-->
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
      // Nome das imagens que estão sendo utilizadas
      pato: "/img/DuckHealth.svg",
      active: false,
    };
  },
  methods: {
    //   Deixa fixo o cabeçalho ao dar scroll
    toggleNavClass() {
      if (this.active == false) {
        return "nav";
      } else {
        return "fix-nav";
      }
    },
    // Ao clicar em exames ele será mandado para a parte de "Inicio"
    scrollInicio() {
      const element = document.getElementById("BannerHomeDiv");
      element.scrollIntoView({ behavior: "smooth" });
    },
    // Ao clicar em exames ele será mandado para a parte de "Sobre nós"
    scrollSobre() {
      const element = document.getElementById("content");
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    },
    // Ao clicar em exames ele será mandado para a parte de "Exames"
    scrollExames() {
      const element = document.getElementById("HomeExames");
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    },
    // Ao clicar em exames ele será mandado para a parte de "Contato"
    scrollContato() {
      const element = document.getElementById("Contato");
      element.scrollIntoView({ behavior: "smooth", block: "end" });
    },

    mounted() {
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
  z-index: 1;
}
</style>
