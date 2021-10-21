<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <h1>Estou aqui</h1>
          <!-- <CadastrarPaciente/> -->
            <button class="modal-default-button" @click="$emit('close')">
              OK
            </button>

      </div>
    </div>
  </div>
</template>

<script>
// import CadastrarPaciente from '../components/Adm/CadastrarPaciente.vue'
export default {
    //  components:{
    //       CadastrarPaciente
    //  }
     
};
</script>

<style>
.modal-mask {
  position: absolute;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  position: absolute;
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: absolute;
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: aqua;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  position: absolute;
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  position: absolute;
  margin: 20px 0;
}

.modal-default-button {
  position: absolute;
  float: right;
}

.modal-enter {
  position: absolute;
  opacity: 0;
}

.modal-leave-active {
  position: absolute;
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
