<template>
  <div class="r-c">
    <div class="links">
      <h3>Placement</h3>

      <div>
        <p>Contact</p>
        <p>Legal</p>
        <p>Location</p>
        <p>Employee</p>
      </div>
    </div>

    <div class="side-content">
      <div class="social-medias">

      </div>


      <div class="logo-copyright">
        <img src="../assets/img/logo-branco@2x.png" alt="Logo Branco Como Migrar">
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'footer'
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/colors.scss";

.r-c {
  background-color: $my-black;

  padding: 55px 25px 55px 55px;
  display: flex;
  justify-content: space-between;
  
  .side-content {

  }

  .links {
    h3 {
      color: white;
      font-family: 'Roboto-Bold';
      margin-bottom: 15px;
    }  
    
    p {
      font-family: 'Roboto-Light';
      color: white;
      cursor: pointer;
      transition: .2s;
      &:hover {
        opacity: .8;
      }
    }
  }
}
</style>