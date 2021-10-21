<template>
  <div id="sidebar">
    <div id="quadrado1">
      <!-- Nome da imagem do patinho -->
      <img :src="pato" id="pato" />
    </div>

    <div id="quadrado2">
      <!-- imagem que vai servir de click para ir p/ página de login -->
      <img :src="logout" id="logout" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      // Nome das imagens que estão sendo utilizadas no código
      pato: "/img/DuckHealth_SVG.svg",
      logout: "/img/logout.png",
    };
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

#logout {
  padding-bottom: 50%;
}
</style>
