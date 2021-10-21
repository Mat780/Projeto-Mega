<template>
  <div>
    <div class="modal-background" @click="$emit('esconder')"></div>
    <div class="modal-content">
      <div class="conteiner">
        <div class="pergunta">
          <i class="fas fa-exclamation-triangle"></i>
          <span class="textPergunta"
            >Quer realmente excluir esse Paciente?</span
          >
        </div>
        <div class="btns">
          <button class="btn btnSim" @click="$emit('esconder')">Sim</button>
          <button class="btn btnNao" @click="$emit('esconder')">Não</button>
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
  name: "confirmarPaciente",
};
</script>

<style scoped>
.modal-content {
  width: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.conteiner {
  width: 100%;
  height: 15vh;
  background-color: #e5e5e5;
  border-radius: 15px;
  border: 3px solid black;
  padding: 3% 5% 0 5%;
}

.pergunta {
  display: flex;
}

.fas {
  color: red;
  font-size: 1.5vw;
  margin-right: 4%;
}

.btns {
  width: 100%;
  display: flex;
  margin-top: 6%;
  justify-content: end;
}

.btn {
  width: 25%;
  height: 4vh;
  border-radius: 8px;
  border: 1px solid #2e4a7d;
  background-color: #2e4a7d;
  color: #fff;
  margin-left: 3%;
  font-size: 1em;
  transition:  .3s;
  cursor: pointer;
}

.btn:hover {
  border: 1px solid #fff;
  background-color: #ffd666;
}
</style>
