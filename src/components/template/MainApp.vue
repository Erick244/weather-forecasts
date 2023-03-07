<template>
	<main class="main">
		<CountryInfos :cityName="forecastData.name" :countryFlag="forecastData.sys?.country"/>
		<DayTime />
		<SearchApp />
		<ForecastInfos />
		<OtherInfos />
	</main>
</template>

<script>
import CountryInfos from '../view/CountryInfos.vue';
import DayTime from '../view/DayTime.vue';
import SearchApp from '../view/SearchApp.vue';
import ForecastInfos from "../view/ForecastInfos.vue";
import OtherInfos from "../view/OtherInfos.vue";
import axios from "axios";
import { API_TOKEN } from "@/config/.env";

export default {
	name: "MainApp",
	components: {
		CountryInfos,
		DayTime,
		SearchApp,
		ForecastInfos,
		OtherInfos
	},
	data() {
		return {
			forecastData: {}
		}
	},
	methods: {
		getGeolocation() {
			const getCurrentPositionHandler = async (loc) => {
				const lat = loc.coords.latitude;
				const lon = loc.coords.longitude;
				const geolocationUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_TOKEN}`;
				const resp = await axios.get(geolocationUrl);
				const data = await resp.data;
				const cityName = data[0].name;
				this.getWeatherForecasts(cityName);
			}
			navigator.geolocation.getCurrentPosition(getCurrentPositionHandler);
		},
		getWeatherForecasts(cityName) {
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_TOKEN}&lang=pt_br`;
			axios.get(url)
				.then(resp => this.forecastData = resp.data);
		}
	},
	mounted() {
		this.getGeolocation();
	}
}
</script>

<style>
.main {
	max-width: 1200px;
	padding: 50px;
	background-color: #ffffff6c;
	border-radius: 10px;
	box-shadow: 0px 4px 7px #00000073;
}
</style>