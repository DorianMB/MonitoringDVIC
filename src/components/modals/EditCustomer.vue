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
            type="email"
            class="form-control"
            id="customerCompany"
            placeholder="nom de l'entreprise"
            v-model="customer.customerCompany"
          />
        </div>
        <div class="group-input-label mar-t-2">
          <label for="customerAddress">Adrresse du client</label>
          <input
            type="email"
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
            type="email"
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
export default {
  name: "EditCustomer",
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
      const customerList = JSON.parse(localStorage.customers);
      if (this.customer.id) {
        const index = customerList.findIndex(
          item => (item.id = this.customer.id)
        );
        customerList[index] = this.customer;
      } else {
        const currentUser = JSON.parse(localStorage.currentUser);
        this.customer.userId = currentUser.id;
        let max = 0;
        customerList.forEach(item => {
          if (item.id > max) {
            max = item.id;
          }
        });
        this.customer.id = max + 1;
        customerList.push(this.customer);
      }
      localStorage.customers = JSON.stringify(customerList);
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
