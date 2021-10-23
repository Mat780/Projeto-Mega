<template>
  <div class="conteiner">
    <div class="contentCima">
      <div class="pesquisar">
        <button class="btnPesquisar">
          <!-- Imagem de pesquisa -->
          <img :src="pesquisar" class="imgPesquisar" />
        </button>
        <!-- Local para pesquisar -->
        <input type="text" class="inputPesquisar" placeholder="Pesquisar" />
      </div>
      <div class="personaMedico">
        <div class="TextPersona">
          <span class="olaMedido">Olá, Dr. {{name}}</span>
          <span class="medico">Médico</span>
        </div>
        <!-- imagem que está sendo utilizada no código -->
        <img :src="imagem5" class="imagem5" />
      </div>
    </div>
    <hr class="linha" />
    <div class="contentEmbaixo">
      <div class="lista Llaudos">
        <div class="listaEmcima EmcimaLista">
          <!-- imagem que está sendo utilizada no código -->
          <img :src="imagem6" class="imagem6" />
          <!-- Mensagem crua -->
          <span class="contentEmbaixoText">Laudos de {{ nomePaciente }}</span>
        </div>
        <!-- Linha divisória -->
        <hr class="contentEmbaixoLinha" />
        <div class="Laudos">
          <Laudo
            v-for="l in laudos.slice()"
            :key="l.idPaciente"
            @remove="removeLista"
            :laudo="l"
            :name="nomeMedico"
            :file="DropzoneFile.value"
          />
        </div>
      </div>
      <div class="lista upload">
        <div class="listaEmcima EmcimaUpload">
          <!-- Mensagem crua -->
          <span class="contentEmbaixoText">Carregar Novo Laudo</span>
        </div>
        <!-- Linha divisória -->
        <hr class="contentEmbaixoLinha" />
        <div class="formulario">
          <DropZone @drop.prevent="drop" @change="selectedFile()" />
          <span id="NomeDoArquivo" class="file-info"
            >Arquivo: {{ DropzoneFile.name }}</span
          >
          <div class="inputzinho inputNomeLaudo">
            <!-- Mensagem crua -->
            <span>Nome do Laudo:</span>
            <!-- Digitar o nome do laudo -->
            <input
              type="text"
              v-model="laudo.description"
              class="filhozinhoInput NomeLaudo"
              placeholder="Digite o nome do laudo"
              required
            />
          </div>
          <div class="inputBtn">
            <div class="inputzinho inputData">
              <!-- Mensagem crua -->
              <span>Data:</span>
              <!-- Colocar a data -->
              <input
                type="date"
                v-model="laudo.description2"
                class="filhozinhoInput date"
                required
              />
            </div>
            <!-- Botão de enviar os laudos -->
            <button class="btn btnEnviar" @click.prevent="addLaudo(laudo)">Enviar Laudo</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Laudo from "../listas/laudo.vue";
import DropZone from "./DropZone.vue";
import { ref } from "vue";
import axios from "axios";

export default {
  name: "CompUpload",

  data() {
    return {
      // Nome das imagens
      imagem5: "/img/imagem5.png",
      imagem6: "/img/imagem6.png",
      imagem7: "/img/imagem7.png",
      pesquisar: "../img/pesquisar.png",
      // Lista utilizada
      laudos: [],
      laudo: { checked: false },
      nomeMedico: "",
      nomePaciente: "",
    };
  },

  components: {
    Laudo,
    DropZone,
  },

  methods: {
    // Adiciona laudos
    addLaudo(laudo) {
      laudo.data = Date.now();
      this.laudos.push(laudo);
      this.laudo = { checked: false };

      let date_ob = new Date(Date.now);
      let date = date_ob.getDate();
      let month = date_ob.getMonth() + 1;
      let year = date_ob.getFullYear();
      date_ob = year + "-" + month + "-" + date;

      const formData = new FormData();
      formData.append('file', DropzoneFile.value);
      console.log(formData);
      
      // axios.post("http://localhost:8080/upload", {
      //   file: DropzoneFile.value,
      //   name: this.laudo.description,
      //   data: this.laudo.description2,
      //   date: date_ob
      // })

    },
    
    // remove o laudo
    removeLista(id) {
      axios.delete("http://localhost:8080/laudo/" + id);
      this.$router.go();
    },

    pegaNome(){
      this.nomeMedico = this.name;
      this.nomePaciente = this.namePacient;
    },

    pullLaudos(){
      let dataa = localStorage.getItem("idPaciente");
      dataa = parseInt(dataa);
      
      axios.post("http://localhost:8080/laudos", {
        idPaciente: dataa
      }).then(data => {
        if (data.data.length > 0) {
          data.data.forEach((value, index) => {
            let laudo = {checked: false}

            value.data = value.data.split("T");

            laudo.idLaudo = value.idLaudos;
            laudo.description2 = value.data[0];
            laudo.description = value.nameLaudo;
            

            this.laudos[index] = laudo;
          })
        }

      }).catch(error => {
        console.log(error);
      })
    }
  },

  props: {
    name: String,
    namePacient: String,
  },

  beforeMount() {
    this.pegaNome();
    this.pullLaudos();
  },

  setup() {
    let DropzoneFile = ref("");

    const drop = (e) => {
      DropzoneFile.value = e.dataTransfer.files[0];
    };

    const selectedFile = () => {
      DropzoneFile.value = document.querySelector(".DropzoneFile").files[0];
      console.log(DropzoneFile.value);
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
  justify-content: flex-end;
  margin-top: 1%;
}

.TextPersona {
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-right: 5%;
}

.imagem5{
  justify-content: end;
}

.medico {
  font-weight: 700;
  color: rgba(46, 74, 125, 0.5);
}

.olaMedido {
  font-size: 17px;
  font-weight: 900;
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
  height: 88%;
  display: flex;
  justify-content: space-between;
  padding-top: 1%;
}

.lista {
  width: 47%;
  height: 95%;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Laudos {
  width: 84%;
  height: 75%;
  margin-top: 1%;

  overflow-y: scroll;
}

.listaEmcima {
  height: 12%;
  padding-left: 2%;
  display: flex;
  align-items: center;
  padding-top: 4%;
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
  font-weight: 600;
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
  margin-top: 1%;
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
  font-weight: 500;
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

.inputzinho {
  width: 100%;
  background-color: rgba(245, 245, 245, 1);
  display: flex;
  flex-direction: column;
  padding-left: 2%;
}

.inputNomeLaudo {
  height: 22%;
  border-radius: 8px 8px 8px 0;
  margin-top: 2%;
}

.filhozinhoInput {
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
  height: 85%;
  border-radius: 0 0 8px 8px;
}

.btnEnviar {
  height: 55%;
  position: relative;
  top: 20%;
  left: 8%;
  border: none;
}

#NomeDoArquivo {
  font-size: 0.85em;
  position: relative;
  top: 1%;
}
</style>
