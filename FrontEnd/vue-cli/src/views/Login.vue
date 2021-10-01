<template>
    <div>
        <div id="LoginBlock">
            <button :src='DuckHealth'></button>
            <div id="LoginBox">
                <FazerLogin/>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../../../../../Curso de Vue/vue-cli/src/components/Header.vue'
import FazerLogin from '../components/Login/FazerLogin.vue'

export default {
    name: 'Login',
    components: { 
        FazerLogin,
        Header
    },
    data(){
        return{
            DuckHealth: './img/DuckHealth_SVG.svg'
        }
    }
    
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
    justify-content: center;
    align-items: center;
}

#LoginBox{
    width: 300px;
    height: 300px;

    border-radius: 10px;
    background: rgb(81,114,254);
    background: linear-gradient(180deg, rgba(81,114,254,1) 0%, rgba(1,191,203,1) 100%);
}

#LoginDuck{
    position: relative;
}

button{
    justify-content: start;
}



</style>