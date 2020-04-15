<template>
  <div>
    <navbar :current-user="currentUser"></navbar>
    <div class="homepage">
      <div class="d-flex justify-content-center align-items-center w-100 h-100">
        <router-link tag="button" to="/customers" class="card-layout d-flex flex-column align-items-center">
          <img
            src="../assets/images/card-customers.jpeg"
            class="img-fluid img-card-top"
          />
          <h3>Vos clients</h3>
        </router-link>
        <button class="card-layout d-flex flex-column align-items-center">
          <img
            src="../assets/images/card-missions.jpeg"
            class="img-fluid img-card-top"
          />
          <h3>Vos Missions</h3>
        </button>
        <button class="card-layout d-flex flex-column align-items-center">
          <img
            src="../assets/images/card-stats.jpeg"
            class="img-fluid img-card-top"
          />
          <h3>Vos statistiques</h3>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "ConnectedHome",
  components: { Navbar },
  data: () => {
    return {
      currentUser: JSON.parse(localStorage.currentUser)
    };
  }
};
</script>

<style scoped lang="scss">
.homepage {
  width: 100vw;
  height: 100vh;
  background: url("../assets/images/bg-homepage.png") no-repeat center center;
  background-size: contain;
  .card-layout {
    width: 300px;
    height: 300px;
  }
}
</style>
