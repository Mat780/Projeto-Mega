<template>
  <div class="conteiner">
    <div class="content">
      <SideBar />
      <CompUpload />
    </div>
  </div>
</template>

<script>
import SideBar from "../components/Adm/SideBar.vue";
import CompUpload from "../components/Upload/CompUpload.vue"

export default {
  name: "Upload",
  components: {
    SideBar,
    CompUpload,
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
  background-color: rgba(235, 242, 245, 1);
}
</style>

