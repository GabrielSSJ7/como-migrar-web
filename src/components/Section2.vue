<template>
  <v-container>
    <div class="title" data-aos="fade-up">
      <h1>A mudança da sua vida</h1>
      <h1>começa aqui</h1>
    </div>

    <div data-aos="zoom-in">
      <iframe
        src="https://www.youtube.com/embed/O0ybf_GE0DA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "section2",
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/colors.scss";

.container {
     @media (max-width: 325px) {
          font-size: 42px;
          margin-top: 200px;
      }
  .title {
    h1 {
      color: $dark-blue;
      text-align: center;
      margin-bottom: 45px;
      @media (max-width: 800px) {
          font-size: 42px;
          margin-bottom: 15px;
      }

       @media (max-width: 470px) {
          font-size: 28px;
          margin-bottom: 15px;
      }
    }
  }

  div {
    iframe {
      width: 90%;
      min-height: 450px;
      height: auto;
      margin: auto;
      display: block;
      margin-top: 100px;
       @media (max-width: 800px) {
           margin-top: 50px;
       }
    }
  }
}
</style>