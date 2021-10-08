<template>
  <head>
    <link
      rel="stylesheet"
      type="text/css"
      href="//fonts.googleapis.com/css?family=Nunito"
    />
  </head>
  <div id="conteinerUpload">
    <SideBar />
    <div id="telaUpload">
      <div id="content1">
        <div id="contentEmcimaLinha">
          <div id="contentPesquisar">
            <img :src="pesquisar" id="imgPesquisar" />
            <form id="formPesquisar">
              <input id="inputPesquisar" type="text" placeholder="Pesquisar" />
            </form>
          </div>
          <div id="logo_nome">
            <div id="titulo">
              <strong id="nomeMedico">Olá, Dr. Hans Chucrute</strong>
              <label id="medico">Médico</label>
            </div>
            <img :src="imagen5" id="imagem5" />
          </div>
        </div>
        <hr id="linha" />
      </div>
      <div id="content2">
        <div id="contentLista">
          <div id="pacienteLista">
            <img :src="imagem8" id="imagem8" />
            <h2 id="laudoPaciente">Laudos de Elliot Alderson</h2>
          </div>
          <hr id="linhaLista" />
          <div id="Laudos">
            <div id="laudo" v-for="l in laudos.slice().reverse()" :key="l.id">
              <div id="parteEsquerda">
                <h4 id="nomeDoLaudo">{{ l.description }}</h4>
                <h5 id="nomeDoMedico">Dr. Hans Chucrute</h5>
              </div>
              <div id="parteDireita">
                <h6 id="DataDoLaudo">{{ l.description2 }}</h6>
              </div>
            </div>
          </div>
        </div>
        <div id="contentUpload">
          <h2 id="carregarLaudo">Carregar Novo Laudo</h2>
          <hr id="linhaUpload" />
          <form @submit.prevent="addLaudo(laudo)" id="formUpload">
            <label id="drap_in_drop">
              <input type="file" id="EscolhaArquivo"/>
              <img :src="imagem7" id="imagem7" />
              <p>Arraste aqui</p>
              <p>ou</p>
              <label id="btnFile"
                ><input type="file" id="EscolhaArquivo"/>Escolha um
                arquivo</label  
              ></label
            >
            <div id="inputNome">
              <label id="nomeLaudo">Nome do laudo:</label>
              <input
                type="text"
                v-model="laudo.description"
                id="Nome"
                placeholder="Digite o nome do laudo"
                required
              />
            </div>
            <div id="inputData">
              <label id="Data">Data:</label>
              <input
                type="date"
                v-model="laudo.description2"
                id="inputDeData"
                required
              />
            </div>
            <button id="Adicionar">Adicionar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/sideBar/SideBar.vue";

export default {
  name: "Upload",
  components: {
    SideBar,
  },
  data() {
    return {
      imagen5: "/img/imagem5.png",
      imagen6: "/img/imagem6.png",
      imagem7: "/img/imagem7.png",
      imagem8: "/img/imagem8.png",
      pesquisar: "/img/pesquisar.png",
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
  },
};
</script>

<style scoped>
#conteinerUpload {
  display: flex;
}

#telaUpload {
  width: 93%;
  height: 100vh;
  font-size: 18px;
  font-family: "Nunito";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(235, 242, 245, 1);
}

#content1 {
  width: 80%;
  height: 18.5%;
  display: flex;
  flex-direction: column;
}

#contentEmcimaLinha {
  justify-content: space-between;
  display: flex;
}

#titulo {
  display: flex;
  flex-direction: column;
}

#formPesquisar {
  width: 83%;
  padding-right: 8.5%;
}

#inputPesquisar {
  width: 100%;
  display: flex;
  padding: 1.6%;
  padding-left: 4.3%;
  border-radius: 5px;
  border: none;
}

#inputPesquisar::placeholder {
  color: rgba(46, 74, 125, 1);
  font-weight: 900;
  font-size: 18px;
}

#contentPesquisar {
  width: 40%;
  height: 76%;
  border: 1px solid #d3e2e5;
  background-color: rgb(235, 235, 235);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#imgPesquisar {
  width: 4.5%;
  padding-left: 2%;
}

