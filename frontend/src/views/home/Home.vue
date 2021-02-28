<template>
  <div class="home">
    <div class="grid-container">
      <div class="left-column"></div>
      <div class="right-column">
        <Map></Map>
      </div>
    </div>
  </div>
</template>

<script>
import Map from '../../components/Map'
import "leaflet/dist/leaflet.css";

export default {

  components: {
    Map
  },
  name: "Home",
};
</script>
