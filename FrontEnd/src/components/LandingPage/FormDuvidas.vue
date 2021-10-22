<template>
  <div>
    <div class="conteiner" id="Contato">
      <form ref="form" @submit.prevent="sendEmail" class="contentDuvida">
        <div class="nome_email">
          <div class="nome">
            <!-- Local para digitar o seu nome -->
            <input
              type="text"
              name="UserName"
              class="inputRow name"
              placeholder="Nome"
              :v-model="Name"
              required
            />
          </div>
          <!-- Local para digitar o seu email -->
          <div class="email">
            <input
              type="text"
              name="UserEmail"
              class="inputRow email"
              placeholder="Email"
              :v-model="Email"
              required
            />
          </div>
        </div>
        <div class="ajuda">
          <!-- Local para digitar a sua dúvida -->
          <textarea
            type="text"
            name="Msg"
            class="inputAjuda"
            placeholder="Como podemos ajudar? Escreva sua dúvida"
            :v-model="Msg"
            required
          />
        </div>
        <input class="btn" type="submit" value="Enviar" />
      </form>

      <div class="direita">
        <!-- Títtlo -->
        <h2 id="contatos">Contatos</h2>
        <div class="ultimadiv">
          <ul style="list-style: none">
            <!-- Imagem do Telefone -->
            <li><img :src="telefone" /> 67(00000-0000)</li>
            <li>
              <!-- Imagem do Instagram -->
              <img :src="insta" /><a
                href="https://www.instagram.com/megaufms/?hl=pt-br"
                target="_blank"
              >
                @Duck_Heath</a
              >
            </li>
            <li>
              <!-- Imagem do Facebook -->
              <img :src="facebook" /><a
                href="https://www.facebook.com/megaufms"
                target="_blank"
              >
                Duck Heath</a
              >
            </li>
            <li>
              <!-- Imagem do LinkedIn -->
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
import emailjs from "emailjs-com";

export default {
  name: "FormDuvidas",
  data() {
    return {
      // Nome das imagens que estão sendo utilizadas
      telefone: "/img/Fone.png",
      insta: "/img/Instagram.png",
      facebook: "/img/Facebook.png",
      linkedin: "/img/Linkedin.png",
    };
  },
  methods: {
    //   Função para mandar os emails
    sendEmail(event) {
      emailjs
        .sendForm(
          "service_MegaJrPS",
          "template_FormsMegaJrPs",
          this.$refs.form,
          "user_3U0V4u52tmL6BC5OTJvsT"
        )
        .then(
          (result) => {
            alert(
              "Seu email foi enviado com sucesso, obrigado pela preferencia, a clinica Duck Health agradece",
              result.text
            );
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
      event.target.reset();
    },
  },
};
</script>

<style scoped>
.conteiner {
  display: flex;
  width: 100%;
  padding-bottom: 5vh;
}

form {
  width: 50%;
  padding-left: 2%;
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
  padding-right: 2%;
  resize: none;
}

::placeholder {
  font-size: 20px;
  color: rgba(144, 144, 144, 1);
}

.btn {
  width: 45vw;
  height: 7vh;
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
  font-size: 40px;
  color: #2e4a7d;
}

.ultimadiv {
  color: #2e4a7d;
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
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
