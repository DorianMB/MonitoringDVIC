<template>
  <div>
    <navbar :logo="true"></navbar>
    <div class="inscription d-flex flex-column justify-content-center align-items-center">
      <div class="card-layout d-flex flex-column align-items-center">
        <h1 class="mar-b-0">Inscription</h1>
        <div v-if="currentStep === 1" id="step1" class="w-100 d-flex flex-column align-items-center">
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
          <div class="group-input-label mar-t-3">
            <label for="password">Confirmer le mot de passe</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirmer le mot de passe"
              class="form-control"
            />
          </div>
        </div>
        <div v-else-if="currentStep === 2" id="step2" class="w-100 d-flex flex-column align-items-center">
          <div class="group-input-label mar-t-2">
            <label for="firstname">Prénom du gérant</label>
            <input
              type="text"
              id="firstname"
              placeholder="Prénom"
              class="form-control"
            />
          </div>
          <div class="group-input-label mar-t-3">
            <label for="lastname">Nom du gérant</label>
            <input
              type="text"
              id="lastname"
              placeholder="Nom"
              class="form-control"
            />
          </div>
          <div class="group-input-label mar-t-3">
            <label for="phone">Numéro de téléphone</label>
            <input
              type="text"
              id="phone"
              placeholder="Téléphone"
              class="form-control"
            />
          </div>
        </div>
        <button class="btn btn-primary mar-t-4" v-on:click="nextStep()">Suivant</button>
        <stepper :steps="4" :active-step="currentStep" @newStep="updateStep"></stepper>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar";
import Stepper from "@/components/Stepper";

export default {
  name: "Inscription",
  components: {Stepper, Navbar},
  data: () => {
    return {
      currentStep: 1
    };
  },
  methods: {
    nextStep() {
      this.currentStep ++;
    },
    updateStep(value) {
      this.currentStep = value;
    }
  }
};
</script>

<style scoped lang="scss">
  .inscription {
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
