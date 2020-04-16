<template>
  <div>
    <navbar :current-user="currentUser"></navbar>
    <div class="customers d-flex flex-column justify-content-center align-items-center">
      <div id="addCustomer" class="w-75 d-flex flex-row justify-content-end">
        <button class="btn btn-success" @click="showModal">+ Client</button>
      </div>
      <custom-table
        :settings="settings"
        :values="customers"
        class="custom-table"
      ></custom-table>
    </div>
    <modals-container @close="modalClose"/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import CustomTable from "@/components/CustomTable";
import settings from "@/views/tables-settings/customers-settings";
import EditCustomer from "@/components/modals/EditCustomer";

export default {
  name: "Customers",
  components: {CustomTable, Navbar},
  data: () => {
    return {
      currentUser: JSON.parse(localStorage.currentUser),
      settings: settings(),
      customers: null,
      customer: null
    };
  },
  beforeMount() {
    const customersList = JSON.parse(localStorage.customers);
    this.customers = customersList.filter(
      customer => customer.userId === this.currentUser.id
    );
  },
  methods: {
    modalClose() {
      this.updateCustomers();
    },
    updateCustomers() {
      const customersList = JSON.parse(localStorage.customers);
      this.customers = customersList.filter(
        customer => customer.userId === this.currentUser.id
      );
    },
    showModal() {
      this.$modal.show(
        EditCustomer,
        {
          customer: {}
        },
        {
          draggable: true,
          adaptive: true,
          scrollable: true,
          height: "auto"
        })
    }
  }
};
</script>

<style scoped lang="scss">
  .customers {
    width: 100vw;
    min-height: 100vh;
    background: url("../assets/images/bg-tables.png") top center;
    background-size: 100vw auto;

    #addCustomer {
      @extend .mar-t-14;
      @extend .mar-b-4;
    }

    .custom-table {
      width: 80%;
      @extend .mar-b-10;
    }
  }
</style>
