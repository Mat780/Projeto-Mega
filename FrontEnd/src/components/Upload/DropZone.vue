<template>
  <!-- Divisória do dragdrop com algumas funções como:
		 Ao entrar ativar o toggleActive
		 Ao sair ativar o toggleActive
		 Ao dropar ativar o toggleActive
		 
		 Aqui temos duas classes uma ativavel e outra fixa
		 Ativavel: active-dropzone
		 Fixa: Dropzone
		 Para ativar a classe active-dropzone, é necessário que
		 a variavel active seja verdadeira -->
  <div
    @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="toggleActive"
    :class="{ 'active-dropzone': active }"
    class="Dropzone"
  >
    <!-- Imagem desabilatada pois ocupa muito espaço -->
    <img :src="imagem7" class="imagem7" v-if="false" />
    <!-- Texto -->
    <span>Arraste aqui</span>
    <span> Ou </span>

    <!-- Aqui é uma label interativa que vai funcionar como:
			 Um input do tipo file, que só aceita pdf -->
    <label for="DropzoneFile" class="DropzoneFile">Escolha um arquivo</label>
    <input type="file" accept=".pdf" id="DropzoneFile" />
  </div>
</template>

<script>
// Importa a função ref
import { ref } from "vue";

// Exporta as informações do componente
export default {
  // Nome do componente
  name: "DropZone",
  data() {
    return {
      imagem7: "/img/imagem7.png",
    };
  },

  // Comandos em JavaScript para fazer algumas funções
  setup() {
    // Declaração de váriavel com base na ref false
    const active = ref(false);

    // Uma função chamada toggleActive
    // Para alternar entre verdadeiro ou falso,
    // Pegando sempre o contrário do valor dá propria variavel
    const toggleActive = () => {
      active.value = !active.value;
    };

    // Ele retorna a váriavel e a função
    return { active, toggleActive };
  },
};
</script>

<style scoped>
* {
  font-weight: 500;
}

input {
  display: none;
}

.Dropzone {
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.4em;
  padding: 0.6em;

  background-color: #f5f5f5;
  border: 2px dashed #2e4a7d;
  transition: 0.3s ease all;
}

.DropzoneFile {
  color: #ffff;
  background-color: #2e4a7d;
  padding: 0.45em 1.1em;
  border-radius: 10px;
  transition: 0.3s ease all;
  cursor: pointer;
  border: 1px solid #2e4a7d;
}

.DropzoneFile:hover {
  background-color: #ffd666;
  color: #2e4a7d;
  border: 1px solid #2e4a7d;
}

.active-dropzone {
  color: #f5f5f5;
  background-color: #2e4a7d;
  border: 2px dashed #ebebeb;
}

.active-dropzone label {
  background-color: #ffd666;
  color: #2e4a7d;
}

.imagem7{
	width: 7%;
}
</style>
