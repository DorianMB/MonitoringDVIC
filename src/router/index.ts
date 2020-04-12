// @ts-ignore
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Connexion from "../views/Connexion.vue";
import Inscription from "../views/Inscription.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/connexion",
    name: "Connexion",
    component: Connexion
  },
  {
    path: "/inscription",
    name: "Inscription",
    component: Inscription
  }
];

const router = new VueRouter({
  linkExactActiveClass: 'btn-navbar-active',
  routes: routes
});

export default router;
