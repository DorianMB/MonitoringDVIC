import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as firebase from 'firebase';

Vue.config.productionTip = false;

const app = firebase.initializeApp({
  apiKey: '<your-api-key>',
  authDomain: '<your-auth-domain>',
  databaseURL: '<your-database-url>',
  projectId: '<your-cloud-firestore-project>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-sender-id>'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
