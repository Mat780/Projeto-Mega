<template>
  <div>
    <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
      />
    </head>
    <div id="pagcompleta">
      <div id="ladoesquerdo">
        <img :src="paciente" id="paciente" />
      </div>

      <div id="ladodireito">
      <h1>
        Editar
        <span id="paciente1">Paciente</span>
        </h1>
        <!-- form das partes de input -->
        <form>
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
            placeholder="CPF"
            autocomplete="off"
            maxlength="14"
            required
          />
          <i class="fas fa-address-card"></i>
          <input
            class="entradas"
            type="text"
            placeholder="Senha"
            required
          />
          <i class="fas fa-key"></i>
          <input
            class="entradas"
            type="text"
            placeholder="Confirmar Senha"
            required
          />
          <i class="fas fa-key"></i>
          <input
            class="entradas"
            type="text"
            placeholder="Médico(a) responsável"
            required
            v-model="medicoaresponsavel"
          />
          <i class="fas fa-stethoscope"></i>
          <!-- botão para editar o paciente -->
          <input id="botao" type="button" value="Salvar" />
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
      paciente: "/img/paciente.png",
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

#paciente {
  width: 80%;
  height: 99vh;
}

h1 {
  font-size: 70px;
  margin-top: 3%;
  width: 90%;
  font-weight: 800;
  color: #2e4a7d;
  margin-left: 0.9%;
}

#paciente1 {
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

.entradas::placeholder{
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
