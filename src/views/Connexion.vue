<template>
  <div>
    <navbar></navbar>
    <div
      class="connexion d-flex flex-column justify-content-center align-items-center"
    >
      <div class="card-layout d-flex flex-column align-items-center">
        <h1 class="mar-b-0">Connexion</h1>
        <div class="group-input-label mar-t-2">
          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            class="form-control"
            v-model="credentials.email"
          />
        </div>
        <div class="group-input-label mar-t-3">
          <label for="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            placeholder="Mot de passe"
            class="form-control"
            v-model="credentials.password"
          />
        </div>
        <button class="btn btn-primary mar-t-4" @click="testConnexion">
          Se connecter
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar";
import ToastService from "@/services/toast.service";

export default {
  name: "Connexion",
  components: { Navbar },
  data: () => {
    return {
      credentials: {
        email: null,
        password: null,
        toastService: new ToastService()
      }
    };
  },
  methods: {
    testConnexion() {
      const users = JSON.parse(localStorage.users);
      const res = users.find(
        user =>
          user.email === this.credentials.email &&
          user.password === this.credentials.password
      );
      if (res) {
        this.toastService.showToast(this, "Connection réussie", "toast-success", "Ok");
        localStorage.currentUser = JSON.stringify(res);
        this.$router.push({ name: "ConnectedHome" });
      } else {
        this.toastService.showToast(this, "Une erreur est survenue", "toast-danger", "Ok");
      }
    }
  }
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
