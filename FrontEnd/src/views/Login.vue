<template>
    <div id="LoginBlock">
      <div>
        <div id="LoginTopoBotao">
          <!-- Botão que executa "Voltar"-->
          <button id="LoginBotao" @click="Voltar">
            <!-- Imagem que está sendo utilizada no Código -->
            <img id="LoginImgBotao" :src="DuckHealth2" />
          </button>
          <div></div>
        </div>
        <!-- Imagem que está sendo utilizada no Código -->
        <img id="LoginImg1" :src="Bg1" />
      </div>
      <div id="LoginBox">
        <FazerLogin />
      </div>
      <div>
        <!-- Imagem que está sendo utilizada no Código -->
        <img id="LoginImg2" :src="Bg2" />
      </div>
    </div>
</template>

<script>
import FazerLogin from '../components/Login/FazerLogin.vue'

export default {
    name: 'Login',
    components: { 
        FazerLogin,
    },
    data(){
        return{
             // Nome das imagens que estão sendo utilizadas no código
            DuckHealth: '/img/DuckHealth.svg',
            DuckHealth2: '/img/DuckHealth.png',
            Bg1: '/img/LoginBg1.svg',
            Bg2: '/img/LoginBg2.svg',
        }
    },
    methods: {
        Voltar(){
            this.$router.push({ path: '/' })
        }
    },
    
}
</script>

<style scoped>

*{
    overflow: hidden;
}


#LoginBlock{
    width: 100vw;
    height: 100vh;
    background: #E5E5E5;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
}

#LoginBox{
    
    width: 25%;
    height: 50%;

    align-self: center;

    border-radius: 10px;
    background: rgb(81,114,254);
    background: linear-gradient(180deg, rgba(81,114,254,1) 0%, rgba(1,191,203,1) 100%);
    
}

#LoginDuck{
    position: relative;
}

#LoginImg1{
    position: relative;
    top: 60%;
    
    width: 22vw;
}

#LoginImg2{
    position: relative;
    bottom: 10%;
    
    width: 22vw;
}

#LoginTopoBotao{
    position: relative;
    top: 3%;
}

#LoginBotao{
    position: relative;
    width: 4.5vw;
    height: 8.5vh;

    left: 5%;

    border-radius: 5px;
    background-color: #2E4A7D;

    cursor: pointer;
    border: none;
    color: #2E4A7D;
    transition: 1s;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
}

#LoginImgBotao{
    justify-self: center;
    width: 90%;
    height: 100%;
}


</style>