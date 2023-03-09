<template>
	<div class="search">
		<input type="text" placeholder="Search for cities..." v-model="city">
		<button @click="search">
			<i class="fa-solid fa-magnifying-glass"></i>
		</button>
	</div>
</template>

<script>
export default {
	name: "SearchApp",
	props: ["searchFunction"],
	data() {
		return {
			city: null
		}
	},
	methods: {
		search() {
			this.searchFunction(this.city);
		}
	}
}
</script>

<style scoped>
.search {
	display: flex;
	justify-content: center;
}

.search input {
	width: 100%;
	padding: 7px;
	font-size: 1rem;
	border-radius: 5px;
	border: 2px solid #ffff;
	background-color: transparent;
	outline: none;
	transition: all ease 100ms;
}

.search input::placeholder {
	color: #fff;
}

.search input:focus {
	background-color: #ffffff17;
}

.search button {
	margin-left: 10px;
	padding: 7px;
	border-radius: 10px;
	border: 2px solid #ffff;
	background-color: transparent;
	outline: none;
	color: #fff;
	cursor: pointer;
	transition: all ease 100ms;
}

.search button:hover {
	transform: scale(1.1);
}

.search button:active {
	background-color: #ffffff4b;
	transform: scale(1);
}
</style>