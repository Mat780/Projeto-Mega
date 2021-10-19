<template>
  <div>
    <head>
      <link
        rel="stylesheet"
        type="text/css"
        href="//fonts.googleapis.com/css?family=Nunito"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
      />
    </head>
    <div id="pagcompleta">
      <div id="ladoesquerdo">
        <img :src="doctor" id="doctor" />
      </div>

      <div id="ladodireito">
        <h1>Cadastrar <span>Médico</span></h1>

        <form>
          <!-- form das partes de input -->
          <input
            class="entradas"
            type="text"
            placeholder="Nome Completo"
            required
          />
          <i class="fas fa-user"></i>
          <input
            class="entradas"
            type="text"
            placeholder="Especialidade"
            required
          />
          <i class="fas fa-user-md"></i>
          <input
            class="entradas"
            type="text"
            placeholder="CPF"
            autocomplete="off"
            maxlength="14"
            required
          />
          <i class="fas fa-user"></i>
          <input class="entradas" type="text" placeholder="Senha" required />
          <i class="fas fa-key"></i>
          <input
            class="entradas"
            type="text"
            placeholder="Confirmar Senha"
            required
          />
          <i class="fas fa-key"></i>
          <!-- botão para cadastrar o médico -->
          <input id="botao" type="button" value="Cadastrar" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CadastrarMedico",
  data() {
    return {
      doctor: "/img/doctor 1.png",
      cadastrar: "/img/Cadastrar Médico.svg",
      nome: "/img/name 1.png",
      ouvircoracao: "/img/ouvircoracao.png",
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#pagcompleta {
  display: grid;
  grid-template-columns: 50% 50%;
}

#doctor {
  width: 80%;
  height: 99vh;
}

h1 {
  font-size: 70px;
  margin-top: 2.5%;
  width: 90%;
  font-weight: 800;
  color: #2e4a7d;
}

span {
  color: red;
}
form {
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}

.entradas {
  width: 80%;
  height: 9vh;

  display: flex;
  background-color: #f5f5f5;
  border: 2px solid #2e4a7d;
  box-sizing: border-box;
  border-radius: 8px;

  text-align: left;
  padding-left: 8%;

  font-size: 25px;
  font-weight: 800;

  outline: none;
  color: #2e4a7d;
}

.entradas::placeholder {
  font-size: 30px;
}

.fas {
  width: 5%;
  margin-left: 3%;
  position: relative;
  bottom: 43px;
  right: 8px;
  font-size: 175%;
  color: #2e4a7d;
}

#botao {
  width: 79%;
  height: 10vh;
  color: white;
  font-size: 30px;
  background: #2e4a7d;
  border-radius: 20px;
  cursor: pointer;
  transition: 1s;
}

#botao:hover {
  background-color: #ffd666;
  color: #2e4a7d;
}
</style>
