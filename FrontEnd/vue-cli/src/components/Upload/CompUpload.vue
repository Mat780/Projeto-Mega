<template>
  <div class="conteiner">
    <div class="contentCima">
      <div class="pesquisar">
        <!-- Botão que realiza as pesquisas dentro dos laudos -->
        <button class="btnPesquisar">
          <!-- Nome da imagem que está sendo utilizada (pesquisar) -->
          <img :src="pesquisar" class="imgPesquisar" />
        </button>
        <!-- Área que pode ser utilizada para pesquisar algum laudo -->
        <input type="text" class="inputPesquisar" placeholder="Pesquisar" />
      </div>
      <div class="personaMedico">
        <div class="TextPersona">
          <!-- Nome do usuário (MENSAGEM CRUA) -->
          <span class="olaMedido">Olá, Dr. Hans Chucrute</span>
          <!-- Nome do usuário (MENSAGEM CRUA) -->
          <span class="medico">Médico</span>
        </div>
        <!-- Nome da imagem que está sendo utilizada (imagem5) -->
        <img :src="imagem5" class="imagem5" />
      </div>
    </div>
    <!--Linha embaixo do "laudos de Elliot alderson" e "Carregar novo laudo" -->
    <hr class="linha" />
    <div class="contentEmbaixo">
      <!-- L-ocal onde irão ficar os laudos criados -->
      <div class="lista Llaudos">
        <div class="listaEmcima EmcimaLista">
          <!-- Nome da imagem que está sendo utilizada (imagem6) -->
          <img :src="imagem6" class="imagem6" />
          <!-- Nome do usuário (MENSAGEM CRUA) -->
          <span class="contentEmbaixoText">Laudos de Elliot Alderson</span>
        </div>
        <!--Linha embaixo do "laudos de Elliot alderson" e "Carregar novo laudo" -->
        <hr class="contentEmbaixoLinha" />
        <!-- Como estão sendo feito os laudos -->
        <div class="Laudos">
          <!-- Especificando o laudo:
			passou L em um contador
			atribuiu uma key para "l"
		-->
          <laudo
            v-for="l in laudos.slice().reverse()"
            :key="l.id"
            @remove="removeLista"
            :laudo="l"
          />
        </div>
      </div>
      <div class="lista upload">
        <div class="listaEmcima EmcimaUpload">
          <!-- Mensagem crua -->
          <span class="contentEmbaixoText">Carregar Novo Laudo</span>
        </div>
        <!--Linha embaixo do "laudos de Elliot alderson" e "Carregar novo laudo" -->
        <hr class="contentEmbaixoLinha" />
        <!-- Adiciona o Laudo  -->
        <form @submit.prevent="addLaudo(laudo)" class="formulario">
          <DropZone @drop.prevent="drop" @change="selectedFile" />
          <span id="NomeDoArquivo" class="file-info"
            >Arquivo: {{ DropzoneFile.name }}</span
          >
          <div class="input inputNomeLaudo">
            <!-- Mensagem crua -->
            <span>Nome do Laudo:</span>
            <!-- Input pra digitar o nome do laudo -->
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
              <!-- Mensagem crua -->
              <span>Data:</span>
              <!-- Local onde recebe a data -->
              <input
                type="date"
                v-model="laudo.description2"
                class="filhoInput date"
                required
              />
            </div>
            <!-- Botão de Enviar o laudo -->
            <button class="btn btnEnviar">Enviar Laudo</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// Importa "laudo", "DropZone" e "ref"
import laudo from "../listas/laudo.vue";
import DropZone from "./DropZone.vue";
import { ref } from "vue";

export default {
  name: "CompUpload",

  components: {
    laudo,
    DropZone,
  },

  data() {
    return {
      // Nome das imagens que estão sendo usdas no código.
      imagem5: "/img/imagem5.png",
      imagem6: "/img/imagem6.png",
      imagem7: "/img/imagem7.png",
      pesquisar: "../img/pesquisar.png",
      // Lista onde estão sendo armazenados os laudos.
      laudos: [],
      laudo: { checked: false },
    };
  },

  methods: {
    // Função que adiciona o ludo a lista.
    addLaudo(laudo) {
      // gera time stant e seta esse time stant no id.
      laudo.id = Date.now();
      this.laudos.push(laudo);
      this.laudo = { checked: false };
    },

    // Função que remove a lista.
    removeLista(laudo) {
      const index = this.laudos.findIndex((item) => item.id === laudo.id);
      if (index > -1) {
        this.laudos.splice(index, 1);
      }
    },
  },

  // Quando da o drop, ele pega o valor que está sendo dropado.
  setup() {
    let DropzoneFile = ref("");

    const drop = (e) => {
      DropzoneFile.value = e.dataTransfer.files[0];
    };
    // pega o arquivo que foi dropado e coloca o nome dele e tipo
    const selectedFile = () => {
      DropzoneFile.value = document.querySelector(".DropzoneFile").files[0];
    };

    return { DropzoneFile, drop, selectedFile };
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
  margin-top: 2%;
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

#NomeDoArquivo {
  font-size: 0.85em;
}
</style>
