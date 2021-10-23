<template>
  <div class="contenier">
    <div class="contentCima">
      <div class="MeusPacientes">
        <!-- Mensagem crua -->
        <span class="MeusFiltros">Filtrar por:</span>
        <!--Botão para ligar o filtro -->
        <button class="btn" @click="ligarFiltro()">
          <!-- Imagem de filtrar -->
          <img
            :src="filtrar"
            class="imgFiltrar"
            :class="{ imgFiltrarAtivada: ligada }"
          />
          <!-- Parágrafo  -->
          <p class="textPacientes">Meus Pacientes</p>
        </button>
      </div>
      <div class="pesquisar">
        <!-- Mensagem crua -->
        <span class="MeusFiltros">Buscar por:</span>
        <div class="divPesquisar">
          <!-- Botão de pesquisar -->
          <button class="btnPesquisar">
            <!-- Imagem de pesquisar -->
            <img :src="pesquisar" class="imgPesquisar" />
          </button>
          <!-- Pesquisar o paciente -->
          <input type="text" class="inputPesquisar" placeholder="Pesquisar" />
        </div>
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
    <!-- Linha divisória -->
    <hr class="linha" />
    <div class="contentEmbaixo">
      
      <!-- Mudar para upload -->

      <pacientes v-for="p in pac.slice().reverse()"
      :key="p.id"
      :name="p.nome"
      :cpf="p.cpf"
      :idPaciente="p.idPaciente"
      />
    
      
    </div>
    <!--modal para ver de erro-->
    <erro
      :class="{ modal: true, 'is-active': modalErro }"
      @esconder="esconderErro"
    />
  </div>
</template>

<script>
import pacientes from "../listas/pacientes";
import erro from "../modais/erro.vue";
import axios from "axios"

export default {
  name: "listaPacientes",
  components: {
    pacientes,
    erro,
  },
  data() {
    return {
      // Nome das imagens que estão sendo utilizadas no código
      filtrar: "../img/filtrar.png",
      pesquisar: "../img/pesquisar.png",
      imagem5: "../img/imagem5.png",
      modalErro: false,
      ligada: false,
      pac: [],
    };
  },
  methods: {
    // Função que esconde o erro
    esconderErro() {
      this.modalErro = false;
    },
    // Função que liga os filtros
    ligarFiltro() {
      this.ligada = !this.ligada;
    },
    pullPacientes(){
      axios.get("http://localhost:8080/pacientes").then(data => {
        data.data.forEach((value, index) => {
          this.pac[index] = value
        })
        console.log(this.pac[0]);
      })
    }
  },
  props: {
    name: String
  },
  beforeMount(){
    this.pullPacientes();
  }
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

#imprimirPacientes{
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

.textPacientes {
  font-size: 0.9em;
  padding-left: 12%;
  text-align: left;
  align-self: center;
}

.imgFiltrar {
  filter: grayscale(245);
  width: 27%;
  align-self: center;
}

.imgFiltrarAtivada {
  filter: grayscale(0);
}

.imgFiltrarActive {
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
  display: grid;
  grid-row-gap: 3vh;
  grid-template-columns: 22em 22em 22em;
}

</style>
