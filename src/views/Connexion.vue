<template>
  <div>
    <navbar :logo="true"></navbar>
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
        <button class="btn btn-primary mar-t-4" v-on:click="testConnexion">
          Se connecter
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar";

export default {
  name: "Connexion",
  components: { Navbar },
  data: () => {
    return {
      credentials: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    getToastOptions(className, actionText) {
      return {
        theme: "outline",
        className: className,
        position: "top-center",
        fullWidth: true,
        action: {
          text: actionText,
          onClick: (e, toastObject) => {
            toastObject.goAway(0);
          }
        },
        duration: 4000
      };
    },
    testConnexion() {
      const users = JSON.parse(localStorage.users);
      const res = users.find(
        user =>
          user.email === this.credentials.email &&
          user.password === this.credentials.password
      );
      if (res) {
        this.$toasted.show(
          "Connection réussie",
          this.getToastOptions("toast-success", "Ok")
        );
        localStorage.currentUser = JSON.stringify(res);
        this.$router.push({ name: "ConnectedHome" });
      } else {
        this.$toasted.show(
          "Une erreur est survenue",
          this.getToastOptions("toast-danger", "Ok")
        );
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
