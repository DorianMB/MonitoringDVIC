import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Connexion from "../views/Connexion.vue";
import Inscription from "../views/Inscription.vue";
import ConnectedHome from "../views/ConnectedHome.vue";

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
  },
  {
    path: "/homepage",
    name: "ConnectedHome",
    component: ConnectedHome,
    beforeEnter: (to:any, from:any, next:any) => {
      if (!localStorage.currentUser) next({ name: 'Connexion' });
      else next();
    }
  }
];

const router = new VueRouter({
  linkExactActiveClass: 'btn-navbar-active',
  routes: routes
});

export default router;
