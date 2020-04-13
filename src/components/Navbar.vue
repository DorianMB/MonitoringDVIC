<template>
  <div class="navbar fixed-top" id="navbar">
    <router-link v-if="!currentUser" tag="button" to="/" class="btn btn-navbar color-black">
      Accueil
    </router-link>
    <router-link v-else tag="button" to="/homepage" class="btn btn-navbar color-black">
      Accueil
    </router-link>
    <button href="/" class="mar-l-18 btn btn-navbar navbar-logo"></button>
    <div v-if="!currentUser" class="h-100">
      <router-link tag="button" to="/connexion" class="btn btn-navbar color-black">Connexion</router-link>
      <router-link tag="button" to="/inscription" class="btn btn-navbar color-black">Inscription</router-link>
    </div>
    <div v-else id="account-menu" class="h-100 d-flex justify-content-center align-items-center">
      <div class="dropdown h-100">
        <button class="btn btn-navbar dropdown-toggle d-flex justify-content-center align-items-center" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <div>{{ currentUser.email }}</div>
          <div id="profil-picture" class="profil-picture mar-l-2 mar-r-2"></div>
        </button>
        <div class="dropdown-menu dropdown-menu-lg-right" aria-labelledby="dropdownMenu2">
          <button class="dropdown-item" type="button" v-on:click="logOut">Deconnexion</button>
          <button class="dropdown-item" type="button">Profil</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: {
    currentUser: {
      type: Object,
      default: null
    }
  },
  mounted() {
    let url = "https://i.stack.imgur.com/l60Hf.png";
    if (this.currentUser.profilePicture) {
      url = this.currentUser.profilePicture;
    }
    const element = document.getElementById("profil-picture");
    element.style.background = "url(" + url + ") center center no-repeat";
    element.style.backgroundSize = "cover";
  },
  methods: {
    logOut() {
      localStorage.removeItem("currentUser");
      this.$router.push({ name: "Connexion" });
    }
  }
};
</script>

<style scoped>
  .navbar-logo {
    background-image: url("../assets/images/logo-colors.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
  }

  #account-menu {
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    width: 25%;
  }
</style>
