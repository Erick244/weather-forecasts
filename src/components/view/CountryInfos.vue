<template>
	<div class="countryInfos">
		<div class="date">
			{{ getDate }}
		</div>
		<div class="city">
			{{ cityName }}, {{ country }}
		</div>
	</div>
</template>

<script>
export default {
	name: "CountryInfos",
	props: ["cityName", "country"],
	data() {
		return {
			date: ""
		}
	},
	computed: {
		getDate() {
			const date = new Date();
			let weekDay = date.getDay();
			switch (weekDay) {
				case 1:
					weekDay = "Seg";
					break;
				case 2:
					weekDay = "Ter";
					break;
				case 3:
					weekDay = "Qua";
					break;
				case 4:
					weekDay = "Qui";
					break;
				case 5:
					weekDay = "Sex";
					break;
				case 6:
					weekDay = "Sab";
					break;
				case 7:
					weekDay = "Dom";
					break;
			}
			const day = date.getDate();
			const mouth = date.getMonth();
			const year = date.getFullYear();
			
			return `${weekDay}, ${day}/${mouth}/${year}`;
		}
	}
}
</script>

<style scoped>
.countryInfos {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	color: #fff;
}

.countryInfos .date {
	margin-right: 20px;
}
</style>