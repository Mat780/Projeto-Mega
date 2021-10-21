<template>
  <div>
    <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
      />
    </head>
    <administracao @paciente="showModalUser()" />
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
              Editar <span class="tituloVermelho">Medico</span>
            </h1>
            <form class="formulario">
              <div class="entradas">
                <i class="fas fa-user"></i>
                <!-- Input que é para digitar o nome do(a) Médico(a) -->
                <input
                  class="nome"
                  type="text"
                  placeholder="Nome Completo"
                  required
                />
              </div>
              <div class="entradas">
                <i class="fas fa-user-md"></i>
                <!-- Input que é para digitar a Especialidade do(a) Médico(a) -->
                <input
                  class="especialidade"
                  type="text"
                  placeholder="Especialidade"
                  required
                />
              </div>
              <div class="entradas">
                <i class="fas fa-address-card"></i>
                <!-- Input que é para digitar o CPF do(a) Médico(a) -->
                <input
                  v-maska="'###.###.###-##'"
                  class="cpf"
                  type="text"
                  placeholder="CPF"
                  required
                />
              </div>
              <div class="entradas">
                <i class="fas fa-key"></i>
                <!-- Input que é para digitar a senha do(a) Médico(a)-->
                <input
                  class="senha"
                  type="password"
                  placeholder="Senha"
                  required
                />
              </div>
              <div class="entradas">
                <i class="fas fa-key"></i>
                <!-- Input que é para confirmar a senha do(a) Médico(a)-->
                <input
                  class="confimarSenha"
                  type="password"
                  placeholder="Confirmar Senha"
                  required
                />
              </div>
              <!-- Botão que serve pra Salvar -->
              <button class="btn">Salvar</button>
            </form>
          </div>
        </div>
      </div>
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
  name: "editarMedico",
  data() {
    return {
      // Nome das imagens que estão sendo utilizadas
      doctor: "/img/doctor.png",
      cadastrar: "/img/Cadastrar Médico.svg",
      nome: "/img/name 1.png",
      ouvircoracao: "/img/ouvircoracao.png",
    };
  },
  methods: {},
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
