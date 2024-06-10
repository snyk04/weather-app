<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  background-color: #f8f8f8;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ddd;
}

nav a {
  text-decoration: none;
  color: #333;
  padding: 0.5rem 1rem;
}

nav a:hover {
  background-color: #ddd;
  border-radius: 4px;
}
</style>
