<template>
  <!-- Parte que vai ficar na parte inferior da LaddingPage -->
  <footer id="Foot">
    <!-- Imagem utilizada do pato "Health" -->
    <img :src="pato" />
    <!-- Onde vai aparecer a frase do rodapé  -->
    <span id="frase-rodapé">
      <!-- Título com H2  -->
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
