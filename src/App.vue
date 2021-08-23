<template>
  <v-app>
    <main-nav></main-nav>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import MainNav from './components/MainNav.vue'

export default {
  name: 'App',
  components: {
    MainNav
  }
};
</script>

<style>
@font-face {
  font-family: "Montserrat-Regular";
  src: url(./assets/fonts/Montserrat/Montserrat-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Montserrat-Bold";
  src: url(./assets/fonts/Montserrat/Montserrat-Bold.ttf) format("truetype");
}

@font-face {
  font-family: "Montserrat-Light";
  src: url(./assets/fonts/Montserrat/Montserrat-Light.ttf) format("truetype");
}

@font-face {
  font-family: "Open_Sans-Regular";
  src: url(./assets/fonts/Open_Sans/OpenSans-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Open_Sans-Bold";
  src: url(./assets/fonts/Open_Sans/OpenSans-Bold.ttf) format("truetype");
}

@font-face {
  font-family: "Open_Sans-Light";
  src: url(./assets/fonts/Open_Sans/OpenSans-Light.ttf) format("truetype");
}



@font-face {
  font-family: "Roboto-Regular";
  src: url(./assets/fonts/Roboto/Roboto-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Roboto-Bold";
  src: url(./assets/fonts/Roboto/Roboto-Bold.ttf) format("truetype");
}

@font-face {
  font-family: "Roboto-Light";
  src: url(./assets/fonts/Roboto/Roboto-Light.ttf) format("truetype");
}

h2 {
  font-size: 46px;
  font-family: 'Montserrat-Bold';
}

h1 {
  font-size: 62px;
  font-family: 'Montserrat-Bold';
}

</style>
