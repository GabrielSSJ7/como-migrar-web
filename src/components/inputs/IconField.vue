<template>
  <v-row class="input-container">
    <div class="icon">
      <img :src="require(`../../assets/img/icons/${icon}`)" :alt="icon" />
    </div>
    <input type="text" :placeholder="placeholder" />
  </v-row>
</template>

<script>
export default {
  name: "icon-field",
  props: ["placeholder", "icon"],
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/colors.scss";

.input-container {
  width: 100%;
  border-radius: 7px;
  .icon {
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    background-color: $dark-blue;
    max-width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    img {
      width: 80%;
    }
  }

  input {
    text-align: center;
    box-shadow: 0 3px 6px rgba($color: #000000, $alpha: 0.1);
    width: calc(100% - 100px);
    outline: none;
    font-family: "Open_Sans-Regular";
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }
}
</style>