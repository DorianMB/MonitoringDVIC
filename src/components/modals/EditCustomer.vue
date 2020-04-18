<template>
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="editCustomerCenterTitle">
        <span v-if="customer.customerCompany">Modifier le client</span>
        <span v-else>Ajouter un client</span>
      </h5>
      <button type="button" class="close" @click="close()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form>
        <div class="group-input-label mar-t-2">
          <label for="customerCompany">Nom de l'entreprise</label>
          <input
            type="text"
            class="form-control"
            id="customerCompany"
            placeholder="nom de l'entreprise"
            v-model="customer.customerCompany"
          />
        </div>
        <div class="group-input-label mar-t-2">
          <label for="customerAddress">Adrresse du client</label>
          <input
            type="text"
            class="form-control"
            id="customerAddress"
            placeholder="adrresse du client"
            v-model="customer.customerAddress"
          />
        </div>
        <div class="group-input-label mar-t-2">
          <label for="customerEmail">Email du client</label>
          <input
            type="email"
            class="form-control"
            id="customerEmail"
            placeholder="email du client"
            v-model="customer.customerEmail"
          />
        </div>
        <div class="group-input-label mar-t-2">
          <label for="customerPhone">Téléphone du client</label>
          <input
            type="text"
            class="form-control"
            id="customerPhone"
            placeholder="téléphone du client"
            v-model="customer.customerPhone"
          />
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" @click="close()">
        Annuler
      </button>
      <button type="button" class="btn btn-success" @click="saveCustomer()">
        Sauvegarder
      </button>
    </div>
  </div>
</template>

<script>
import CustomerService from "@/services/customer.service";
import ToastService from "@/services/toast.service";

export default {
  name: "EditCustomer",
  data: () => {
    return {
      customerService: new CustomerService(),
      toastService: new ToastService(),
    };
  },
  props: {
    customer: {
      type: Object,
      default: () => {
        return {
          id: null,
          userId: null,
          customerCompany: null,
          customerEmail: null,
          customerPhone: null,
          customerAddress: null
        };
      }
    }
  },
  methods: {
    saveCustomer() {
      if (this.customer.id) {
        this.customerService.updateCustomer(this.customer);
        this.toastService.showToast(
          this,
          "les modifications ont été sauvegardées",
          "toast-success",
          "Ok"
        );
      } else {
        const currentUser = JSON.parse(localStorage.currentUser);
        this.customerService.saveCustomer(this.customer, currentUser.id);
        this.toastService.showToast(
          this,
          "Le nouveau client a bien été créé",
          "toast-success",
          "Ok"
        );
      }
      this.close(this.customer);
    },
    close(value) {
      this.$emit("close", value);
    }
  }
};
</script>

<style scoped lang="scss">
.modal-content {
  .group-input-label {
    width: 100% !important;
  }
}
</style>
