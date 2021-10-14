<template>
  <div class="conteiner">
    <head>
      <link
        rel="stylesheet"
        type="text/css"
        href="//fonts.googleapis.com/css?family=Nunito"
      />
    </head>
    <div class="content">
      <SideBar />
      <upload />
    </div>
  </div>
</template>

<script>
import SideBar from "../components/sideBar/SideBar.vue";
import upload from "../components/Upload/upload.vue";

export default {
  name: "ListaLaudos",
  components: {
    SideBar,
    upload,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content{
  width: 100vw;
  height: 100vh;
  display: flex;
  color: #2e4a7d;
  font-family: "Nunito";
  background-color: rgba(235, 242, 245, 1);
}
</style>

