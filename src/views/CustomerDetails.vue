<template>
  <div>
    <navbar :current-user="currentUser"></navbar>
    <div
      class="customer-details d-flex justify-content-center align-items-center"
    >
      <h1>{{ customer ? customer.customerCompany : "" }}</h1>
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
      id: null,
      customer: null
    };
  },
  beforeMount() {
    this.currentUser = JSON.parse(localStorage.currentUser);
    this.id = this.$router.currentRoute.params.id;
    const customers = JSON.parse(localStorage.customers);
    this.customer = customers.find(element => {
      return element.id.toString() === this.id.toString();
    });
    if (this.customer.userId !== this.currentUser.id) {
      this.$toasted.show(
        "Vous n'etes pas autorisé a voir cette page",
        this.getToastOptions("toast-danger", "Ok")
      );
      this.$router.push({ name: "Customers" });
    }
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
    }
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
