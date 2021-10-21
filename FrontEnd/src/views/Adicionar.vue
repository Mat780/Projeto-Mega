<template>
  <div>
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