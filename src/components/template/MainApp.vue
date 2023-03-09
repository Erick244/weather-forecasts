<template>
	<!-- Criar uma variavel "loading" usando o Vuex para mostrar e sumir o skeletonPage -->
	<main class="main" v-if="!$store.state.loading">
		<CountryInfos :cityName="forecastData.name" :country="forecastData.sys.country" />
		<DayTime :icon="forecastData.weather[0].icon" :skyState="forecastData.weather[0].main"
			:cityName="forecastData.name" :timezone="forecastData.timezone"/>
		<SearchApp :searchFunction="getWeatherForecasts" />
		<ForecastInfos :minTemp="forecastData.main.temp_min" :maxTemp="forecastData.main.temp_max"
			:currentTemp="forecastData.main.temp" />
		<OtherInfos :windSpeed="forecastData.wind.speed" :humidity="forecastData.main.humidity" :flagImage="flagImageUrl" />
	</main>
	<SkeletonPage v-else />
</template>

<script>
import CountryInfos from '../view/CountryInfos.vue';
import DayTime from '../view/DayTime.vue';
import SearchApp from '../view/SearchApp.vue';
import ForecastInfos from "../view/ForecastInfos.vue";
import OtherInfos from "../view/OtherInfos.vue";
import SkeletonPage from "./SkeletonPage.vue";
import axios from "axios";
import { WEATHER_FORECASTS_TOKEN } from "@/config/.env";

export default {
	name: "MainApp",
	components: {
		CountryInfos,
		DayTime,
		SearchApp,
		ForecastInfos,
		OtherInfos,
		SkeletonPage
	},
	data() {
		return {
			forecastData: {},
			flagImageUrl: ""
		}
	},
	methods: {
		getGeolocation() {
			this.$store.commit('setLoading', true);
			const getCurrentPositionHandler = async (loc) => {
				const lat = loc.coords.latitude;
				const lon = loc.coords.longitude;
				const geolocationUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${WEATHER_FORECASTS_TOKEN}`;
				const resp = await axios.get(geolocationUrl);
				const data = await resp.data;
				const cityName = data[0].name;
				this.getWeatherForecasts(cityName);
			}
			navigator.geolocation.getCurrentPosition(getCurrentPositionHandler, () => {
				this.getWeatherForecasts("New York");
			});
		},
		async getWeatherForecasts(cityName) {
			if (!cityName) {
				this.getGeolocation();
				return;
			}

			try {
				this.$store.commit('setLoading', true);
				const weatherForecastsUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${WEATHER_FORECASTS_TOKEN}&lang=pt_br`;

				const resp = await axios.get(weatherForecastsUrl);
				const data = await resp.data;
				this.flagImageUrl = `https://flagsapi.com/${data.sys.country}/flat/64.png`;
				this.forecastData = await data;
				this.$store.commit('setLoading', false);
			} catch (err) {
				this.$store.commit('setLoading', false);
			}

		}
	},
	created() {
		this.getGeolocation();
	}
}
</script>

<style scoped>
.main {
	max-width: 500px;
	padding: 50px;
	background-color: #ffffff6c;
	border-radius: 10px;
	box-shadow: 0px 4px 7px #00000073;
}
</style>