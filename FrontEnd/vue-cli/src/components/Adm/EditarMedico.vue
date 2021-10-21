<template>
  <div>
    <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
      />
    </head>
    <!-- Página completa -->
    <div id="pagcompleta">
      <!-- Lado esquerdo da Página -->
      <div id="ladoesquerdo">
        <!-- Imagem com o nome "doctor" -->
        <img :src="doctor" id="doctor" />
      </div>
      <!-- Lado direito da Página -->
      <div id="ladodireito">
        <!-- Título -->
        <h1>Editar <span>Médico</span></h1>
        <form>
          <!-- form das partes de input (Nome Completo) -->
          <input
            class="entradas"
            type="text"
            placeholder="Nome Completo"
            required
            v-model="name"
          />
          <i class="fas fa-user"></i>
          <!-- form das partes de input (Especialidade) -->
          <input
            class="entradas"
            type="text"
            placeholder="Especialidade"
            required
            v-model="especialidade"
          />
          <i class="fas fa-user-md"></i>
          <!-- form das partes de input (CPF) -->
          <input
            class="entradas"
            type="text"
            placeholder="CPF"
            autocomplete="off"
            maxlength="14"
            required
            v-model="cpf"
          />
          <i class="fas fa-user"></i>
          <!-- form das partes de input (Senha) -->
          <input
            class="entradas"
            type="text"
            placeholder="Senha"
            required
            v-model="senha"
          />
          <i class="fas fa-key"></i>
          <!-- form das partes de input (Confirmar Senha) -->
          <input
            class="entradas"
            type="text"
            placeholder="Confirmar Senha"
            required
            v-model="confirmarsenha"
          />
          <i class="fas fa-key"></i>
          <!-- botão para salvar as alterações do Médico -->
          <input id="botao" type="button" value="Salvar" @click="EnviarDados" />
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
      // Nome das imagens que estão sendo utilizadas no código
      doctor: "/img/doctor 1.png",
      cadastrar: "/img/Cadastrar Médico.svg",
      nome: "/img/name 1.png",
      ouvircoracao: "/img/ouvircoracao.png",
      name: "",
      especialidade: "",
      cpf: "",
      senha: "",
      confirmarsenha: "",
      medicoaresponsavel: "",
    };
  },
  methods: {},
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
  margin-left: 4%;
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
