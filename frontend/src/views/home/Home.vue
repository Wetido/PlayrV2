<template>
  <div class="home">
    <div v-show="isLoged" class="grid-container">
      <div class="left-column"></div>
      <div class="right-column">
        <Map :location="center"></Map>
      </div>
    </div>
    <div v-show="!isLoged">
      <h1>Musisz się zalogować!</h1>
      <router-link to="/signin">
        <button class="default-button login-redirect-button">
          Przejdź do logowania
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Map from "../../components/Map";
import "leaflet/dist/leaflet.css";

export default {
  name: "Home",
  data() {
    return {
      isLoged: true,
      center: []
    };
  },

  components: {
    Map
  },

  beforeCreate() {
    if (this.$store.getters.getAuthStatus === "success") {
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
