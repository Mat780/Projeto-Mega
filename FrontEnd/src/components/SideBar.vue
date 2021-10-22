<template>
  <div id="sidebar">
    <div id="quadrado1">
      <!-- Imagem pato -->
      <img :src="pato" class="pato" />
    </div>
    <div>
      <div class="btn adm" @click="voltarAdm" v-if="adm">
        <!-- Importando icon -->
        <i class="fas fa-address-card"></i>
      </div>
      <div class="btn addPaciente" @click="$emit('aparecer')" v-if="addPaciente">
        <!-- Importando icon -->
        <i class="fas fa-user-plus"></i>
      </div>
      <div class="btn pacienteEstorado" @click="irListarPaciente()">
        <!-- importando icon -->
        <i class="fas fa-user-injured"></i>
      </div>
    </div>

    <div class="btn">
      <!-- Imagem do logout -->
      <img :src="logout" class="img" @click="ChangeLogin" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      pato: "/img/DuckHealth.png",
      logout: "/img/logout.png",
    };
  },

  props: {
    adm: Boolean,
    addPaciente: Boolean
  },

  methods: {
    ChangeLogin() {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      this.$router.push({ path: "/Login" });
    },
    // Função que executa "voltarAdm()"
    voltarAdm() {
      this.$router.push({ path: "/Login/Adm" });
    },
    irListarPaciente(){
      this.$router.push({ path: "/Login/ListarPacientes" });
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

.img {
  width: 4.2vh;
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
  transition: .4s;
}

.btn:hover {
  background-color: #0d8ea5;
}

.fas {
  font-size: 25px;
}
</style>
