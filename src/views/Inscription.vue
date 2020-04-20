<template>
  <div>
    <navbar></navbar>
    <div
      class="inscription d-flex flex-column justify-content-center align-items-center"
    >
      <div
        id="inscription-card"
        class="card-layout d-flex flex-column align-items-center"
      >
        <h1 class="mar-b-0">Inscription</h1>
        <div
          v-if="currentStep === 1"
          id="step1"
          class="w-100 d-flex flex-column align-items-center"
        >
          <div class="group-input-label mar-t-2">
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              class="form-control"
              v-model="user.email"
            />
          </div>
          <div class="group-input-label mar-t-3">
            <label for="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              placeholder="Mot de passe"
              class="form-control"
              v-model="user.password"
            />
          </div>
          <div class="group-input-label mar-t-3">
            <label for="confirmPassword">Confirmer le mot de passe</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirmer le mot de passe"
              class="form-control"
            />
          </div>
        </div>
        <div
          v-else-if="currentStep === 2"
          id="step2"
          class="w-100 d-flex flex-column align-items-center"
        >
          <div class="group-input-label mar-t-2">
            <label for="firstname">Prénom du gérant</label>
            <input
              type="text"
              id="firstname"
              placeholder="Prénom"
              class="form-control"
              v-model="account.firstname"
            />
          </div>
          <div class="group-input-label mar-t-3">
            <label for="lastname">Nom du gérant</label>
            <input
              type="text"
              id="lastname"
              placeholder="Nom"
              class="form-control"
              v-model="account.lastname"
            />
          </div>
          <div class="group-input-label mar-t-3">
            <label for="phone">Numéro de téléphone</label>
            <input
              type="text"
              id="phone"
              placeholder="Téléphone"
              class="form-control"
              v-model="account.phone"
            />
          </div>
        </div>
        <div
          v-else-if="currentStep === 3"
          id="step3"
          class="w-100 d-flex flex-column align-items-center"
        >
          <div class="group-input-label mar-t-2">
            <label for="companyName">Nom de l'entreprise</label>
            <input
              type="text"
              id="companyName"
              placeholder="Nom de l'entreprise"
              class="form-control"
              v-model="account.companyName"
            />
          </div>
          <div class="group-input-label mar-t-3">
            <label for="companyAddress">Adresse de l'entreprise</label>
            <input
              type="text"
              id="companyAddress"
              placeholder="Adresse de l'entreprise"
              class="form-control"
              v-model="account.companyAddress"
            />
          </div>
          <div class="group-input-label mar-t-3">
            <label for="siret">Numéro de Siret</label>
            <input
              type="text"
              id="siret"
              placeholder="Numéro de Siret"
              class="form-control"
              v-model="account.siret"
            />
          </div>
        </div>
        <div
          v-else-if="currentStep === 4"
          id="step4"
          class="w-100 d-flex flex-column align-items-center"
        >
          <div class="w-75 mar-t-3 row">
            <button
              class="btn offset-1 col-4"
              @click="priceByMonth = true"
              :class="priceByMonth ? 'btn-primary' : 'btn-outline-primary'"
            >
              Mois
            </button>
            <button
              class="btn offset-2 col-4"
              @click="priceByMonth = false"
              :class="!priceByMonth ? 'btn-primary' : 'btn-outline-primary'"
            >
              Année
            </button>
          </div>
          <div class="w-100 mar-t-5 mar-b-2 row" v-if="priceByMonth">
            <button
              class="card-layout col d-flex flex-column align-items-center"
              @click="priceChoice = 'month1'"
              :class="priceChoice === 'month1' ? 'price-choice' : ''"
            >
              <h3>Auto-entrepreneur</h3>
              <div>
                <span class="color-primary fs-24">25</span>
                <span class="color-black fs-18"> € </span>
                <span class="color-secondary fs-11">/ mois</span>
              </div>
            </button>
            <button
              class="card-layout col d-flex flex-column align-items-center"
              @click="priceChoice = 'month2'"
              :class="priceChoice === 'month2' ? 'price-choice' : ''"
            >
              <h3>PME</h3>
              <div>
                <span class="color-primary fs-24">100</span>
                <span class="color-black fs-18"> € </span>
                <span class="color-secondary fs-11">/ mois</span>
              </div>
            </button>
          </div>
          <div class="w-100 mar-t-5 mar-b-2 row" v-if="!priceByMonth">
            <button
              class="card-layout col d-flex flex-column align-items-center"
              @click="priceChoice = 'year1'"
              :class="priceChoice === 'year1' ? 'price-choice' : ''"
            >
              <h3>Auto-entrepreneur</h3>
              <div>
                <span class="color-primary fs-24">300</span>
                <span class="color-black fs-18"> € </span>
                <span class="color-secondary fs-11">/ année</span>
              </div>
            </button>
            <button
              class="card-layout col d-flex flex-column align-items-center"
              @click="priceChoice = 'year2'"
              :class="priceChoice === 'year2' ? 'price-choice' : ''"
            >
              <h3>PME</h3>
              <div>
                <span class="color-primary fs-24">1200</span>
                <span class="color-black fs-18"> € </span>
                <span class="color-secondary fs-11">/ année</span>
              </div>
            </button>
          </div>
        </div>
        <button
          v-if="currentStep !== 4"
          class="btn btn-primary mar-t-4"
          @click="nextStep()"
        >
          Suivant
        </button>
        <button v-else class="btn btn-primary mar-t-4" @click="validSignUp">
          Valider
        </button>
        <stepper
          :steps="4"
          :active-step="currentStep"
          @newStep="updateStep"
        ></stepper>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar";
import Stepper from "@/components/Stepper";
import ToastService from "@/services/toast.service";

export default {
  name: "Inscription",
  components: { Stepper, Navbar },
  data: () => {
    return {
      toastService: new ToastService(),
      currentStep: 1,
      priceByMonth: true,
      priceChoice: null,
      user: {
        id: 1,
        email: null,
        password: null
      },
      account: {
        id: 1,
        userId: 1,
        firstname: null,
        lastname: null,
        phone: null,
        companyName: null,
        companyAddress: null,
        siret: null,
        offer: null
      }
    };
  },
  watch: {
    currentStep(newValue) {
      if (newValue === 4) {
        const card = document.getElementById("inscription-card");
        card.style.width = "40%";
      }
    },
    priceChoice(newValue) {
      this.account.offer = newValue;
    }
  },
  methods: {
    nextStep() {
      this.currentStep++;
    },
    updateStep(value) {
      this.currentStep = value;
    },
    validSignUp() {
      const resUser = Object.keys(this.user).find(key => {
        if (this.user[key] === null) {
          return true;
        }
      });
      const resForm = Object.keys(this.account).find(key => {
        if (this.account[key] === null) {
          return true;
        }
      });
      if (resUser || resForm) {
        this.toastService.showToast(
          this,
          "Toute les informations n'ont pas été remplies",
          "toast-danger",
          "Ok"
        );
      } else {
        const users = JSON.parse(localStorage.users);
        const accounts = JSON.parse(localStorage.accounts);
        users.forEach(user => {
          user ? this.user.id++ : null;
        });
        accounts.forEach(account => {
          account ? this.account.id++ : null;
        });
        this.account.userId = this.user.id;
        users.push(this.user);
        accounts.push(this.account);
        localStorage.users = JSON.stringify(users);
        localStorage.accounts = JSON.stringify(accounts);
        this.toastService.showToast(
          this,
          "Votre compte viens d'être créé",
          "toast-success",
          "Ok"
        );
        this.$router.push({ name: "Connexion" });
      }
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
