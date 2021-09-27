<template>
    <div>
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Contato</title>
        </head>

        <body>
            <div class="bg-white">
                <div class="esquerda">
                    <div class="row1">
                        <div class="input">
                            <input
                                type="text"
                                nome="nome"
                                id="nome"
                                placeholder="Nome"
                                required
                            />
                        </div>

                        <div class="input">
                            <input
                                type="email"
                                placeholder="Email"
                                id="email"
                                email="email"
                                required
                            />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm">
                            <input
                                type="mensagem"
                                placeholder="Como podemos ajudar? Escreva a sua dúvida"
                                required
                            />
                        </div>
                    </div>

                    <div class="row">
                        <button id="botao" type="submit">
                            Enviar Mensagem
                        </button>
                    </div>
                </div>

                <div class="direita">
                    <h2 id="contatos">Contatos</h2>
                    <div class="ultimadiv">
                        <ul style="list-style: none">
                            <li><img :src="telefone" /> 67(00000-0000)</li>
                            <li><img :src="insta" /><a href="https://www.instagram.com/megaufms/?hl=pt-br"> @Duck_Heath</a></li>
                            <li><img :src="facebook" /><a href="https://www.facebook.com/megaufms"> Duck Heath</a></li>
                            <li><img :src="linkedin" /><a href="https://www.linkedin.com/company/megajr/"> Duck Heath</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </body>
    </div>
</template>

<script>
export default {
    name: "FormDuvidas",
    data() {
        return {
            telefone: "/img/Fone.png",
            insta: "/img/Instagram.png",
            facebook: "/img/Facebook.png",
            linkedin: "/img/Linkedin.png",
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

.bg-white {
    display: flex;
    background-color: #ebf2f5;
}

.esquerda {
    width: 50vw;
}

.row1 {
    display: flex;
}

.input > input {
    width: 23vw;
    height: 52px;
    border-radius: 8px;
    font-family: Nunito;
    border-radius: 8px;
    text-align: left;
    font-size: 20px;
    display: flex;
    border: 0;
    padding: 10px;
    margin-left: 25px;
    margin-top: 8%;
}

.col-sm > input {
    width: 47.5vw;
    height: 20vh;
    border-radius: 8px;
    font-family: Nunito;
    text-align: left;
    font-size: 20px;
    display: flex;
    border: 0;
    padding: 0px 0 100px 10px;
    margin-left: 25px;
    margin-top: 3%;
}

body {
    font-family: Nunito;
    background-color: rgb(189, 140, 67);
}

#botao {
    width: 47.5vw;
    height: 52px;
    color: white;
    background-color: #2e4a7d;
    border-radius: 8px;
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 27px;
    align-items: center;
    text-align: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 0;
    margin-top: 3%;
    margin-left: 25px;
    margin-bottom: 3%;
    cursor: pointer;
}

#botao:hover {
    background-color: #ffd666;
    color: #2e4a7d;
}

.direita {
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#contatos {
    text-align: center;
    margin-top: 2%;
    font-size: 40px;
    color: #2e4a7d;
}

.ultimadiv {
    color: #2e4a7d;
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 33px;
    margin-right: 25%;
    margin-top: 0.5%;
    
}

.ultimadiv > ul > li {
    padding-top: 5%;
}

img{
    position: relative;
    top: 7px;
}

a{
    text-decoration: none;
    color: #2e4a7d;
}

</style>