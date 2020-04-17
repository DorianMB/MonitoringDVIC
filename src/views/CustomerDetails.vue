<template>
  <div>
    <navbar :current-user="currentUser"></navbar>
    <div
      class="customer-details d-flex flex-column align-items-center pad-t-12"
    >
      <h1>Détails du client</h1>
      <div class="card-layout flex-row row fs-14">
        <div class="col">
          <p>
            <span class="fw-800">nom de l'entreprise : </span
            >{{ customer ? customer.customerCompany : "" }}
          </p>
          <p>
            <span class="fw-800">adrresse du client : </span
            >{{ customer ? customer.customerAddress : "" }}
          </p>
        </div>
        <div class="col">
          <p>
            <span class="fw-800">email du client : </span
            >{{ customer ? customer.customerEmail : "" }}
          </p>
          <p>
            <span class="fw-800">téléphone du client : </span
            >{{ customer ? customer.customerPhone : "" }}
          </p>
        </div>
      </div>
      <div class="row mar-t-10">
        <button class="btn btn-lg btn-success" @click="showEditModal()">
          Modifier
        </button>
        <button
          class="btn btn-lg btn-danger mar-l-8"
          @click="showDeleteModal()"
        >
          Supprimer
        </button>
      </div>
    </div>
    <modals-container @close="updateCustomer" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import EditCustomer from "@/components/modals/EditCustomer";
import ToastService from "@/services/toast.service";
import CustomerService from "@/services/customer.service";
import DeleteConfirmation from "@/components/modals/DeleteConfirmation";

export default {
  name: "CustomerDetails",
  components: { Navbar },
  data: () => {
    return {
      currentUser: null,
      id: null,
      customer: null,
      toastService: new ToastService(),
      customerService: new CustomerService()
    };
  },
  beforeMount() {
    this.currentUser = JSON.parse(localStorage.currentUser);
    this.id = this.$router.currentRoute.params.id;
    this.customer = this.customerService.getCustomerById(this.id);
    if (this.customer.userId !== this.currentUser.id) {
      this.toastService.showToast(
        this,
        "Vous n'etes pas autorisé a voir cette page",
        "toast-danger",
        "Ok"
      );
      this.$router.push({ name: "Customers" });
    }
  },
  methods: {
    updateCustomer(result) {
      if (result && result.mustDeleted) {
        this.customerService.deleteCustomer(result.value.id);
        this.$router.push({ name: "Customers" });
      } else if (result) {
        this.customer = result;
      }
    },
    showEditModal() {
      this.$modal.show(
        EditCustomer,
        {
          customer: { ...this.customer }
        },
        {
          adaptive: true,
          scrollable: true,
          height: "auto"
        }
      );
    },
    showDeleteModal() {
      this.$modal.show(
        DeleteConfirmation,
        {
          item: {
            type: "client",
            value: { ...this.customer },
            mustDeleted: false
          }
        },
        {
          adaptive: true,
          scrollable: true,
          height: "auto"
        }
      );
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
