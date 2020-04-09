<template>
  <div class="navbar">
    <button class="btn btn-navbar-active btn-navbar color-black">
      Accueil
    </button>
    <button class="btn btn-navbar navbar-logo"></button>
    <div class="h-100">
      <button class="btn btn-navbar color-black">Connexion</button>
      <button class="btn btn-navbar color-black">Inscription</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style scoped>
.navbar-logo {
  background-image: url("../assets/images/logo-colors.png");
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
