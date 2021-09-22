<template>
	<div class="wrapper">
		<input
			v-maska="schema.mask"
			v-model="value"
			:disabled="schema.disabled"
			class="form-control"
		/>
	</div>
</template>
<script>
import { abstractField } from "vue-form-generator";
import _ from "lodash";
export default {
	mixins: [abstractField],
	name: "field-maskinput",
	props: ["field"],
	mounted() {
		if (this.schema.initValue)
			_.set(this.model, this.schema.model, this.schema.initValue());
	},
};
</script>
