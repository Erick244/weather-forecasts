<template>
	<div class="countryInfos">
		<div class="date">
			Seg, 10/2/2022
		</div>
		<div class="city">
			{{ cityName }}, {{ countryFlag }}
		</div>
	</div>
</template>

<script>
export default {
	name: "CountryInfos",
	props: ["cityName", "countryFlag"]
}
</script>

<style></style>