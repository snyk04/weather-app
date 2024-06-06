import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: localStorage.getItem('city') || '',
    weather: null
  },
  mutations: {
    setCity(state, city) {
      state.city = city;
      localStorage.setItem('city', city);
    },
    setWeather(state, weather) {
      state.weather = weather;
    }
  },
  actions: {
    fetchWeather({ commit, state }) {
      if (state.city) {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${state.city}&appid=12f3d4957357da3982fa4139e043fb83`)
          .then(response => {
            commit('setWeather', response.data);
          })
          .catch(error => {
            console.error('Error fetching weather data:', error);
          });
      }
    }
  },
  modules: {}
});
