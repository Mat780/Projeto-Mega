<template>
  <div>
    <!-- Mostra o modal ao usuário -->
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
              Editar
              <!-- Mensagem crua -->
              <span class="tituloVermelho">Paciente</span>
            </h1>
            <form class="formulario">
              <div class="entradas">
                <!-- import icon -->
                <i class="fas fa-user"></i>
                <!-- Input que é para digitar o nome do(a) Usuário(a) -->
                <input
                  class="nome"
                  type="text"
                  placeholder="Nome Completo"
                  v-model="name"
                  required
                />
              </div>
              <div class="entradas">
                <!-- import icon -->
                <i class="fas fa-address-card"></i>
                <!-- Input que é para digitar o cpf do(a) Usuário(a) responsável -->
                <input
                  v-maska="'###.###.###-##'"
                  class="cpf"
                  type="text"
                  placeholder="CPF"
                  v-model="cpf"
                  required
                />
              </div>
              <div class="entradas">
                <!-- import icon -->
                <i class="fas fa-key"></i>
                <!-- Input que é para digitar a senha do(a) Usuário(a)  -->
                <input
                  class="senha"
                  type="password"
                  placeholder="Senha"
                  v-model="password"
                  required
                />
              </div>
              <div class="entradas">
                <!-- import icon -->
                <i class="fas fa-key"></i>
                <!-- Input que é para confirmar a senha do(a) Usuário(a)  -->
                <input
                  class="confimarSenha"
                  type="password"
                  placeholder="Confirmar Senha"
                  v-model="confirmPassword"
                  required
                />
              </div>
              <!-- Botão para salvar as alteações do Paciente -->
              <button class="btn" @click="editar">Salvar</button>
            </form>
          </div>
        </div>
      </div>
      <!-- Botão para cadastrar o Paciente -->
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="$emit('esconder')"
      ></button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "editarPaciente",
  data() {
    return {
      // Nome das imagens que estão sendo utilizadas
      paciente: "/img/paciente.png",
      cadastrar: "/img/Cadastrar Médico.svg",
      nome: "/img/name 1.png",
      ouvircoracao: "/img/ouvircoracao.png",

      // Variaveis do update
      id: 1,
      password: "",
      confirmPassword: "",
      cpf: "",
      name: "",
      data: "",
    };
  },
  props: {
    cpfProps: String,
  },

  methods: {
    // Função que executa "editar()"
    editar() {
      if (this.password == this.confirmPassword) {
        this.cpf = this.cpf.replace(/[.-]/g, "");
        console.log(this.name + " " + this.password + " " + this.cpf);
        axios
          .put("http://localhost:8080/user", {
            id: this.id,
            name: this.name,
            password: this.password,
            cpf: this.cpf,
          })
          .then((res) => {
            this.$router.go();
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });

        // this.name = "";
        // this.password = "";
        // this.cpf = "";
        // this.confirmPassword = "";
        // this.$router.go();
        this.$emit("esconder");
      } else {
        this.$emit("esconder");
        console.log("A senha digitada está diferente do campo confirmar senha");
        return {
          err: "A senha digitada está diferente do campo confirmar senha",
        };
      }
    },

    pullInfo(){
      axios.get("http://localhost:8080/user/" + this.cpfProps).then((data =>{
        console.log(data);
      }))
    }
  },

};
</script>

<style scoped>
.modal-background {
  opacity: 80%;
}

.modal-content {
  width: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.conteinerModalCadastrarPaciente {
  width: 100%;
  height: 65vh;
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
  margin: 8% 0 0 4%;
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
