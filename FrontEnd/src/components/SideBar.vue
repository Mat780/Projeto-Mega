<template>
  <div id="sidebar">
    <div id="quadrado1">
      <!-- Imagem do patinho -->
      <img :src="pato" style="height: 4em" />
    </div>

    <div id="quadrado2">
      <!-- Imagem da portinha que ao clicar vai para função "ChangeLogin()" -->
      <img :src="logout" id="logout" @click="ChangeLogin" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      // Nome das imagens que estão sendo utilizadas
      pato: "/img/DuckHealth.png",
      logout: "/img/logout.png",
    };
  },
  methods: {
    // Função que ao sere ativada ela irá sair da página "Adm" e ir para "Login"
    ChangeLogin() {
      localStorage.removeItem('token');
      this.$router.push({ path: "/Login" });
    },
  },
};
</script>

<style scoped>
#sidebar {
  width: 7%;
  background-color: #15c3d6;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

#quadrado1 {
  background-color: #2e4a7d;
  height: 10vh;
  width: 5vw;
  border-radius: 8px;
  display: flex;
  margin-top: 20%;
}
#quadrado2 {
  width: 3.5vw;
  height: 8vh;
  background-color: #12afcb;
  border-radius: 16px;
  margin-bottom: 20%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.20);
}

img{
  height: 8vh;
}

#logout {
  cursor: pointer;
}
</style>
