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
import { TIMEZONE_TOKEN } from "../../config/.env";
import axios from "axios";

export default {
	name: "DayTime",
	props: ["icon", "skyState", "cityName", "timezone"],
	data() {
		return {
			forecastImageUrl: `${baseForecastIconAPI}/${this.icon}@2x.png`,
			hours: null
		}
	},
	methods: {
		async getHours() {
			const resp = await axios.get(`https://timezone.abstractapi.com/v1/current_time?api_key=${TIMEZONE_TOKEN}&location=${this.cityName}`);
			const date = await resp.data;
			const regex = /[0-9]{2}[:][0-9]{2}/; // 0000-00-00 "00:00":00
			let hours = regex.exec(date.datetime)[0];
			const hour = hours.split(":")[0];
			hour > 0 && hour < 12 ? hours += "AM" : hours += "PM";
			this.hours = hours;
		}
	},
	updated() {
		this.getHours();
		this.forecastImageUrl = `${baseForecastIconAPI}/${this.icon}@2x.png`;
	},
	mounted() {
		this.getHours();
	}
}
</script>

<style scoped>
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