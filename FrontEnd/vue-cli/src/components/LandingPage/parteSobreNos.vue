<template>
    <div id="content">
        <div class="parte_Direita">
            <img :src="imagen7" id="imagen7" />
        </div>
        <div id="meio">

        </div>
        <div class="parte_Esquerda">
            <h1 id="titulo">Sobre Nós</h1>
            <p id="descricao">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                nesciunt, iusto suscipit modi optio molestias vero perferendis
                itaque illum similique voluptas porro vel labore totam id
                placeat quidem a earum. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Doloribus facilis adipisci pariatur deserunt
                nulla illo itaque! Ipsum veritatis aspernatur ad delectus iusto
                assumenda et ea dignissimos obcaecati quod, id repudiandae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, reiciendis eius aliquid numquam ab ea, velit pariatur.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "parteSobreNos",
    data() {
        return {
            imagen7: "/img/imagen7.png",
        };
    },
};
</script>

<style scoped>
#content {
    display: flex;
    color: rgba(46, 74, 125, 0.8);

    padding-top: 5%;
    padding-bottom: 5%;
    background-image: url("/img/Bola.png");
    background-repeat: no-repeat;
    background-position: top;
    background-position-y: -550%;
}

.parte_Direita {
    width: 50%;
    height: 65vh;
    background-color: transparent;
}
#imagen7 {
    width: 75%;
    height: 90%;
    margin: 3% 0 0 18%;
}
.parte_Esquerda {
    width: 50%;
    height: 65vh;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#titulo {
    margin-top: 5%;
}
#descricao {
    width: 92%;
    font-size: 20px;
    line-height: 28px;
    text-align: justify;
    margin-top: 5%;
}
</style>
