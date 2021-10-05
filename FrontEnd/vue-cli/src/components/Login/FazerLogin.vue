<template>
    <div id="FazerLogin">
        <h2>
            Bem-vindo
        </h2>
        <h4>
            Acesse seus <label class="ColorLaudos">laudos</label> agora!
        </h4>

        <form>
            <div class="GrupoLogin">
                <img :src='Pessoa'>
                <input type="text" class="ControleLogin" v-model="text" placeholder="Escreva aqui seu CPF">
            </div>
            <div class="GrupoLogin">
                <img :src='Chave'>
                <input type="password" class="ControleLogin" v-model="password" placeholder="Escreva aqui sua senha">
            </div>
            <div>
                <button id="LoginEntrar">Entrar</button>
            </div>
            <div id="LoginCadeado">
                <img id='LoginCadeadoImg' :src='Cadeado'>
                <p>Esqueceu sua senha? <a>Clique aqui</a></p>
            </div>
        </form>

    </div>
</template>

<script>
export default {
    name: "FazerLogin",
    data(){
        return{
            Pessoa: './img/Pessoa.svg',
            Chave: './img/Chave.svg',
            Cadeado: './img/Cadeado.svg',
            CPF: '',
            Senha: ''
        }
    }
}
</script>

<style scoped>

*{
    color: #FFFFFF;
}

#FazerLogin{
    padding-top: 4vh;
    text-align: center;
}

.ColorLaudos{
    color:  #FFD666;
}

form{
    padding-top: 3.5vh;
}

.GrupoLogin{
    display: flex;
    margin: 2vh 2vw 0 2vw;    
    height: 6vh;

    background-color: #F5F5F5;
    border: 1px solid #2E4A7D;
    box-sizing: border-box;
    border-radius: 8px;
}

.ControleLogin{
    font-weight: 400;

    color: rgb(94, 94, 94);
    background-color: #F5F5F5;
    outline: none;
    border: none;
    height: 5.6vh;
    width: 15.65vw;
}

img{
    align-self: center;
    max-height: 3.3vh;
    max-width: 3.3vw;
    padding-left: 0.5vw;
    padding-right: 0.5vw;
}

#LoginEntrar{
    margin-top: 3vh;
    height: 6vh;
    width: 18vw;
    cursor: pointer;

    font-size: 20px;
    font-weight: 800;
    color: #2E4A7D;
    background-color: #FFD666;
    border-radius: 8px;
    border: none;
}

#LoginCadeado{
    display: flex;
    justify-content: center;
    padding-top: 1vh;
}

#LoginCadeadoImg{
    max-height: 3vh;
    max-width: 3vw;
}

p{
    font-size: 14px;
}

a{
    color: #FFD666;
    text-decoration: underline #FFD666;
    cursor: pointer;
}

</style>