<template>
  <div id="app">
    <nav>
      <router-link to="/">Print</router-link> |
      <router-link to="/scan">Scan</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav a.router-link-exact-active {
  color: #000;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  pointer-events: none;
}
</style>
