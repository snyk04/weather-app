<template>
  <div>
    <CitySelector />
    <WeatherCard v-if="weather" :weather="weather" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CitySelector from '../components/CitySelector.vue';
import WeatherCard from '../components/WeatherCard.vue';

export default {
  name: 'Home',
  components: {
    CitySelector,
    WeatherCard
  },
  computed: {
    ...mapState(['weather'])
  },
  methods: {
    ...mapActions(['fetchWeather'])
  },
  created() {
    this.fetchWeather();
  }
};
</script>
