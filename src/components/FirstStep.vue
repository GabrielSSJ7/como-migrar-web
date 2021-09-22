<template>
	<div class="button-container" justify="center">
		<v-btn @click="navigate"> Dar o primeiro passo! </v-btn>
	</div>
</template>
<script>
export default {
	props: ["fields"],
	methods: {
		navigate() {
			this.$router.push({name: "Register", params: this.fields})
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/colors.scss";

.button-container {
	width: 100%;
	display: flex;
	justify-content: center;
	button {
		background-color: $dark-blue !important;
		font-family: "Montserrat-Bold";
		color: white;
		text-transform: unset;
	}
}
</style>
