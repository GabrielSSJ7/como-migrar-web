<template>
  <div class="container">
    <div class="title" data-aos="flip-down">
      <h1>Tudo Que Você Precisa Em</h1>
      <h1>Um Só Lugar</h1>
      <img src="../assets/img/section1/aviao.png" alt="avião" />
    </div>

    <div class="texts-img">
      <div class="texts" data-aos="fade-right">
        <div>
          <h2>
            Torne seu sonho realidade através de um planejamento eficiente
          </h2>
          <p>
            Aprenda: Os melhores vistos para o seu perfil, emitir seu
            passaporte, preencher os formulários necessários, fechar com chave
            de ouro na entrevista do visto e ainda descubra a melhor cidade para
            visitar, morar, trabalhar ou estudar.
          </p>
        </div>

        <div>
          <h2>Aumente sua chance de ir para os EUA em 100%</h2>
          <p>
            O Como Migrar é uma plataforma digital e inovadora que disponibiliza
            um planejamento totalmente exclusivo, personalizado e detalhado de
            acordo com o seu perfil de forma inteligente, aumentando suas
            chances de aprovacao.
          </p>
        </div>

        <div>
          <h2>Não jogue seu dinheiro fora</h2>
          <p>
            O Como Migrar tem tudo o que você precisa em um só lugar. Encontre
            sua casa, seu carro e muito mais, tudo isso sem burocracias e sem
            custos extras.
          </p>
        </div>
      </div>
      <div class="match-image" data-aos="fade-left">
        <img src="../assets/img/section1/match.png" alt="Viagem Celular" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section1",
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/colors.scss";
.container {
  height: 100vh;
  max-width: 900px;
  .title {
    position: relative;
    img {
      position: absolute;
      width: 30%;
      right: 15%;
      top: 65px;
       @media (max-width: 660px) {
        top: 40px;
        right: 10%
      }
      @media (max-width: 410px) {
        top: 85px;
        right: 3%
      }
    }
    h1 {
      font-size: 40px;
      margin-bottom: 20px;
      text-align: center;
      color: $dark-blue;
      @media (max-width: 668px) {
        font-size: 26px;
        margin-bottom: 5px;
      }
    }
  }

  .texts-img {
    margin-top: 150px;
    height: 460px;
    @media (max-width: 870px) {
      display: flex;
      justify-content: center;
      margin-top: 100px;
    }

     @media (max-width: 670px) {
      display: flex;
      justify-content: center;
      margin-top: 50px;
    }
    .texts {
      float: left;
      max-width: 50%;
      @media (max-width: 868px) {
        max-width: 80%;
      }
      display: flex;
      flex-direction: column;
      align-items: space-between;
      h2 {
        font-size: 22px;
        color: $dark-blue;
      }
      p {
        font-family: "Roboto-Regular";
        color: $grey;
      }
    }
    .match-image {
      @media (max-width: 870px) {
        display: none;
      }
      float: right;
      width: 50%;
      height: 100%;
      img {
        height: 100%;
        margin: auto;
        display: block;
      }
    }
  }
}
</style>