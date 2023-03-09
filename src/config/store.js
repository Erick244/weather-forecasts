import { createStore } from "vuex";

export default createStore({
	state: {
		loading: true
	},
	mutations: {
		setLoading(state, value) {
			state.loading = value;
		}
	}
})