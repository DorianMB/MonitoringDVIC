<template>
  <div>
    <navbar :fixed="'top'"></navbar>
    <div class="home">
      <img class="mar-t-14" src="../assets/images/logo-white.png"/>
      <div class="row mar-t-16">
        <p class="offset-2 col-8 text-center color-white">Le site de monitoring d’entreprise spécialement consue pour les PME et les auto-entrepreneurs.
          Un outil ergonomique et facile a prendre en main. Renseignez vos client et vos missions pour un suivi centralisé.
          Suivre l’évolution de votre entreprise n’aura jamais été aussi simple !</p>
      </div>
      <div class="row mar-t-16">
        <div class="offset-2 col-8">
          <button class="btn btn-xl btn-outline-primary">Connexion</button>
          <button class="btn btn-xl btn-primary ml-5">Inscription</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar";

export default {
  name: "Home",
  components: { Navbar },
  data: () => {
    return {
      height: window.innerHeight
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    const navbar = document.getElementById("navbar");
    navbar.classList.add("d-none");
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      const navbar = document.getElementById("navbar");

      if (event.path[1].pageYOffset >= this.height) {
        navbar.classList.remove("d-none");
      } else {
        navbar.classList.add("d-none");
      }
    }
  }
};
</script>

<style scoped>
.home {
  height: 3000px;
  background: url("../assets/images/bg-top-home.png") no-repeat top center,
  url("../assets/images/bg-bottom-home.png") no-repeat bottom center;
  background-size: contain;

}
</style>
