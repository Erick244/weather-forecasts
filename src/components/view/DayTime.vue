<template>
	<div class="dayTime">
		<div class="containerImage">
			<img :src="forecastImageUrl" alt="Forecast Image">
		</div>
		<p class="infos">{{ skyState }}, {{ hours }}</p>
	</div>
</template>

<script>
import { baseForecastIconAPI } from "@/config/globals";

export default {
	name: "DayTime",
	props: ["icon", "skyState"],
	data() {
		return {
			forecastImageUrl: `${baseForecastIconAPI}/${this.icon}@2x.png`,
			hours: new Date().getHours()
		}
	},
	methods: {
		getHours() {
			const date = new Date();
			const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
			const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
			let hours = `${hour}:${minutes}`;
			hour > 0 && hour < 12 ? hours += "AM" : hours += "PM";
			this.hours = hours;
		}
	},
	mounted() {
		this.getHours();
	}
}
</script>

<style>
.dayTime {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.dayTime .containerImage {
	width: 100px;
	height: 100px;
	margin: 20px;
	border: 2px solid #fff;
	border-radius: 10px;
	box-shadow: 0px 0px 10px inset #ffffff52;
}

.dayTime .infos {
	margin-bottom: 10px;
}
</style>