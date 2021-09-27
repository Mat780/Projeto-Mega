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
                    <img :src="pato" alt="" />
                </div>

                <div class="click">
                    <span class="nomes">Inicio</span>
                    <span class="nomes">Sobre</span>
                    <span class="nomes">Exames</span>
                    <span class="nomes">Contato</span>
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
            pato: '/img/DuckHealth_SVG.svg',
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