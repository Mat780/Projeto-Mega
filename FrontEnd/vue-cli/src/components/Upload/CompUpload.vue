<template>
  <div class="conteiner">
    <div class="contentCima">
      <div class="pesquisar">
        <button class="btnPesquisar">
          <img :src="pesquisar" class="imgPesquisar" />
        </button>
        <input type="text" class="inputPesquisar" placeholder="Pesquisar" />
      </div>
      <div class="personaMedico">
        <div class="TextPersona">
          <span class="olaMedido">Olá, Dr. Hans Chucrute</span>
          <span class="medico">Médico</span>
        </div>
        <img :src="imagem5" class="imagem5" />
      </div>
    </div>
    <hr class="linha" />
    <div class="contentEmbaixo">
      <div class="lista Llaudos">
        <div class="listaEmcima EmcimaLista">
          <img :src="imagem6" class="imagem6" />
          <span class="contentEmbaixoText">Laudos de Elliot Alderson</span>
        </div>
        <hr class="contentEmbaixoLinha" />
        <div class="Laudos">
          <laudo v-for="l in laudos.slice().reverse()" :key="l.id" @remove="removeLista" :laudo="l" />
        </div>
      </div>
      <div class="lista upload">
        <div class="listaEmcima EmcimaUpload">
          <span class="contentEmbaixoText">Carregar Novo Laudo</span>
        </div>
        <hr class="contentEmbaixoLinha" />
        <form @submit.prevent="addLaudo(laudo)" class="formulario">
          <div class="dragInDrop">
            <img :src="imagem7" class="imagem7" />
            <span>Arraste aqui</span>
            <span>ou</span>
            <label class="btn btnFile">
              <input type="File" class="File" />
              Escolha um Arquivo
            </label>
          </div>
          <div class="input inputNomeLaudo">
            <span>Nome do Laudo:</span>
            <input
              type="text"
              v-model="laudo.description"
              class="filhoInput NomeLaudo"
              placeholder="Digite o nome do laudo"
              required
            />
          </div>
          <div class="inputBtn">
            <div class="input inputData">
              <span>Data:</span>
              <input
                type="date"
                v-model="laudo.description2"
                class="filhoInput date"
                required
              />
            </div>
            <button class="btn btnEnviar">Enviar Laudo</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import laudo from "../listas/laudo.vue";
import Vue from "vue";

export default {
  name: "CompUpload",
  components: {
    laudo,
  },
  data() {
    return {
      imagem5: "/img/imagem5.png",
      imagem6: "/img/imagem6.png",
      imagem7: "/img/imagem7.png",
      pesquisar: "../img/pesquisar.png",
      laudos: [],
      laudo: { checked: false },
    };
  },
  methods: {
    addLaudo(laudo) {
      laudo.id = Date.now();
      this.laudos.push(laudo);
      this.laudo = { checked: false };
    },
    removeLista(laudo) {
      const index = this.laudos.findIndex(item => item.id === laudo.id);
      if (index > -1) {
        this.laudos.splice(index, 1);
      }
    }
  },
};
</script>

<style scoped>
.conteiner {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contentCima {
  width: 90%;
  height: 12%;
  display: flex;
  justify-content: space-between;
}

.pesquisar {
  width: 50%;
  height: 60%;
  background-color: rgb(238, 236, 236);
  display: flex;
  align-items: center;
  padding-left: 2%;
  margin-top: 1.5%;
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
  display: flex;
  justify-content: space-between;
  padding: 1% 0 0 0;
}

.TextPersona {
  display: flex;
  flex-direction: column;
  position: relative;
  left: 5%;
}

.medico {
  font-weight: 700;
  color: rgba(46, 74, 125, 0.5);
}

.imagem5 {
  position: relative;
  bottom: 10%;
}

.olaMedido {
  font-size: 17px;
  font-weight: 900;
  margin-top: 8%;
}

.linha {
  width: 90%;
  border: 1px solid #2e4a7d;
  background-color: #2e4a7d;
}

.contentEmbaixo {
  width: 90%;
  height: 88%;
  display: flex;
  justify-content: space-between;
  padding-top: 5%;
}

.lista {
  width: 47%;
  height: 90%;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Laudos {
  width: 84%;
  height: 76%;
  margin-top: 4%;

  overflow-y: scroll;
}

.listaEmcima {
  height: 17%;
  padding-left: 5%;
  display: flex;
  align-items: center;
}

.EmcimaLista {
  width: 95%;
}

.EmcimaUpload {
  display: flex;
  justify-content: center;
}

.imagem6 {
  padding-right: 3%;
}

.contentEmbaixoText {
  font-size: 23px;
  font-weight: 800;
}

.contentEmbaixoLinha {
  width: 90%;
  border: 1px solid #2e4a7d;
  background-color: #2e4a7d;
}

.formulario {
  width: 90%;
  height: 75%;
  font-size: 18px;
  margin-top: 3%;
}

.dragInDrop {
  width: 99.5%;
  height: 40%;
  border: 2px dashed #2e4a7d;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3%;
  background-color: rgba(245, 245, 245, 1);
}

.imagem7 {
  width: 7%;
  padding-bottom: 2%;
}

.File {
  display: none;
}

.btn {
  width: 40%;
  height: 25%;
  border-radius: 8px;
  font-size: 18px;
  background-color: #2e4a7d;
  color: #fff;
  cursor: pointer;
  transition: 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn:hover {
  background-color: #ffd666;
  color: #2e4a7d;
}

.input {
  width: 97%;
  background-color: rgba(245, 245, 245, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 3%;
}

.inputNomeLaudo {
  height: 25%;
  border-radius: 8px 8px 8px 0;
  margin-top: 4%;
}

.filhoInput {
  width: 90%;
  height: 40%;
  margin-top: 1%;
  border: none;
  border-radius: 8px;
  padding-left: 3%;
  color: #2e4a7d;
  font-size: 16px;
}

.inputBtn {
  width: 100%;
  height: 24%;
  display: flex;
}

.inputData {
  width: 50%;
  height: 100%;
  border-radius: 0 0 8px 8px;
}

.btnEnviar {
  height: 55%;
  position: relative;
  top: 17%;
  left: 7%;
}
</style>
