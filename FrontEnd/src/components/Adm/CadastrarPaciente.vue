<template>
  <div>
    <administracao @paciente="showModalUser()" />
    <div>
      <div class="modal-background" @click="$emit('esconder')"></div>
      <div class="modal-content">
        <div class="conteinerModalCadastrarPaciente">
          <div class="contentEsquerda">
            <!-- Imagem de paciente -->
            <img :src="paciente" class="paciente" />
          </div>
          <div class="contentDireita">
            <!-- Título -->
            <h1 class="tituloAzul">
              Cadastrar <span class="tituloVermelho">Paciente</span>
            </h1>
            <form  @submit.prevent="addListaPaciente(listasPaciente)" class="formulario">
              <div class="entradas">
                <i class="fas fa-user"></i>
                <!-- Input que é para digitar o nome do(a) Usuário(a) -->
                <input
                  class="nome"
                  v-model="listasPaciente.description"
                  type="text"
                  placeholder="Nome Completo"
                  
                />
              </div>
              <div class="entradas">
                <i class="fas fa-stethoscope"></i>
                <!-- Input que é para digitar o nome do(a) Médico(a) responsável -->
                <input
                  class="medicoResponsavel"
                  type="text"
                  placeholder="Digite o medico responsavel"
                  
                />
              </div>
              <div class="entradas">
                <!-- Input que é para digitar o cpf do(a) Usuário(a) responsável -->
                <i class="fas fa-address-card"></i>
                <input
                  v-maska="'###.###.###-##'"
                  class="cpf"
                  type="text"
                  placeholder="CPF"
                  
                />
              </div>
              <div class="entradas">
                <i class="fas fa-key"></i>
                <!-- Input que é para digitar a senha do(a) Usuário(a)  -->
                <input
                  class="senha"
                  v-model="senha"
                  type="password"
                  placeholder="Senha"
                  
                />
              </div>
              <div class="entradas">
                <i class="fas fa-key"></i>
                <!-- Input que é para confirmar a senha do(a) Usuário(a)  -->
                <input
                  class="confimarSenha"
                  v-model="confirmeSenha"
                  type="password"
                  placeholder="Confirmar Senha"
                  
                />
              </div>
              <!-- Botão para cadastrar o Paciente -->
              <button class="btn" @submit="confimarSenha">Cadastrar</button>
            </form>
          </div>
        </div>
      </div>
      <!-- Botão -->
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="$emit('esconder')"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "cadastrarPaciente",
  data() {
    return {
      // Nome das imagens que estão sendo utilizadas 
      paciente: "/img/paciente.png",
      cadastrar: "/img/Cadastrar Médico.svg",
      nome: "/img/name 1.png",
      ouvircoracao: "/img/ouvircoracao.png",
      // Lista dos pacientes
      listaPacientes: [],
      listasPaciente: {checked: false},
      senha:"",
      confirmeSenha: "",

    };
  },
  methods: {
    // Função que adiciona os pacientes e recebe como parâmetro "listasPaciente"
    addListaPaciente(listasPaciente) {
			listasPaciente.id = Date.now();
			this.listaPacientes.push(listasPaciente);
			this.listasPaciente = { checked: false };
		},
   /*/ confirmarSenha() {
      if(this.senha == this.confirmeSenha) {
        console.log("deu certo")
        return true
      } else {
        console.log("deu errado")
        return false
      }
    },/*/
   // cadastrar() {
  //  let resSenha = confirmarSenha()
  // },
  },
};
</script>

<style scoped>
.modal-background {
  opacity: 70%;
}

.modal-content {
  width: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.conteinerModalCadastrarPaciente {
  width: 100%;
  height: 60vh;
  background: #fff;
  border-radius: 8px;
  display: flex;
}

.paciente {
  height: 100%;
}

.contentDireita {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tituloAzul {
  font-size: 35px;
  font-weight: 700;
  padding-top: 4%;
  color: #2e4a7d;
}

.tituloVermelho {
  color: rgb(245, 80, 135);
}

.formulario {
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  padding-top: 2%;
}

.entradas {
  width: 100%;
  height: 11%;
  font-size: 18px;
  margin-top: 3.5%;
  display: flex;
}

.entradas > input {
  width: 100%;
  height: 100%;
  padding-left: 10%;
  border-radius: 8px;
  border: 1px solid #2e4a7d;
}

.fas {
  width: 5%;
  color: #2e4a7d;
  align-self: center;
  position: relative;
  left: 7%;
}

.btn {
  width: 85%;
  height: 11%;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 8px;
  font-size: 20px;
  margin: 4% 0 0 4%;
  color: #fff;
  border: none;
  background-color: #2e4a7d;
  align-self: center;
}

.btn:hover {
  border: 1px solid #2e4a7d;
  background-color: #ffd666;
  color: #2e4a7d;
}
</style>
