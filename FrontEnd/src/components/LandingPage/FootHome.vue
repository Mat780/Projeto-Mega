<template>
  <footer id="Foot">
      <!-- Imagem do pato -->
    <img :src="pato" />

    <span id="frase-rodapé">
        <!-- Título -->
      <h2>Duck Health</h2>
    </span>
  </footer>
</template>

<script>
export default {
  name: "FootHome",
  data() {
    return {
        // Nome das imagens que estão sendo utilizadas
      pato: "/img/DuckHealth.svg",
    };
  },
};
</script>
