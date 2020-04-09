<template>
  <div class="navbar" id="navbar" :class="fixed ? 'fixed-' + fixed : ''">
    <router-link tag="button" to="/" class="btn btn-navbar color-black">
      Accueil
    </router-link>
    <button href="/" class="mar-l-18 btn btn-navbar navbar-logo" v-if="fixed !== 'bottom'"></button>
    <div class="h-100">
      <router-link tag="button" to="/connexion" class="btn btn-navbar color-black">Connexion</router-link>
      <router-link tag="button" to="/inscription" class="btn btn-navbar color-black">Inscription</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: {
    fixed: {
      type: String,
      default: "top"
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
</style>
