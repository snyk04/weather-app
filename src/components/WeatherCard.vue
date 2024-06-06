<template>
  <div class="weather-card">
    <h2>{{ weather.name }}</h2>
    <p>{{ weather.weather[0].description }}</p>
    <p>Temperature: {{ weather.main.temp }}°C</p>
    <p>Humidity: {{ weather.main.humidity }}%</p>
    <p>Wind Speed: {{ weather.wind.speed }} m/s</p>
    <img :src="weatherIconUrl" :alt="weather.weather[0].description" />
  </div>
</template>

<script>
export default {
  name: 'WeatherCard',
  props: {
    weather: Object
  },
  computed: {
    weatherIconUrl() {
      return `http://openweathermap.org/img/w/${this.weather.weather[0].icon}.png`;
    }
  }
};
</script>

<style scoped>
.weather-card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}
.weather-card img {
  width: 50px;
  height: 50px;
}
</style>
