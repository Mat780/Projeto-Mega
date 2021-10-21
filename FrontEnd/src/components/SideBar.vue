<template>
  <div id="sidebar">
    <div id="quadrado1">
      <img :src="pato" style="height: 4em" />
    </div>

    <div id="quadrado2">
      <img :src="logout" id="logout" @click="ChangeLogin" />
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
  methods: {
    ChangeLogin() {
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
}

img{
  height: 8vh;
}

#logout {
  cursor: pointer;
}
</style>