#logo_nome {
  width: 21.5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(46, 74, 125);
}

#medico {
  color: rgb(122, 120, 120);
}

#imagem5 {
  width: 22%;
  position: relative;
  bottom: 13%;
}

#linha {
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 1);
  background-color: rgba(0, 0, 0, 1);
}

#content2 {
  width: 80%;
  height: 65%;
  margin-bottom: 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#contentLista {
  width: 46%;
  height: 100%;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#pacienteLista {
  width: 80%;
  height: 15%;
  color: #2e4a7d;
  display: flex;
  align-items: center;
}

#linhaLista {
  width: 85%;
  border: 0.1px solid #2e4a7d;
  background-color: #2e4a7d;
}

#Laudos {
  width: 84%;
  height: 76%;
  margin-top: 4%;

  overflow-y: scroll;
}

#laudo {
  width: 99%;
  height: 20%;
  background-image: linear-gradient(to top, #ffd66680, #ffd666);
  border-radius: 8px;
  margin-bottom: 4%;
  display: flex;
  justify-content: space-between;
}

#parteEsquerda {
  padding-top: 1.8%;
  padding-left: 5%;
}

#parteDireita {
  padding-right: 5%;
}

#nomeDoLaudo {
  color: #2e4a7d;
  font-size: 25px;
}

#nomeDoMedico {
  width: 100%;
  font-size: 13px;
  color: #999898;
}

#DataDoLaudo {
  width: 100%;
  color: #999898;
  padding-top: 55%;
}

#contentUpload {
  width: 46%;
  height: 100%;
  border-radius: 8px;
  background-color: #fff;
  color: #2e4a7d;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#carregarLaudo {
  padding-top: 5%;
}

#linhaUpload {
  width: 75%;
  border: 0.1px solid #2e4a7d;
  background-color: #2e4a7d;
  margin-top: 2%;
}

#drap_in_drop {
  width: 99%;
  height: 50%;
  background-color: #f5f5f5;
  border: 3px dashed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3%;
  margin-top: 4%;
}


#btnFile {
  width: 45%;
  height: 23%;
  border-radius: 5px;
  margin-top: 3%;
  background-color: #2e4a7d;
  cursor: pointer;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;
}

#btnFile:hover {
  background-color: #ffd666;
  color: #2e4a7d;
}

#imagem8 {
  width: 14%;
  padding-right: 3%;
}

#imagem7 {
  width: 8%;
  color: #2e4a7d;
  margin-top: 4%;
  padding-bottom: 1%;
}

#formUpload {
  width: 76%;
  color: #2e4a7d;
  font-size: 20px;
}

#inputNome {
  width: 100%;
  height: 20%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  border-radius: 8px 8px 8px 0;
  margin-top: 5%;
  padding-top: 2%;
}

#nomeLaudo {
  margin-left: 4%;
}

#Nome {
  width: 88.7%;
  height: 40%;
  border-radius: 5px;
  margin-left: 4%;
  margin-top: 2%;
  padding-left: 3%;
}

#Nome::placeholder {
  color: #2e4a7d;
  font-size: 15px;
}

#inputData {
  width: 50%;
  height: 25%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 8px 8px;
}

#Data {
  padding-top: 3%;
  margin-left: 7%;
}

#inputDeData {
  width: 81.5%;
  height: 40%;
  border-radius: 5px;
  margin-left: 7%;
  margin-top: 2%;
  color: #2e4a7d;
  padding-left: 3%;
}

#inputDeData::placeholder {
  padding-left: 3%;
  color: #2e4a7d;
}

#Adicionar {
  width: 45%;
  height: 13%;
  font-family: "Nunito";
  font-size: 20px;
  background-color: #2e4a7d;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  transition: 1s;
  position: relative;
  bottom: 17%;
  left: 55%;
}

#Adicionar:hover {
  background-color: #ffd666;
  color: #2e4a7d;
}

#EscolhaArquivo{
  display: none;
}
</style>
