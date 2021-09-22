<template>
	<v-app>
		<h1>Cadastro Como Migrar</h1>
		<div class="form">
			<vue-form-generator :schema="schema" :model="model"></vue-form-generator>

			<v-row style="margin-top: 15px">
				<v-btn @click="submit"  v-if="!inProgress">Dar o primeiro passo!</v-btn>
				<v-progress-linear class="progress-bar" v-else indeterminate color="blue" >
				</v-progress-linear>
			</v-row>
		</div>
	</v-app>
</template>
<script>
export default {
	data: () => ({
		inProgress: false,
		model: {
			name: "",
			email: "",
			profession: "",
			professionXp: "",
			schooling: null,
			mission: null,
			annualIncome: null,
		},
		schema: {
			fields: [
				{
					type: "input",
					inputType: "text",
					label: "Nome completo",
					model: "name",
				},
				{
					type: "input",
					inputType: "text",
					label: "E-mail",
					model: "email",
				},
				{
					type: "input",
					inputType: "text",
					label: "Profissão",
					model: "profession",
				},
				{
					type: "input",
					inputType: "number",
					placeholder: "em anos",
					label: "Tempo de experiência na profissão",
					model: "professionXp",
				},
				{
					type: "select",
					values: [
						"Ensino Fundamental",
						"Ensino Médio",
						"Ensino Técnico",
						"Tecnologo",
						"Superior",
					],
					model: "schooling",
					selectOptions: {
						noneSelectedText: 'Selecione um nível escolar'
					},
					label: 'Escolaridade'
				},
				{
					type: "select",
					values: [
						"Turismo",
						"Reniões/Oportunidades de negócios",
						"Estudo (língua)",
						"Estudo (universidade)",
						"Tranferência de emprego",
					],
					model: "mission",
					selectOptions: {
						noneSelectedText: 'Selecione um objetivo'
					},
					label: 'Qual é o objetivo indo para os Estados Unidos?'
				},
				{
					type: "select",
					values: ["0-13k", "13k-26k", "26k-52k", "52k-104k", "acima de 104k"],
					model: "annualIncome",
					selectOptions: {
						noneSelectedText: 'Selecione uma renda'
					},
					label: 'Renda anual'
				}
			]
		}
	}),
	methods: {
		submit() {
			this.inProgress = true
			setTimeout(()=> {this.inProgress = false}, 2500)
		}
	}
};
</script>

<style lang="scss">
@import "../assets/scss/colors.scss";

h1 {
	color: $dark-blue;
	text-align: center; 
	margin-top: 70px;
	font-size: 45px;
	margin-bottom: 35px;
}

.form { 
	max-width: 65%;
	margin: 0 auto;
	.vue-form-generator {
		fieldset {
			border: none;
		}
	} 

	button {
		background-color: $dark-blue !important;
		color: white !important;
		margin: auto; 
	}

	.progress-bar {
		width: 25%;
		margin: 0 auto;
	} 
}
</style>
