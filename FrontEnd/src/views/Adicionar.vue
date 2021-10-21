<template>
  <div>
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
    <CadastrarPaciente />
  </div>
</template>

<script>
import CadastrarMedico from "../components/Adm/CadastrarMedico.vue";
import CadastrarPaciente from "../components/Adm/CadastrarPaciente.vue";
import EditarMedico from "../components/Adm/EditarMedico.vue";
import EditarPaciente from "../components/Adm/EditarPaciente.vue";

export default {
  name: "Adicionar",
  components: {
    CadastrarMedico,
    CadastrarPaciente,
    EditarMedico,
    EditarPaciente,
  },
};
</script>
