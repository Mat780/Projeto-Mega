<template>
  <head>
    <link
      rel="stylesheet"
      type="text/css"
      href="//fonts.googleapis.com/css?family=Nunito"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
    />
  </head>
  <!-- <button id="show-modal" @click="showModal = true">Show Modal</button>
  <modal v-if="showModal" @close="showModal = false"/>  -->
  <EditarPaciente />
</template>

<script>
import modal from "../components/modal.vue";
import EditarPaciente from "../components/Adm/EditarPaciente.vue";
export default {
  components: {
    modal,
    EditarPaciente,
  },
  //   data() {
  // //     return {
  // //       showModal: false,
  // //     };

  //   },
};
</script>

<style></style>
