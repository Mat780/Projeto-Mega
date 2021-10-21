<template>
  <!-- Parte completa -->
  <div class="contenier">
    <!-- Parte de cima -->
    <div class="contentCima">
      <div class="MeusPacientes">
        <!-- Mensagem crua -->
        <span class="MeusFiltros">Filtrar por:</span>
        <button class="btn">
          <img :src="filtrar" class="imgFiltrar" />
          <!-- Parágrafo -->
          <p class="text">Meus Pacientes</p>
        </button>
      </div>
      <!-- Div de realizar pesquisa -->
      <div class="pesquisar">
        <!-- Mensagem crua -->
        <span class="MeusFiltros">Buscar por:</span>
        <div class="divPesquisar">
          <!-- Botão de pesquisar -->
          <button class="btnPesquisar">
            <!-- Imagem de pesquisa -->
            <img :src="pesquisar" class="imgPesquisar" />
          </button>
          <!-- Parte que recebe a pesquisa -->
          <input type="text" class="inputPesquisar" placeholder="Pesquisar" />
        </div>
      </div>
      <!-- Local onde se encontra a imagem da doutora e seu nome -->
      <div class="personaMedico">
        <!-- text com o nome do médico -->
        <div class="TextPersona">
          <!-- Mensagem crua -->
          <span class="olaMedido">Olá, Dr. Hans Chucrute</span>
          <!-- Mensagem crua -->
          <span class="medico">Médico</span>
        </div>
        <!-- Imagem utilizada com o nome "imagem5" -->
        <img :src="imagem5" class="imagem5" />
      </div>
    </div>
    <!-- Linha divisória -->
    <hr class="linha" />
    <div class="contentEmbaixo">
      <!-- Parte em baixo da linha -->
      <div class="contentEmbaixo2">
        <pacientes />
      </div>
    </div>
  </div>
</template>

<script>
import pacientes from "../listas/pacientes";

export default {
  name: "listaPacientes",
  components: {
    pacientes,
  },
  data() {
    return {
      filtrar: "../img/filtrar.png",
      pesquisar: "../img/pesquisar.png",
      imagem5: "../img/imagem5.png",
    };
  },
};
</script>

<style scoped>
.contenier {
  width: 93%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contentCima {
  width: 90%;
  height: 15%;
  display: flex;
  justify-content: space-between;
}

.MeusPacientes {
  width: 15%;
  padding-top: 0.5%;
}

.MeusFiltros {
  color: rgba(0, 0, 0, 0.5);
  font-size: 18px;
}

.btn {
  width: 80%;
  height: 55%;
  border: none;
  border-radius: 30px;
  background-color: #2e4a7d;
  color: #fff;
  font-size: 18px;
  text-align: center;
  display: flex;
  cursor: pointer;
  margin-top: 2%;
  padding-left: 5%;
}

.text {
  font-size: 0.9em;

  padding-top: 1%;
  padding-left: 12%;
  text-align: left;
}

.imgFiltrar {
  filter: grayscale(245);
  width: 27%;
  align-self: center;
}

.pesquisar {
  width: 55%;
  padding-top: 0.5%;
  display: flex;
  flex-direction: column;
  position: relative;
  right: 5%;
}

.divPesquisar {
  width: 85%;
  height: 50%;
  background-color: rgb(238, 236, 236);
  display: flex;
  align-items: center;
  padding-left: 2%;
  margin-top: 1%;
  border-radius: 8px;
  border: 1px solid rgba(211, 226, 229, 1);
}

.btnPesquisar {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.inputPesquisar {
  width: 80%;
  height: 60%;
  color: #2e4a7d;
  font-size: 17px;
  padding-left: 2%;
  border-radius: 8px;
  border: none;
  margin-left: 2%;
}

.inputPesquisar::placeholder {
  font-size: 17px;
}

.personaMedico {
  width: 20%;
  display: flex;
  justify-content: space-between;
  padding: 1% 0 0 0;
}

.TextPersona {
  margin-right: 2%;
  display: flex;
  flex-direction: column;
  align-self: center;
}

.imagem5 {
  width: 30%;
  height: 85%;
}

.olaMedido {
  font-size: 16px;
  font-weight: 900;
}

.medico {
  font-weight: 700;
  color: rgba(46, 74, 125, 0.5);
}

.linha {
  width: 90%;
  border: 1px solid #2e4a7d;
  background-color: #2e4a7d;
  position: relative;
  bottom: 2%;
}

.contentEmbaixo {
  width: 90%;
  height: 75%;
  overflow-y: scroll;
}

.contentEmbaixo2 {
  width: 99%;
  height: 100%;
}
</style>
