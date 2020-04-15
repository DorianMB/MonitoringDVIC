<template>
  <div>
    <navbar :current-user="currentUser"></navbar>
    <div class="customer-details d-flex justify-content-center align-items-center">
      <p></p>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "CustomerDetails",
  components: { Navbar },
  data: () => {
    return {
      currentUser: null,
      customers: null,
      id: null
    };
  },
  beforeMount() {
    this.currentUser = JSON.parse(localStorage.currentUser);
    this.customers = JSON.parse(localStorage.customers);
    this.id = this.$router.currentRoute.params.id;
    console.log(this.currentUser, this.id);
  }
};
</script>

<style scoped lang="scss">
  .customer-details {
    width: 100vw;
    min-height: 100vh;
    background: url("../assets/images/bg-tables.png") top center;
    background-size: 100vw auto;
  }
</style>