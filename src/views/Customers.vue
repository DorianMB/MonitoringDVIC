<template>
  <div>
    <navbar :current-user="currentUser"></navbar>
    <div class="customers d-flex justify-content-center align-items-center">
      <custom-table :settings="settings" :values="values" class="custom-table"></custom-table>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import CustomTable from "@/components/CustomTable";
import settings from "@/views/tables-settings/test-settings"

export default {
  name: "Customers",
  components: {CustomTable, Navbar },
  data: () => {
    return {
      currentUser: JSON.parse(localStorage.currentUser),
      settings: settings(),
      values: JSON.parse(localStorage.accounts)
    };
  }
};
</script>

<style scoped lang="scss">
  .customers {
    width: 100vw;
    height: 100vh;
    .custom-table {
      width: 80%;
    }
  }
</style>