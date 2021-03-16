<template>
  <div class="home">
    <div v-show="isLoged" class="grid-container">
      <div class="left-column"></div>
      <div class="right-column">
        <Map :location="center"></Map>
      </div>
    </div>
    <div v-show="!isLoged">
      <NotSignedIn />
    </div>
  </div>
</template>

<script>
import Map from "../../components/Map";
import NotSignedIn from "../../components/notSignedIn/NotSignedIn";
import "leaflet/dist/leaflet.css";

export default {
  name: "Home",
  data() {
    return {
      isLoged: false,
      center: []
    };
  },

  components: {
    Map,
    NotSignedIn
  },

  mounted() {
    if (this.isLoged) {
      const socket = new WebSocket("ws://localhost:8010");
      socket.onopen = () => {
        console.log("lacze");
      };
    }
  },

  beforeCreate() {
    if (this.$store.getters.getAuthStatus === "success") {
      this.isLoged = true;
    }
  }
};
</script>
<style scoped></style>
