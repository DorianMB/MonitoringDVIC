import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Toasted from 'vue-toasted';
import VModal from 'vue-js-modal';

Vue.use(Toasted);

Vue.use(VModal, { dynamic: true, dynamicDefaults: { clickToClose: false } })


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
