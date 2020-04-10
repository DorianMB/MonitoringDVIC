<template>
  <div>
    <navbar :fixed="'bottom'"></navbar>
    <div class="connexion d-flex flex-column align-items-center">
      <img class="mar-t-14 mar-b-4" src="../assets/images/logo-white.png" />
      <div class="card-layout d-flex flex-column align-items-center">
        <h1 class="mar-b-0">Connexion</h1>
        <div class="group-input-label mar-t-2">
          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            class="form-control"
          />
        </div>
        <div class="group-input-label mar-t-3">
          <label for="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            placeholder="Mot de passe"
            class="form-control"
          />
        </div>
        <button class="btn btn-primary mar-t-4">Se connecter</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar";

export default {
  name: "Connexion",
  components: { Navbar }
};
</script>

<style scoped lang="scss">
.connexion {
  width: 100vw;
  height: 100vh;
  background: url("../assets/images/bg-connexion.png") no-repeat top left;
  background-size: contain;
}

.card-layout {
  width: 28%;
  .btn-primary {
    width: 60%;
  }
}
</style>
