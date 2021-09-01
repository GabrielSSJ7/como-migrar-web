<template>
  <div class="r-c" data-aos="fade-down" data-aos-duration="800">
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
				<p>We are social</p>
				<div>
					<img src="../assets/img/footer/instagram.png" alt="instagram icon" />
					<img src="../assets/img/footer/twitter.png" alt="twitter icon" />
					<img src="../assets/img/footer/linkedin.png" alt="linkedin icon" />
				</div>
      </div>


      <div class="logo-copyright">
        <img src="../assets/img/logo-branco@2x.png" alt="Logo Branco Como Migrar">
				<p>Copyright 2021. All rights reserved</p>
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
	flex-wrap: wrap;
  justify-content: space-between;
  
	.side-content {
		min-width: 320px;
		margin-right: 40px;
		.logo-copyright {
			margin-top: 25px;
			img {
				margin: auto;
				display: block;
				max-width: 70%;
			} 
			p {
				color: white;
				font-family: 'Roboto-Light';
				font-style: italic;
				margin-top: 20px;
				font-size: 16px;
			}
		}
		.social-medias {
			display: flex;
			justify-content: space-between;
			flex-direction: column;
			font-family: 'Roboto-Bold';
			color: white;
			font-size: 32px;

			div {
				display: flex;
				justify-content: space-between;
			}

			img {
				max-width: 35px;
			}
		}
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
