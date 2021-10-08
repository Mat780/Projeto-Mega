<template>
     <div>
          <div id="pagcompleta">
               <div id="ladoesquerdo">
                    <img :src="doctor" id="doctor" />
               </div>

               <div id="ladodireito">
                    <h1>Editar <span>Médico</span></h1>

                    <form>
                         <input
                              class="entradas"
                              type="text"
                              placeholder="Nome Completo"
                              required
                              v-model="name"
                         />
                         <i class="fas fa-user"></i>
                         <input
                              class="entradas"
                              type="text"
                              placeholder="Especialidade"
                              required
                              v-model="especialidade"
                         />
                         <i class="fas fa-user-md"></i>
                         <input
                              class="entradas"
                              type="text"
                              placeholder="CPF"
                              autocomplete="off"
                              maxlength="14"
                              required
                              v-model="cpf"
                         />
                         <i class="fas fa-user"></i>
                         <input
                              class="entradas"
                              type="password"
                              placeholder="Senha"
                              required
                              v-model="senha"
                         />
                         <i class="fas fa-key"></i>
                         <input
                              class="entradas"
                              type="password"
                              placeholder="Confirmar Senha"
                              required
                              v-model="confirmarsenha"
                         />
                         <i class="fas fa-key"></i>
                         <input
                              class="entradas"
                              type="text"
                              placeholder="Médico(a) responsável"
                              required
                              v-model="medicoaresponsavel"
                         />
                         
                         <i class="fas fa-stethoscope"></i>
                         <input
                              id="botao"
                              type="button"
                              value="Salvar"
                              @click="EnviarDados"
                              
                         />
                    </form>
               </div>
          </div>
     </div>
</template>

<script>
export default {
     name: "CadastrarMedico",
     data() {
          return {
               doctor: "/img/doctor 1.png",
               cadastrar: "/img/Cadastrar Médico.svg",
               nome: "/img/name 1.png",
               ouvircoracao: "/img/ouvircoracao.png",
               name: "",
               especialidade: "",
               cpf: "",
               senha: "",
               confirmarsenha: "",
               medicoaresponsavel:"",
          };
     },
     methods: {
          EnviarDados() {
               const dados = {
                    name: this.name,
                    especialidade: this.especialidade,
                    cpf: this.cpf,
                    senha: this.senha,
                    confirmarsenha: this.confirmarsenha,
               };
               console.log(dados);
          },
     },
     methods:{
          abrirModal(){
               this.$refs['meu_modal'].show()
          }
     }
};
</script>

<style scoped>
* {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
}

#pagcompleta {
     display: grid;
     grid-template-columns: auto auto;
}

#doctor {
     width: 80%;
     height: 100vh;
}

h1 {
     font-size: 70px;
     margin-top: 2.5%;
     width: 90%;
     font-weight: 800;
     color: #2e4a7d;
     margin-left: 14%;
}

span {
     color: red;
}
form {
     width: 100%;
     height: 100%;
     background-color: #ffffff;
     display: flex;
     flex-direction: column;
}

.entradas {
     width: 80%;
     height: 9vh;
     background: #f5f5f5;
     border: 2px solid #2e4a7d;
     box-sizing: border-box;
     border-radius: 8px;
     text-align: left;
     padding-left: 10%;
     font-size: 30px;
     font-weight: 900;
     background-color: #f5f5f5;
}

.fas {
     width: 5%;
     margin-left: 3%;
     position: relative;
     bottom: 6%;
     font-size: 200%;
     color: #2e4a7d;
}

#botao {
     width: 79%;
     height: 10%;
     color: white;
     font-size: 30px;
     background: #2e4a7d;
     border-radius: 20px;
     margin-top: 1.5%;
     cursor: pointer;
     transition: 1s;
}

#botao:hover {
     background-color: #ffd666;
     color: #2e4a7d;
}
</style>
