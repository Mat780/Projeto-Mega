<template>
<div id="BannerHomeDiv">
    <header></header>
    <section class="RoneyLindo">
        <div id="BannerHomeTextDiv">
            <h1>Duck Health</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia euismod imperdiet. Pellentesque vel ultricies ante. lacinia euismod imperdiet. ultricies ante.</h2>
            <button>Acessar Laudos</button>
        </div>
        <div id="BannerHomeImgDiv">
            <img :src="banner" :alt="descricao">
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'BannerHome',
    data(){
        return{
            banner: "/img/bg-banner1.png",
            descricao: "Alguma descrição"
        }
    },
}
</script>

<style scoped>
    div{
        margin: 0;
        padding: 0;
    }

    #BannerHomeDiv{
        background: #15C3D6;
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 0px 0px 0px 150px;
    }

    .RoneyLindo{
        display: grid;
        grid-template-columns: auto auto;
    }

    #BannerHomeTextDiv{
        margin: 50px;
        text-align: center;
    }

    #BannerHomeImgDiv{
        text-align: right;
        padding-top: 30px;
    }

    img{
        width: 50vw;
    }

    header{
        height: 80px;
        width: 100%;
        background-color: black;
    }

    h1{
        margin: 0;
        font-family: Nunito;
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        line-height: 87px;
        text-align: center;

        color: #FFD666;
    }

    p{
        margin: 0;
        width: 500px;
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 33px;
        text-align: justify;
    }


    
</style>