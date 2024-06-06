<template>
  <div>
    <input v-model="city" @keyup.enter="updateCity" placeholder="Enter city" />
    <button @click="updateCity">Get Weather</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'CitySelector',
  data() {
    return {
      city: ''
    };
  },
  methods: {
    ...mapMutations(['setCity']),
    updateCity() {
      if (this.city.trim()) {
        this.setCity(this.city);
        this.$store.dispatch('fetchWeather');
      }
    }
  }
};
</script>

<style scoped>
input {
  padding: 0.5rem;
  margin-right: 0.5rem;
}
button {
  padding: 0.5rem;
}
</style>
