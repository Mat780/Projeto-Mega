<template>
  <div id="sidebar">
    <div id="quadrado1">
      <img :src="pato" class="pato" />
    </div>
    <div>
      <div class="btn adm" @click="voltarAdm">
        <i class="fas fa-address-card"></i>
      </div>
      <div class="btn addPaciente" @click="$emit('aparecer')">
        <i class="fas fa-user-plus"></i>
      </div>
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
      this.$router.push({ path: "/Login" });
    },
     voltarAdm() {
      this.$router.push({ path: "/Login/Adm" });
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
  margin-top: 10%;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
}

#quadrado2 {
  width: 3.5vw;
  height: 8vh;
  background-color: #12afcb;
  border-radius: 16px;
  margin-bottom: 20%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
}

img {
  height: 8vh;
}

#logout {
  cursor: pointer;
}

.btn {
  width: 3.5vw;
  height: 8vh;
  background-color: #12afcb;
  border-radius: 16px;
  margin-bottom: 20%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.fas {
  font-size: 25px;
}
</style>
