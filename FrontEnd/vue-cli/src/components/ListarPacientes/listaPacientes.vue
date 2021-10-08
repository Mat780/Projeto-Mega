<template>
  <div class="contenier">
    <div class="contentCima">
        <div class="MeusPacientes">
            <label class="MeusFiltros">Meus Filtros:</label>
            <button class="btn"></button>
        </div>
        <div class="pesquisar"></div>
        <div class="personaMedico"></div>
    </div>
    <hr class="linha" />
    <div class="contentEmbaixo"></div>
  </div>
</template>

<script>
export default {
  name: "listaPacientes",
};
</script>

<style scoped>
.contenier {
  width: 93%;
  height: 100%;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contentCima {
  width: 90%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
}

.MeusPacientes{
    width: 15%;
    border: 1px solid gold;
}

.pesquisar{
    width: 55%;
    border: 1px solid firebrick;
}

.personaMedico{
    width: 25%;
    border: 1px solid;
}

.linha {
  width: 90%;
  border: 1.0px solid #2e4a7d;
  background-color: #2e4a7d;
}

.contentEmbaixo {
  width: 90%;
  height: 85%;
  border: 1px solid red;
}
</style>
