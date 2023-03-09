<template>
	<div class="otherInfos">
		<div class="windSpeed">
			<i class="fa-solid fa-wind"></i> <strong>{{ (windSpeed.toFixed(0)) + " Km/h" }}</strong>
		</div>
		<div class="flagCountry">
			<img :src="flagImage" alt="Flag Image">
		</div>
		<div class="humidity">
			<i class="fa-solid fa-water"></i> <strong>{{ humidity + "%" }}</strong>
		</div>
	</div>
</template>

<script scoped>
export default {
	name: "OtherInfos",
	props: ["windSpeed", "humidity", "flagImage"]
}
</script>

<style scoped>
.otherInfos {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	border: 2px solid #fff;
	border-radius: 10px;
	padding: 10px;
	margin-top: 20px;
}

.flagCountry {
	margin: 0px 20px 0px 20px;
}

.windSpeed, .humidity {
	color: #fff;
	font-size: 1.2rem;
}

.humidity i {
	background-color: #0059ff;
	color: rgb(173, 215, 255);
}
</style>