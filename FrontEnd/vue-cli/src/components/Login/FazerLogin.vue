<template>
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <!-- RESOLVER BUG -->
  <div id="FazerLogin">
    <div id="duckImg"></div>
    <!-- Componentente para fazer login -->
    <h2>Bem-vindo</h2>
    <h4>Acesse seus <label style="color: #ffd666">laudos</label> agora!</h4>

    <!-- Formulário de informações do Login -->
    <form>
      <!-- Primeiro Input: CPF -->
      <div class="GrupoLogin">
        <img class="imgs" :src="pessoa" />
        <input
          v-maska="'###.###.###-##'"
          type="text"
          class="ControleLogin"
          v-model="cpf"
          placeholder="Escreva aqui seu CPF"
        />
      </div>
      <!-- Div com o input da senha e do botão para confirmar o login -->
      <div class="GrupoLogin">
        <!-- Imagem de uma chave -->
        <img class="imgs" :src="chave" />
        <!-- Segundo Input: Senha -->
        <input
          :type="typeSenha"
          class="ControleLogin"
          v-model="senha"
          placeholder="Escreva aqui sua senha"
        />

        <!-- Botão do olho de mostrar/ocultar senha -->
        <button
          style="width: 15%; border: none; background: none"
          @click="trocaOlho"
        >
          <!-- Imagem do olho que muda conforme está visivel ou não a senha -->
          <img class="imgs" :src="olho" style="padding-top: 0.8vh" />
        </button>
      </div>

      <!-- Botão para confirmar o login -->
      <div>
        <button id="LoginEntrar" @click="trocaPag">Entrar</button>
      </div>

      <!-- Divisória do Esqueci minha senha -->
      <div id="LoginCadeado">
        <!-- Imagem de um cadeado -->
        <img class="imgs" id="LoginCadeadoImg" :src="cadeado" />

        <!-- Texto com uma parte clickavel para recuperar senha -->
        <!-- AINDA NÃO IMPLEMENTADO -->
        <p>Esqueceu sua senha? <a>Clique aqui</a></p>
      </div>
    </form>
  </div>
</template>

<script>
// Exporta os arquivos do componente
export default {
  // Nome do componente
  name: "FazerLogin",

  // A data contêm as variaveis e informações do componente
  data() {
    return {
      pessoa: "./img/Pessoa.svg",
      chave: "./img/Chave.svg",
      cadeado: "./img/Cadeado.svg",
      olho: "./img/OlhoFechado.svg",
      typeSenha: "password",
      cpf: "",
      senha: "",
      duckIdle: "/img/patoIdle.png",
    };
  },
  // Os methods contêm as funções do componente
  methods: {
    // O trocaOlho faz 2 coisas:
    // Ele troca a imagem do olho para aberto caso a senha esteja legivel
    // Ou ele troca para o olho fechado caso a senha esteja ilegivel
    // E por fim ele ainda troca o tipo da senha para legivel ou ilegivel
    trocaOlho() {
      // Ele compara o typeSenha para saber se ele está como senha ou não
      if (this.typeSenha == "password") {
        // Caso ele esteja como uma senha ele troca para texto
        this.typeSenha = "text";
        // E altera o olho para um olho aberto ao invés de fechado
        this.olho = "./img/OlhoAberto.svg";
      } else {
        // Se ele não estiver como senha, troca-se o tipo dela para senha
        this.typeSenha = "password";

        // E assim o olho se fecha também, para completar o ciclo infinito
        this.olho = "./img/OlhoFechado.svg";
      }
    },
    // O trocaPag ele basicamente vai chamar o router para alterar a pagina
    trocaPag() {
      // IMPLEMENTAR UM VERIFICADOR DO BANCO DE DADOS PARA REDIRECIONAR PARA O URL CERTO

      // Ele troca a URL
      this.$router.push({ path: "/Login/Adm" });
    },

    // O cleanString(value) limpa a string do CPF para pegar somente os numeros do CPF
    // E esse (value) é a variavel do CPF.
    cleanString(value) {
      return value.replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, "");
    },
  },
};
</script>

<style scoped>
* {
  color: #ffffff;
}

#gridDuck {
  display: grid;
  grid-template-columns: 1% 99%;
}

#FazerLogin {
  background-image: url("/img/duckWrite.gif");
  background-repeat: no-repeat;
  padding-top: 4vh;
  text-align: center;
}

form {
  padding-top: 3.5vh;
}

.GrupoLogin {
  display: flex;
  margin: 2vh 2vw 0 2vw;
  height: 6vh;

  background-color: #f5f5f5;
  border: 1px solid #2e4a7d;
  box-sizing: border-box;
  border-radius: 8px;
}

.ControleLogin {
  font-weight: 400;

  color: rgb(94, 94, 94);
  background-color: #f5f5f5;
  outline: none;
  border: none;
  height: 5.6vh;
  width: 15vw;
}

.imgs {
  align-self: center;
  max-height: 3.3vh;
  max-width: 3.3vw;
  padding-left: 0.5vw;
  padding-right: 0.5vw;
}

#LoginEntrar {
  margin-top: 3vh;
  height: 6vh;
  width: 18vw;
  cursor: pointer;

  font-size: 20px;
  font-weight: 800;
  color: #2e4a7d;
  background-color: #ffd666;
  border-radius: 8px;
  border: none;
}

#LoginCadeado {
  display: flex;
  justify-content: center;
  padding-top: 1vh;
}

#LoginCadeadoImg {
  max-height: 3vh;
  max-width: 3vw;
}

p {
  font-size: 0.9rem;
}

a {
  color: #ffd666;
  text-decoration: underline #ffd666;
  cursor: pointer;
}
</style>
