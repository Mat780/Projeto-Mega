<template>
  <div>
    <div class="modal-background" @click="$emit('esconder')"></div>
    <div class="modal-content">
      <div class="conteinerModalCadastrarPaciente">
        <div class="contentEsquerda">
          <!-- Imagem do doctor -->
          <img :src="doctor" class="doctor" />
        </div>
        <div class="contentDireita">
          <!-- Título -->
          <h1 class="tituloAzul">
            Cadastrar <span class="tituloVermelho">Medico</span>
          </h1>
          <form @submit.prevent="$emit('addListaMedico')" class="formulario">
            <div class="entradas">
              <!-- import icon addListaMedico-->
              <i class="fas fa-user"></i>
              <!-- Input que é para digitar o nome do(a) Médico(a) -->
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
              <i class="fas fa-user-md"></i>
              <!-- Input que é para digitar a Especialidade do(a) Médico(a) -->
              <input
                class="especialidade"
                type="text"
                placeholder="Especialidade"
                v-model="data"
                required
              />
            </div>
            <div class="entradas">
              <!-- import icon -->
              <i class="fas fa-address-card"></i>
              <!-- Input que é para digitar o CPF do(a) Médico(a) -->
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
              <!-- Input que é para digitar a senha do(a) Médico(a)-->
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
              <!-- Input que é para confirmar a senha do(a) Médico(a)-->
              <input
                class="confimarSenha"
                type="password"
                placeholder="Confirmar Senha"
                v-model="confirmPassword"
                required
              />
            </div>
            <!-- Botão que serve pra cadastrar -->
            <button class="btn" @click="cadastrarMedico()">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
    <!-- Botão que esconde o modal -->
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="$emit('esconder')"
    ></button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "cadastrarMedico",
  data() {
    return {
      // Nome das imagens que estão sendo utilizadas
      doctor: "/img/doctor.png",
      cadastrar: "/img/Cadastrar Médico.svg",
      nome: "/img/name 1.png",
      ouvircoracao: "/img/ouvircoracao.png",

      // Variaveis do cadastro do(a) Médico(a)
      name: "",
      cpf: "",
      data: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    cadastrarMedico() {
      if (this.password == this.confirmPassword) {
        this.cpf = this.cpf.replace(/[.-]/g, "");
        axios
          .post("http://localhost:8080/user", {
            name: this.name,
            password: this.password,
            cpf: this.cpf,
            data: this.data,
            role: 1,
          })
          .then((res) => {
            this.name = "";
            this.password = "";
            this.confirmPassword = "";
            this.cpf = "";
            this.data = "";
            console.log(res);
          })
          .catch((err) => {
            let msgErro = err.response.data.err;
            console.log(msgErro);
          });

        this.$emit("esconder");
      } else {
        console.log("A senha digitada está diferente do campo confirmar senha");
        this.$emit("esconder");
        return {
          err: "A senha digitada está diferente do campo confirmar senha",
        };
      }
    },
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

.doctor {
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
