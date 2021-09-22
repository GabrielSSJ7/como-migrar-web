import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		firstStep: {
			email: '',
			name: ''
		}
	},
	mutations: {
		setFEmail(state, email) {
			state.firstStep.email = email
		},
		setFName(state, name) {
			state.firstStep.name = name
		} 
	},
});

export default store
