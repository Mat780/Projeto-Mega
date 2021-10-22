<template>
  <div>
    <div class="modal-background" @click="$emit('esconder')"></div>
    <div class="modal-content">
      <div class="conteiner">
        <div class="error">
          <!-- Importanto icon -->
          <i class="fas fa-exclamation-triangle"></i>
          <!-- Mensagem crua -->
          <span class="texterror">
            Error
          </span>
        </div>
        <!-- Mensagem crua -->
        <div class="tipoErro">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laojafiohaisuhlnslhoadhfd
        </div>
        <!-- Botão sim -->
        <div class="btns">
          <button class="btn btnSim" @click="$emit('esconder')">Voltar</button>
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
</template>

<script>
export default {
  name: "erro",
};
</script>

<style scoped>
.modal-background {
  opacity: 80%;
}

.modal-content {
  width: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.conteiner {
  width: 100%;
  background-color: #e5e5e5;
  border-radius: 15px;
  border: 3px solid black;
  padding: 5% 0 5% 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.error {
  display: flex;
  align-self: center;
}

.texterror {
  font-size: 28px;
  position: relative;
  bottom: 3px;
}

.fas {
  color: red;
  font-size: 2vw;
  margin-right: 4%;
}

.tipoErro {
  width: 65%;
  align-self: center;
  margin: 4% 0 0 12%;
}

.btns {
  width: 100%;
  display: flex;
  justify-content: center;
}

.btn {
  width: 25%;
  height: 4vh;
  border-radius: 8px;
  border: 1px solid #2e4a7d;
  background-color: #2e4a7d;
  color: #fff;
  margin-top: 5%;
  font-size: 1em;
  transition: 0.3s;
  cursor: pointer;
}

.btn:hover {
  border: 1px solid #fff;
  background-color: #ffd666;
}
</style>
