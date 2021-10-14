<template>
  <div class="conteiner">
    <div class="content content1">
      <div class=".identificacao identificacao">
        <img :src="imagem6" class="imagems imagem8" />
        <h2 class="titulo">Lista de Pacientes</h2>
        <button class="btn btnPacientes">
          <img :src="adicionar" class="imgAdd" />
        </button>
      </div>
      <hr class="linha" />
      <div class="listas">
        <!-- add v-for aqui -->
        <div class="listaFilhas">
          <div class="detalheAzulFilha"></div>
          <div class="textos"></div>
          <div class="btns">
            <button class="btn btn2">
              <img :src="editar" class="btn2Editar" />
            </button>
            <button class="btn btn3">
              <img :src="excluir" class="btn3Excluir" />
            </button>
          </div>
        </div>
      </div>
      <!-- listas -->
    </div>
    <!-- content1 -->
    <div class="content content2">
      <div class="identificacao identificacao2">
        <img :src="imagem5" class="imagems imagem5" />
        <h2 class="titulo tituloM">Lista de Médicos</h2>
        <button class="btn btnMedicos">
          <img :src="adicionar" class="imgAdd" />
        </button>
      </div>
      <hr class="linha" />
      <div class="listas">
        <!-- add v-for aqui -->
        <div class="listaFilhas">
          <div class="detalheAzulFilha"></div>
          <div class="textos"></div>
          <div class="btns">
            <button class="btn btn2">
              <img :src="editar" class="btn2Editar" />
            </button>
            <button class="btn btn3">
              <img :src="excluir" class="btn3Excluir" />
            </button>
          </div>
        </div>
      </div>
      <!-- listas -->
    </div>
    <!-- content2 -->
  </div>
  <!-- conteiner -->
</template>

<script>
export default {
  name: "administracao",
  data() {
    return {
      imagem5: "/img/imagem5.png",
      imagem6: "/img/imagem6.png",
      adicionar: "/img/adicionar.png",
      excluir: "img/excluir.png",
      editar: "img/LaudoImg.png",
    };
  },
};
</script>

<style scoped>
.conteiner {
  width: 93%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(235, 242, 245, 1);
}

.content {
  width: 42%;
  height: 85%;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.identificacao {
  width: 92%;
  display: flex;
  justify-content: space-between;
  padding-top: 3%;
  padding-bottom: 2%;
}
.identificacao2 {
  padding-bottom: 2.4%;
}

.imagems {
  width: 14%;
  height: 100%;
}

.titulo {
  font-size: 28px;
  margin-top: 3%;
  position: relative;
  right: 18%;
}

.tituloM {
  right: 19.3%;
}

.btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-top: 3.5%;
  border: none;
  background-color: #2e4a7d;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 1s;
}

.btn:hover {
  border: 1px solid #fff;
  background-color: #ffd666;
}

.imgAdd {
  width: 50%;
}

.linha {
  width: 91%;
  border: 1.0px solid #2e4a7d;
  background-color: #2e4a7d;
}

.listas {
  width: 91%;
  height: 78%;
  margin-top: 3%;
  overflow-y: scroll;
}

.listaFilhas {
  width: 98%;
  height: 15%;
  border-radius: 8px;
  background-image: linear-gradient(to top, #ffd66680, #ffd666);
  display: flex;
}

.detalheAzulFilha {
  width: 3%;
  height: 100%;
  border-radius: 8px 0 0 8px;
  background-color: #2e4a7d;
}

.textos {
  width: 70%;
  height: 100%;
}

.btns {
  width: 14%;
  display: flex;
  justify-content: space-between;
  padding: 4% 0 0 8%;
}

.btn2Editar {
  width: 65%;
}

.btn3Excluir {
  width: 50%;
}
</style>
