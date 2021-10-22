<template>
  <div class="conteiner">
    <div class="contentEmcima">
      <div class="inputPesquisa">
        <!-- Botão de pesquisar -->
        <button class="btnPesquisar">
          <!-- Imagem de pesquisar -->
          <img :src="pesquisar" class="imgPesquisar" />
        </button>
        <!-- Pesquisar o laudo que deseja -->
        <input type="text" class="Pesquisar" placeholder="Pesquisar" />
      </div>
      <div class="personaPaciente">
        <span class="olPaciente"> Olá, {{name}}</span>
        <img :src="imagem6" class="imagem6" />
      </div>
    </div>
    <!-- Linha divisória -->
    <hr class="linha" />
    <div class="contentEmbaixo">
      <div class="contentEmbaixo2">
        <laudos />
        <laudos />
      </div>
    </div>
  </div>
</template>

<script>
import laudos from "../listas/laudos";

export default {
  name: "listaLaudos",
  components: {
    laudos,
  },
  data() {
    return {
      // Nome das imagens que estão sendo utilizadas no código
      pesquisar: "/img/pesquisar.png",
      imagem6: "/img/imagem6.png",
      name: ""
    };
  },
  methods: {
    pegaNome(){
      let name = localStorage.getItem("name");
      name = name.split(" ");

      let len = name.length - 1;

      if(len > 0){
        name = name[0] + " " + name[len];
      }else{
        name = name[0]
      }

      this.name = name;
    }
  },

  beforeMount(){
    this.pegaNome();
  }
};
</script>

<style scoped>
.conteiner {
  width: 93vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contentEmcima {
  width: 90%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.inputPesquisa {
  width: 60%;
  height: 50%;
  background-color: rgb(238, 236, 236);
  display: flex;
  align-items: center;
  padding-left: 2%;
  margin-top: 1%;
  border-radius: 8px;
  border: 1px solid rgba(211, 226, 229, 1);
}

.Pesquisar {
  width: 80%;
  height: 60%;
  color: #2e4a7d;
  font-size: 17px;
  padding-left: 2%;
  border-radius: 8px;
  border: none;
  margin-left: 2%;
}

.personaPaciente {
  height: 70%;
  display: flex;
  justify-content: space-between;
}

.btnPesquisar {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.olPaciente {
  font-size: 17px;
  font-weight: 900;
  align-self: center;
  padding-right: 1vw;
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
  display: flex;
  justify-content: space-between;
}
</style>
