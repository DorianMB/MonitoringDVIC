<template>
  <div>
    <navbar :current-user="currentUser"></navbar>
    <div class="customers d-flex justify-content-center align-items-center">
      <custom-table :settings="settings" :values="customers" class="custom-table"></custom-table>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import CustomTable from "@/components/CustomTable";
import settings from "@/views/tables-settings/test-settings"

export default {
  name: "Customers",
  components: { CustomTable, Navbar },
  data: () => {
    return {
      currentUser: JSON.parse(localStorage.currentUser),
      settings: settings(),
      customers: null
    };
  },
  beforeMount() {
    const customersList = JSON.parse(localStorage.customers);
    const customersFiltered = customersList.filter(customer => customer.userId === this.currentUser.id);
    this.customers = customersFiltered;
  }
};
</script>

<style scoped lang="scss">
  .customers {
    width: 100vw;
    min-height: 100vh;
    background: url("../assets/images/bg-tables.png") top center;
    background-size: 100vw auto;
    .custom-table {
      width: 80%;
      @extend .mar-t-14;
      @extend .mar-b-10;
    }
  }
</style>