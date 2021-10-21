<template>
  <div>
      <div class="modal-background" @click="$emit('esconder')"></div>
      <div class="modal-content">
        <div class="conteinerModalCadastrarPaciente">
          <div class="contentEsquerda">
            <img :src="doctor" class="doctor" />
          </div>
          <div class="contentDireita">
            <h1 class="tituloAzul">
              Cadastrar <span class="tituloVermelho">Medico</span>
            </h1>
            <form class="formulario">
              <div class="entradas">
                <i class="fas fa-user"></i>
                <input
                  class="nome"
                  type="text"
                  placeholder="Nome Completo"
                  required
                />
              </div>
              <div class="entradas">
                <i class="fas fa-user-md"></i>
                <input
                  class="especialidade"
                  type="text"
                  placeholder="Especialidade"
                  required
                />
              </div>
              <div class="entradas">
                <i class="fas fa-address-card"></i>
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
                <input
                  class="senha"
                  type="password"
                  placeholder="Senha"
                  required
                />
              </div>
              <div class="entradas">
                <i class="fas fa-key"></i>
                <input
                  class="confimarSenha"
                  type="password"
                  placeholder="Confirmar Senha"
                  required
                />
              </div>

              <button class="btn">Cadastrar</button>
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
</template>

<script>
export default {
  name: "cadastrarMedico",
  data() {
    return {
      doctor: "/img/doctor.png",
      cadastrar: "/img/Cadastrar Médico.svg",
      nome: "/img/name 1.png",
      ouvircoracao: "/img/ouvircoracao.png",
    };
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
