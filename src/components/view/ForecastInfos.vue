<template>
	<div class="forecastInfos">
		<div class="minTemperature">
			<i class="fa-regular fa-snowflake"></i> <strong class="temp">{{ (minTemp.toFixed(0)) + "°C" }}</strong>
		</div>
		<div class="currentTemperature">
			<strong class="temp">{{ (currentTemp.toFixed(0)) + "°C" }}</strong>
		</div>
		<div class="maxTemperature">
			<i class="fa-sharp fa-solid fa-fire"></i> <strong class="temp">{{ (maxTemp.toFixed(0)) + "°C" }}</strong>
		</div>
	</div>
</template>

<script>
export default {
	name: "ForecastInfos",
	props: ["minTemp", "maxTemp", "currentTemp"]
}
</script>

<style scoped>
.forecastInfos {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 20px;
}

.forecastInfos .temp {
	color: #fff;
	font-size: 1.4rem;
	text-shadow: 0px 0px 1px #000;
	
}

.forecastInfos .currentTemperature .temp {
	font-size: 2rem;
}

.forecastInfos .minTemperature {
	color: aqua;
	text-shadow: 0px 0px 1px #00000063;
}

.forecastInfos .maxTemperature {
	color: crimson;
	text-shadow: 0px 0px 1px #000;
}
</style>