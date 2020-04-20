<template>
  <div>
    <navbar></navbar>
    <div class="home">
      <img class="mar-t-14" src="../assets/images/logo-white.png" />
      <div class="row mar-t-16">
        <p class="offset-2 col-8 text-center color-white fs-16">
          Le site de monitoring d’entreprise spécialement conçue pour les PME et
          les auto-entrepreneurs. Un outil ergonomique et facile à prendre en
          main. Renseignez vos clients et vos missions pour un suivi centralisé.
          Suivre l’évolution de votre entreprise n’aura jamais été aussi simple
          !
        </p>
      </div>
      <div class="row mar-t-16">
        <div class="offset-2 col-8">
          <router-link
            tag="button"
            to="/connexion"
            class="btn btn-xl btn-outline-primary"
            >Connexion</router-link
          >
          <router-link
            tag="button"
            to="/inscription"
            class="btn btn-xl btn-outline-primary ml-5"
          >
            Inscription
          </router-link>
        </div>
      </div>
      <h1 class="color-black mar-t-42">Notre solution</h1>
      <div class="d-flex justify-content-center mar-t-8">
        <div class="card-layout card-info">
          <img
            src="../assets/images/card-company.jpeg"
            class="img-fluid img-card-top"
          />
          <h2>Entreprises</h2>
          <p class="text-center">
            PME ou auto-entrepreuneur, cette solution est faites pour vous !
            Enregistrer vos missions et vos clients dans une seule applications
            pour centraliser le suivis de votre entreprise
          </p>
        </div>
        <div class="card-layout card-info">
          <img
            src="../assets/images/card-stats.jpeg"
            class="img-fluid img-card-top"
          />
          <h2>Statistiques</h2>
          <p class="text-center">
            Grâce aux statistiques fournies par Easy Monitoring, il n’aura
            jamais été aussi simple de suivre l’évolution de votre entreprise.
            Suivez vos missions, vos dépenses et vos rentrés d’argents a tout
            moment.
          </p>
        </div>
        <div class="card-layout card-info">
          <img
            src="../assets/images/card-money.jpeg"
            class="img-fluid img-card-top"
          />
          <h2>Essaie gratuit</h2>
          <p class="text-center">
            En plus d’être un outils ergonomique et simple d’utilisation, Easy
            Monitoring est très abordable. Venez tester notre solution, le
            premier mois est gratuit !
          </p>
        </div>
      </div>
      <h1 class="color-white mar-t-23">Nos prix</h1>
      <div class="row mar-t-6">
        <div class="offset-2 col-8">
          <button
            class="btn btn-lg"
            @click="priceByMonth = true"
            :class="priceByMonth ? 'btn-primary' : 'btn-outline-primary'"
          >
            Mois
          </button>
          <button
            class="btn btn-lg ml-5"
            @click="priceByMonth = false"
            :class="!priceByMonth ? 'btn-primary' : 'btn-outline-primary'"
          >
            Année
          </button>
        </div>
      </div>
      <div
        v-if="priceByMonth"
        id="price-month"
        class="d-flex justify-content-center mar-t-8 pad-b-8"
      >
        <div class="card-layout card-price">
          <h3>Auto-entrepreneur</h3>
          <div>
            <span class="color-primary fs-50">25</span>
            <span class="color-black fs-24"> € </span>
            <span class="color-secondary fs-14">/ mois</span>
          </div>
          <div class="text-center">
            <p><b>1</b> Compte gérant</p>
            <p><b>5</b> Clients par mois</p>
            <p>ou</p>
            <p><b>25</b> Missions par mois</p>
            <p><b>24/7</b> Support</p>
            <p><b>1</b> mois gratuit</p>
          </div>
        </div>
        <div class="card-layout card-price">
          <h3>PME</h3>
          <div>
            <span class="color-primary fs-50">100</span>
            <span class="color-black fs-24"> € </span>
            <span class="color-secondary fs-14">/ mois</span>
          </div>
          <div class="text-center">
            <p><b>2</b> Compte gérant</p>
            <p><b>15</b> Clients par mois</p>
            <p>ou</p>
            <p><b>60</b> Missions par mois</p>
            <p><b>24/7</b> Support</p>
            <p><b>1</b> mois gratuit</p>
          </div>
        </div>
      </div>
      <div
        v-else
        id="price-year"
        class="d-flex justify-content-center mar-t-8 pad-b-8"
      >
        <div class="card-layout card-price">
          <h3>Auto-entrepreneur</h3>
          <div>
            <span class="color-primary fs-50">300</span>
            <span class="color-black fs-24"> € </span>
            <span class="color-secondary fs-14">/ année</span>
          </div>
          <div class="text-center">
            <p><b>1</b> Compte gérant</p>
            <p><b>75</b> Clients par année</p>
            <p>ou</p>
            <p><b>300</b> Missions par année</p>
            <p><b>24/7</b> Support</p>
            <p><b>1</b> mois gratuit</p>
          </div>
        </div>
        <div class="card-layout card-price">
          <h3>PME</h3>
          <div>
            <span class="color-primary fs-50">1200</span>
            <span class="color-black fs-24"> € </span>
            <span class="color-secondary fs-14">/ année</span>
          </div>
          <div class="text-center">
            <p><b>2</b> Compte gérant</p>
            <p><b>200</b> Clients par année</p>
            <p>ou</p>
            <p><b>1000</b> Missions par année</p>
            <p><b>24/7</b> Support</p>
            <p><b>1</b> mois gratuit</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar";
import InitDataService from "@/services/initdata.service";

export default {
  name: "Home",
  components: { Navbar },
  data: () => {
    return {
      initDataService: new InitDataService(),
      height: window.innerHeight,
      width: window.innerWidth,
      priceByMonth: true
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    const navbar = document.getElementById("navbar");
    navbar.classList.add("d-none");
  },
  beforeMount() {
    this.initData();
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      const navbar = document.getElementById("navbar");

      if (event.path[1].pageYOffset >= this.height - 100) {
        navbar.classList.remove("d-none");
        const pourcentage = this.getPourcentage(
          event.path[1].pageYOffset - this.height
        );
        navbar.style.backgroundColor = "red";
        navbar.style.opacity = (pourcentage + 100) / 100;
      } else {
        navbar.classList.add("d-none");
      }
    },
    getPourcentage(number) {
      return number / 1.2;
    },
    initData() {
      this.initDataService.initUsers();
      this.initDataService.initAccounts();
      this.initDataService.initCustomers();
      this.initDataService.initMissions();
    }
  }
};
</script>

<style scoped lang="scss">
.home {
  background: url("../assets/images/bg-top-home.png") no-repeat top center,
    url("../assets/images/bg-bottom-home.png") no-repeat bottom center;
  background-size: contain;

  img.mar-t-14 {
    @media (max-width: 1920px) and (min-width: 1660px) {
      margin-top: 160px;
    }
  }
}

.card-info {
  width: 20%;
  height: 400px;
}

.card-price {
  width: 25%;
  margin: 0 2%;
  height: 400px;
}

.btn.btn-lg {
  width: 15%;
}

.row.mar-t-16 {
  @media (max-width: 1920px) and (min-width: 1660px) {
    margin-top: 160px;
  }
}

.color-black.mar-t-42 {
  @media (max-width: 1920px) and (min-width: 1660px) {
    margin-top: 500px;
  }
}

.row.mar-t-6 {
  @media (max-width: 1920px) and (min-width: 1660px) {
    margin-top: 160px;
  }
}

#price-month,
#price-year {
  @media (max-width: 1920px) and (min-width: 1660px) {
    margin-top: 160px;
  }
}
</style>
