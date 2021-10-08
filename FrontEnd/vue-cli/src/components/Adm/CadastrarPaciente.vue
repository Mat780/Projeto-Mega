<template>
     <div>
          <div id="pagcompleta">
               <div id="ladoesquerdo">
                    <img :src="paciente" id="paciente" />
               </div>

               <div id="ladodireito">
                    <h1>Cadastrar Novo <span>Paciente</span></h1>
                    <form>
                         
                         <input 
                              class="entradas"
                              type="text"
                              placeholder="Nome Completo"
                              required
                         />
                         <i class="fas fa-user"></i>
                         <input
                              class="entradas"
                              type="text"
                              placeholder="CPF"
                              autocomplete="off"
                              maxlength="14"
                              required
                         />
                         <i class="fas fa-address-card"></i>
                         <input
                              class="entradas"
                              type="password"
                              placeholder="Senha"
                              required
                         />
                         <i class="fas fa-key"></i>
                         <input
                              class="entradas"
                              type="password"
                              placeholder="Confirmar Senha"
                              required
                         />
                         <i class="fas fa-key"></i>
                         <input id="botao" type="button" value="Cadastrar" />
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
               paciente: "/img/paciente.png",
               cadastrar: "/img/Cadastrar Médico.svg",
               nome: "/img/name 1.png",
               ouvircoracao: "/img/ouvircoracao.png",
          };
     },
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

#paciente {
     width: 80%;
     height: 100vh;
}

h1 {
     font-size: 70px;
     margin-top: 5%;
     width: 90%;
     font-weight: 800;
     color: #2e4a7d;
     margin-left: -1%;
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
     margin-top: 5%;
     text-align: left;
     padding-left: 8%;
     font-size: 30px;
     font-weight: 900;
     background-color: #f5f5f5;
     display: flex;
}

.fas{
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
     margin-top: 7%;
     cursor: pointer;
     transition: 1s;
}

#botao:hover {
     background-color: #ffd666;
     color: #2e4a7d;
}
</style>
