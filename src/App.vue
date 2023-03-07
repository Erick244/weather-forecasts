<template>
	<div class="app">
		<MainApp />
	</div>
</template>

<script>
import MainApp from './components/template/MainApp.vue';
export default {
	name: 'App',
	components: {MainApp}
}
</script>

<style>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: 'Montserrat', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.app {
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(to right, #ad5389, #3c1053);
}
</style>
