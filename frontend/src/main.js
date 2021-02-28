import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import L from 'leaflet';

Vue.config.productionTip = false

Vue.use(L);

new Vue({
  router,
  store,
  L,
  render: function (h) { return h(App) }
}).$mount('#app')
