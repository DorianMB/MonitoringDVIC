<template>
  <div>
    <navbar :current-user="currentUser"></navbar>
    <div
      class="customer-details d-flex flex-column align-items-center pad-t-12"
    >
      <h1>Détails du client</h1>
      <div class="card-layout flex-row row fs-14">
        <div class="col">
          <p><span class="fw-800">nom de l'entreprise : </span>{{ customer ? customer.customerCompany : "" }}</p>
          <p><span class="fw-800">adrresse du client : </span>{{ customer ? customer.customerAddress : "" }}</p>
        </div>
        <div class="col">
          <p><span class="fw-800">email du client : </span>{{ customer ? customer.customerEmail : "" }}</p>
          <p><span class="fw-800">téléphone du client : </span>{{ customer ? customer.customerPhone : "" }}</p>
        </div>
      </div>
      <div class="row mar-t-10">
        <button class="btn btn-lg btn-success">Edit</button>
        <button class="btn btn-lg btn-danger mar-l-8">Delete</button>
      </div>
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
    console.log(this.customer);
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
  .card-layout {
    width: 80%;
    @extend .mar-t-10;
    p {
      padding-top: 18px;
    }
  }
}
</style>
