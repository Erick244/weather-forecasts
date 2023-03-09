import { createApp } from 'vue';
import App from './App.vue';
import store from "./config/store";

createApp(App)
	.use(store)
	.mount('#app');
