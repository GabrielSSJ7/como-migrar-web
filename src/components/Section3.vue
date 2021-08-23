<template>
  <v-container>
    <div class="title" data-aos="fade-up">
      <h1>
        Pronto para migrar para os Estados Unidos? Se cadastre agora para
        descobrir seu matching de visto
      </h1>
    </div>

    <div class="fields" data-aos="fade-down">
      <div class="field">
        <icon-field placeholder="Seu nome" icon="person-check.png"></icon-field>
      </div>
      <div class="field">
        <icon-field placeholder="Seu email" icon="email.png"></icon-field>
      </div>

      <div class="button-container" justify="center">
        <v-btn> Dar o primeiro passo! </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import IconField from "./inputs/IconField.vue";
export default {
  name: "section3",
  components: {
    IconField,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/colors.scss";

.container {
  .title {
    h1 {
      color: $grey;
      font-size: 38px;
      line-height: 60px;
      text-align: center;
      @media (max-width: 600px) {
          font-size: 28px;
          line-height: 40px;
      }
    }
  }

  .fields {
    width: 70%;
    margin: auto;
    margin-top: 80px;
    .field {
      margin-bottom: 35px;
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
</style>