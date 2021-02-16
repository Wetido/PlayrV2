import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import Store from './store/store';

Vue.config.productionTip = false;

new Vue({
  router,
  Store,
  render(h) { return h(App); },
}).$mount('#app');
