<template>
	<main class="main">
		<div class="countryInfos">
			<div class="date">
			</div>
			<div class="city">
			</div>
		</div>
		<div class="dayTime">
			<div class="containerImage">
			</div>
			<p class="infos"></p>
		</div>
		<div class="search">
			<div class="input">
			</div>
			<div class="inputButton">
			</div>
		</div>
		<div class="forecastInfos">
			<div class="minTemperature">
			</div>
			<div class="currentTemperature">
			</div>
			<div class="maxTemperature">
			</div>
		</div>
		<div class="otherInfos">
			<div class="windSpeed">
			</div>
			<div class="flagCountry">
			</div>
			<div class="humidity">
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: "SkeletonPage"
}
//#30303033
</script>

<style scoped>
.countryInfos {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}

.countryInfos div {
	width: 150px;
	height: 10px;
	background-color: #30303033;
}

.countryInfos .date {
	margin-right: 20px;
}

.dayTime {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.dayTime .containerImage {
	width: 100px;
	height: 100px;
	margin: 20px;
	background-color: #30303033;
	border-radius: 10px;
}

.dayTime .infos {
	width: 100px;
	height: 10px;
	background-color: #30303033;
	margin-bottom: 10px;
}

.search {
	display: flex;
	justify-content: center;
}

.search .input {
	width: 100%;
	height: 30px;
	border-radius: 5px;
	border: 2px solid #30303033;
	background-color: transparent;
	outline: none;
}

.search .inputButton {
	margin-left: 10px;
	width: 30px;
	height: 30px;
	border-radius: 10px;
	background-color: #30303033;
	outline: none;
}

.forecastInfos {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 20px;
}

.forecastInfos div {
	background-color: #30303033;
	width: 40px;
	height: 40px;
}

.otherInfos {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	border: 2px solid #30303033;
	border-radius: 10px;
	padding: 20px;
	margin-top: 20px;
}

.otherInfos div {
	background-color: #30303033;
	width: 40px;
	height: 40px;
}
</style>