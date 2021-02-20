<template>
  <div id="app">
    <div id="nav">
      <p>Robocza nawigacja</p>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/signup">Sign up</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700&display=swap");
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.grid-container {
  display: grid;
  grid-template-columns: 0.5fr 1.6fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  height: 100vh;
}
.left-column {
  background-color: #fff;
}
.right-column {
  background-color: #f3f3f3;
}
</style>
