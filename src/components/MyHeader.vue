<template>
  <div class="container" data-aos="fade">
    <v-col class="left-column" data-aos="flip-left">
      <h2>Chegou sua vez de ir para os</h2>
      <h1>Estados Unidos</h1>

      <div class="texts">
        <p>
          O Como Migrar é para voce que quer dar <br />o primeiro passo e não o
          sabe por onde começar.
        </p>
      </div>

      <div class="texts">
        <p>
          Pronto para migrar para os Estados Unidos?<br />
          Cadastre-se agora para descobrir seu matching de visto
        </p>
      </div>

      <div class="fields">
        <div class="field">
          <icon-field
            placeholder="Seu nome"
            icon="person-check.png"
          ></icon-field>
        </div>
        <div class="field">
          <icon-field placeholder="Seu email" icon="email.png"></icon-field>
        </div>

        <div class="button-container" justify="center">
          <v-btn> Dar o primeiro passo! </v-btn>
        </div>
      </div>
    </v-col>
  </div>
</template>

<script>
import IconField from "./inputs/IconField.vue";
export default {
  name: "my-header",
  components: {
    IconField,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/colors.scss";

.container {
  background-image: url(../assets/img/header/bg@2x.png);
  background-size: contain;
  background-position-x: 100%;

  max-width: unset;
  overflow: hidden;
  position: relative;

  .left-column {
    max-width: 1200px;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 40px;
    font-family: "Montserrat-bold";
    color: $dark-blue;

    h1 {
      font-size: 80px;
      margin-top: -15px;
    }

    h2 {
      font-size: 43px;
    }

    .texts {
      margin-bottom: 40px;
      font-family: "Open_Sans-Regular";
      color: $grey;
      font-size: 20px;
    }

    .fields {
      width: 40%;
      margin-top: 80px;
      .field {
        margin-bottom: 35px;
      }
    }

    .button-container {
      width: 100%;
      display: flex;
      justify-content: center;
      button {
        background-color: $dark-blue;
        font-family: "Montserrat-Bold";
        color: white;
        text-transform: unset;
      }
    }
  }
}

@media (max-width: 1961px) {
  .container {
    .left-column {
      .fields {
        width: 50%;
      }

      h1 {
        font-size: 100px;
      }

      h2 {
        font-size: 53px;
      }

      .texts {
        font-size: 24px;
      }
    }
  }
}

@media (max-width: 1860px) {
  .container {
    .left-column {
      .fields {
        width: 50%;
      }
      h1 {
        font-size: 90px;
      }

      h2 {
        font-size: 48px;
      }

      .texts {
        font-size: 22px;
      }
    }
  }
}

@media (max-width: 1660px) {
  .container {
    .left-column {
      .fields {
        width: 47%;
      }

      h1 {
        font-size: 90px;
      }

      h2 {
        font-size: 48px;
      }

      .texts {
        font-size: 22px;
      }
    }
  }
}

@media (max-width: 1560px) {
  .container {
    .left-column {
      .fields {
        width: 45%;
      }
      h1 {
        font-size: 85px;
      }

      h2 {
        font-size: 45px;
      }

      .texts {
        font-size: 20px;
      }
    }
  }
}

@media (max-width: 1460px) {
  .container {
    .left-column {
      .fields {
        width: 42%;
      }
      h1 {
        font-size: 72px;
      }

      h2 {
        font-size: 38px;
      }

      .texts {
        font-size: 19px;
      }
    }
  }
}

@media (max-width: 1361px) {
  .container {
    background-image: url(../assets/img/header/bg-mobile@2x.png);
    background-size: 40%;
    background-position-y: 50%;

    .left-column {
      .fields {
        width: 60%;
      }
    }
  }
}

@media (max-width: 1060px) {
  .container {
    .left-column {
      h1 {
        font-size: 68px;
      }

      h2 {
        font-size: 36px;
      }

      .texts {
        font-size: 16px;
      }
    }
  }
}

@media (max-width: 860px) {
  .container {
    .left-column {
      h1 {
        font-size: 58px;
      }

      h2 {
        font-size: 31px;
      }

      .texts {
        font-size: 14px;
      }
    }
  }
}

@media (max-width: 660px) {
  .container {
    background-image: unset;
    max-width: 100%;
    text-align: center;
    .left-column {
      h1 {
        font-size: 52px;
      }

      h2 {
        font-size: 26px;
      }

      .texts {
        font-size: 12px;
      }

      .fields {
        width: 85%;
        margin: auto;
      }

      .button-container {
        width: 40%;
        display: flex;
        justify-content: center;
        margin: auto;
        button {
          background-color: $dark-blue;
          font-family: "Montserrat-Bold";
          color: white;
        }
      }
    }
  }
}
</style>