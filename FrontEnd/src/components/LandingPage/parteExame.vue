<template>
  <div id="HExames">
    <div class="exames" id="HomeExames">
      <!-- Título -->
      <h1 class="titulo_exame">Exames</h1>
      <div class="listas_row">
        <div class="lista cima">
          <!-- imagem que está sendo utilizada no código -->
          <img :src="imagen2" class="imagem" />
          <!-- Descrição -->
          <p class="descricao_exame">
            Lorem ipsum dolor sit amet consectetur adipisicing elit olaa ihda
            ihbsa.
          </p>
        </div>
        <div class="lista cima">
          <!-- imagem que está sendo utilizada no código -->
          <img :src="imagen1" class="imagem" />
          <!-- Descrição -->
          <p class="descricao_exame">
            Lorem, ipsum dolor sit amet consectetur adipisicing eliti. Minus
            numquam dicta tenetur reprehenderit id eveniet nesciunt temporibus?
            Quos.
          </p>
        </div>
        <div class="lista cima">
          <!-- imagem que está sendo utilizada no código -->
          <img :src="imagen3" class="imagem" />
          <!-- Descrição -->
          <p class="descricao_exame">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            repellendus saepe error enim aliquam obcaecati praesentium!
          </p>
        </div>
      </div>
      <!-- div_cima-->
      <div class="listas_colun">
        <div class="lista embaixo">
          <!-- imagem que está sendo utilizada no código -->
          <img :src="imagen3" class="imagem" />
          <!-- Descrição -->
          <p class="descricao_exame">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ipsum
            minima vero iste ut? Totam!
          </p>
        </div>
        <div class="lista embaixo">
          <!-- imagem que está sendo utilizada no código -->
          <img :src="imagen2" class="imagem" />
          <!-- Descrição -->
          <p class="descricao_exame">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
            nostrum veritatis sapiente excepturi!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "parteExame",
  data() {
    return {
      // Nome das imagens que estão sendo utilizadas
      imagen1: "/img/imagen1.png",
      imagen2: "/img/imagen2.png",
      imagen3: "/img/imagen3.png",
    };
  },
};
</script>
<style scoped>
.exames {
  font-weight: 900;
  width: 100%;
  height: 91vh;
  background-color: rgba(255, 214, 102, 1);
  border-radius: 0 222px 0 222px;
}
.titulo_exame {
  font-family: Nunito;
  font-size: 35px;
  font-weight: 700;
  color: rgba(46, 74, 125, 1);
  padding-top: 3%;
  padding-left: 3%;
}
.lista {
  width: 10%;
  height: 10%;
  font-size: 13px;
  font-style: normal;
  line-height: 15px;
  text-align: center;
  color: rgba(46, 74, 125, 1);
}
.listas_row {
  display: flex;
  justify-content: space-around;
  padding-top: 1%;
}
.listas_colun {
  display: flex;
  justify-content: space-evenly;
  padding-top: 1.5%;
}
.cima {
  margin-top: 2%;
}
.embaixo {
  padding-bottom: 3%;
}
.imagem {
  width: 70%;
  margin-bottom: 8%;
}
</style>
