<template>
  <div class="listaPaciente">
    <!-- imagem que está sendo utilizada no código -->
    <img :src="imagem8_2" class="imagem8_2" />
  </div>
</template>

<script>
export default {
  props: {
    pacientes: { type: Object, required: true },
  },
  data() {
    return {
      // Nome da imagem que está sendo utilizada
      imagem8_2: "../img/imagem8_2.svg",
    };
  },
};
</script>

<style scoped>
.listaPaciente {
  width: 27.9%;
  height: 46%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/img/RectanglePaciente.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: #fff;
  cursor: pointer;
}

.imagem8_2 {
  position: relative;
  top: 25%;
}
</style>
