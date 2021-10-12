<template>
  <div>
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Contato</title>
    </head>
    <div class="conteiner" id="Contato">
      <form
        action="https://api.staticforms.xyz/submit"
        method="post"
        class="contentDuvida"
      >
      
        <input
          type="hidden"
          name="accessKey"
          value="6a0a6c0e-449a-43b9-8a40-63bbfaa6842a"
        />
        
        <div class="nome_email">
          <div class="nome">
            <input
              type="text"
              name="name"
              class="inputRow name"
              placeholder="Nome"
              required
            />
          </div>
          <div class="email">
            <input
              type="text"
              name="email"
              class="inputRow email"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div class="ajuda">
          <input
            type="text"
            name="message"
            class="inputAjuda"
            placeholder="Como podemos ajudar? Escreva sua dúvida"
            required
          />
        </div>
        <button class="btn">Enviar Mensagem</button>
      </form>

      <div class="direita">
        <h2 id="contatos">Contatos</h2>
        <div class="ultimadiv">
          <ul style="list-style: none">
            <li><img :src="telefone" /> 67(00000-0000)</li>
            <li>
              <img :src="insta" /><a
                href="https://www.instagram.com/megaufms/?hl=pt-br"
                target="_blank"
              >
                @Duck_Heath</a
              >
            </li>
            <li>
              <img :src="facebook" /><a
                href="https://www.facebook.com/megaufms"
                target="_blank"
              >
                Duck Heath</a
              >
            </li>
            <li>
              <img :src="linkedin" /><a
                href="https://www.linkedin.com/company/megajr/"
                target="_blank"
              >
                Duck Heath</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
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
  font-family: Nunito;
}

.conteiner {
  display: flex;
  width: 100%;
}

form {
  width: 50%;
  padding-left: 2%;
  padding-bottom: 2%;
}

.nome_email {
  width: 45vw;
  display: flex;
  justify-content: space-between;
  padding-bottom: 2%;
}

.inputRow {
  width: 22vw;
  height: 5vh;
  border-radius: 8px;
  border: none;
  padding-left: 2%;
}

.inputAjuda {
  width: 45vw;
  height: 23vh;
  border-radius: 8px;
  border: none;
  padding-left: 2%;
  padding-bottom: 18.5%;
}

::placeholder {
  font-size: 20px;
  color: rgba(144, 144, 144, 1);
}

.btn {
  width: 45vw;
  height: 5vh;
  background-color: #2e4a7d;
  color: #fff;
  font-size: 20px;
  margin-top: 2%;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 1s;
}

.btn:hover {
  border: 1px solid #2e4a7d;
  background-color: #ffd666;
  color: #2e4a7d;
}

.direita {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1%;
}

#contatos {
  text-align: center;
  font-size: 40px;
  color: #2e4a7d;
}

.ultimadiv {
  color: #2e4a7d;
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  margin-right: 25%;
}

.ultimadiv > ul > li {
  padding-top: 3%;
}

img {
  position: relative;
  top: 7px;
}

a {
  text-decoration: none;
  color: #2e4a7d;
}
</style>
