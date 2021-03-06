<template>
  <div class="home">
    <div v-show="isLoged" class="grid-container">
      <div class="left-column"></div>
      <div class="right-column">
        <Map></Map>
      </div>
    </div>
    <di v-show="isLoged === false">
      <h1>Musisz się zalogować!</h1>
      <router-link to="/signin">
        <button class="default-button login-redirect-button">
          Przejdź do logowania
        </button>
      </router-link>
    </di>
  </div>
</template>

<script>
import Map from "../../components/Map";
import "leaflet/dist/leaflet.css";

export default {
  name: "Home",
  data() {
    return {
      isLoged: false,
    };
  },
  components: {
    Map,
  },
  beforeCreate() {
    if (this.$store.authStatus === "success") {
      this.isLoged = true;
    }
  },
};
</script>
<style scoped>
.login-redirect-button {
  background-color: #31c8b6;
  color: white;
  padding: 8px;
}
</style>
