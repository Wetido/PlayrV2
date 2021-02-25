<template>
  <div id="mapContainer"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
export default {
  name: "Map",
  data() {
    return {
      center: [38.63, -90.23],
    };
  },
  methods: {
    setupLeafletMap: function () {
      L.map("mapContainer").setView(this.center, 13);
    },
  },
  mounted() {
    this.setupLeafletMap();
  },
};
</script>

<style>
#mapContainer {
  width: 80vw;
  height: 100vh;
}
</style>
