import Vue from 'vue';
import VueParallaxJs from 'vue-parallax-js';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueParallaxJs);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
