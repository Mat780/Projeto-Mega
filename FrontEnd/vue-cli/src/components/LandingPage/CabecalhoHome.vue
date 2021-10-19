<template>
    <nav>
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Cabeçalho</title>
        </head>

        <body id="nav" :class="{sticky:active}">
            <header id="nav-container" :class="toggleNavClass()">
                
                <div class="logo">
                    <!-- logo do pato -->
                    <img :src="pato" alt="" />
                </div>

                <div class="click">
                    <!-- "lista" onde pode ocorrer o click e mudar para essa parte -->
                    <a @click="scrollInicio" class="nomes">Inicio</a>
                    <a @click="scrollSobre" class="nomes">Sobre</a>
                    <a @click="scrollExames" class="nomes">Exames</a>
                    <a @click="scrollContato" class="nomes">Contato</a>
                </div>
            </header>
        </body>
    </nav>
</template>

<script>
export default {
    name: "Cabecalho",
    data(){
        return{
            pato: '/img/DuckHealth.svg',
            active: false
        }
    },
    methods: {
        toggleNavClass(){
            if(this.active == false){
                return 'nav'
            } else {
                return 'fix-nav'
            }
        },
        scrollInicio(){
            const element = document.getElementById('BannerHomeDiv');
            element.scrollIntoView({ behavior: 'smooth' });
        },

        scrollSobre(){
            const element = document.getElementById('content');
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'end' 
            });
        },

        scrollExames(){
            const element = document.getElementById('HomeExames');
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'end'     
            });
        },

        scrollContato(){
            const element = document.getElementById('Contato');
            element.scrollIntoView({ behavior: 'smooth' , block: 'end'});
        },

        mounted() {
          let navBar = document.getElementById('nav');
          if(window.scrollY > navBar.offsetTop){
              this.active = true;
          }  else {
              this.active = false;
          }
        },
    },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Nunito;
    font-size: 28px;
}

header {
    position: relative;
    width: 100%;
    height: 100px;
    background: #15c3d6;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.logo {
    position: relative;
    right: 56%;

    width: 6%;
    height: 80%;
    background-color: #2e4a7d;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
}

.click {
    color: #ffffff;
    margin-right: 9%;
    display: flex;
}

.nomes {
    padding: 0 4%;
    cursor: pointer;
    text-decoration: none;
    color: unset;
}

.nomes:hover {
    color: #2e4a7d;
}


footer > img {
    margin-left: 2%;
}

.nav{
    transition: 100ms;
    padding-top: 10px;
}

.fix-nav{
    transition: 100ms;
    padding-top: 5px;
}

#nav{
    display: flex;
    width: 100%;
    position: fixed;
    top: 0;
}




</style>