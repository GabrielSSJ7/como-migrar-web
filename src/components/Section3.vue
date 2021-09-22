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
				<icon-field icon="person-check.png">
					<input v-model="name" placeholder="Seu nome" />
				</icon-field>
			</div>
			<div class="field">
				<icon-field icon="email.png">
					<input v-model="email" placeholder="Seu e-mail" />
				</icon-field>
			</div>

			<first-step></first-step>
		</div>
	</v-container>
</template>

<script>
import IconField from "./inputs/IconField.vue";
import FirstStep from "./FirstStep.vue";
export default {
	name: "section3",
	components: {
		IconField,
		FirstStep,
	},
	computed: {
		email: {
			get() {
				return this.$store.state.firstStep.email
			},
			set(value) {
				this.$store.commit('setFEmail', value)
			}	
		},
		name: {
			get() {
				return this.$store.state.firstStep.name
			},
			set(value) {
				this.$store.commit('setFName', value)
			}	
		}
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
