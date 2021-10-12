<template>
  <div id="sidebar">
    <div id="quadrado1">
      <img :src="pato" id="pato" />
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
      pato: "/img/DuckHealth_SVG.svg",
      logout: "/img/logout.png",
    };
  },
  methods: {
    ChangeLogin() {
      this.$router.push({ path: "@/Login" });
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
  height: 10%;
  width: 70%;
  border-radius: 8px;
  display: flex;
  margin-top: 20%;
}
#quadrado2{
     width: 50%;
     height: 7%;
     background-color: #12AFCB;
     border-radius: 16px;
     margin-bottom: 20%;
}



#logout {
  padding-top: 28%;
  margin-left: 33%;
  cursor: pointer;
}
</style>
