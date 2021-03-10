<template>
    <div id="app" style="height: 100%">
        <v-map :zoom="zoom" :center="center">
            <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
            <v-marker :lat-lng="marker"></v-marker>
        </v-map>
    </div>
</template>

<script>
  import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
  import L from 'leaflet';
  
  export default {
    props: ["location"],
    data() {
      return {
        zoom: 16,
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        marker: L.latLng(30.2792953, 120.1198430)
      }
    },
    components: {
      'v-map': LMap,
      'v-tilelayer': LTileLayer,
      'v-marker': LMarker
    },
    mounted(){
      this.$watch('location', location => {
        this.center = location;
        this.$forceUpdate();
      })
    }
  }
</script>