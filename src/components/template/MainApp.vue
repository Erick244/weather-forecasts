<template>
	<main class="main">
		<ContryInfos />
		<DayTime />
		<SearchApp />
		<ForecastInfos />
		<OtherInfos />
	</main>
</template>

<script>
import ContryInfos from '../view/ContryInfos.vue';
import DayTime from '../view/DayTime.vue';
import SearchApp from '../view/SearchApp.vue';
import ForecastInfos from "../view/ForecastInfos.vue";
import OtherInfos from "../view/OtherInfos.vue";

export default {
	name: "MainApp",
	components: {
		ContryInfos,
		DayTime,
		SearchApp,
		ForecastInfos,
		OtherInfos
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