<template>
    <div id="app" style="height: 100%">
      <template v-if="this.marker !== null && this.center !== null">
        <v-map :zoom="zoom" :center="center">
          <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
          ` <v-marker :lat-lng="marker" :icon="defaultIcon"></v-marker>
        </v-map>
      </template>
    </div>
</template>

<script>
  import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
  import L from 'leaflet';

  export default {
    data() {
      return {
        defaultIcon: L.icon({
          iconUrl: require('../assets/dogoo-marker.png'),
        }),
        mounted: false,
        zoom: 16,
        center: null,
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        marker: null,
      }
    },

    computed: {
      getCurrentPosition() {
        return this.$store.getters.getCurrentPosition;
      },
    },

    watch: {
      getCurrentPosition(newValue) {
        this.setPosition(newValue);
      },
    },

    methods: {
      setPosition(newValue){
        this.center = [newValue.latitude, newValue.longitude];
        this.marker = L.latLng(newValue.latitude, newValue.longitude);
      }
    },

    components: {
      'v-map': LMap,
      'v-tilelayer': LTileLayer,
      'v-marker': LMarker
    },

    mounted(){
      this.$store.dispatch('actionCurrentPosition');
      this.mounted = true;
    }
  }
</script>
