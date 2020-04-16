<template>
  <div class="modal fade" id="editCustomer" tabindex="-1" role="dialog" aria-labelledby="editCustomerCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editCustomerCenterTitle">
            <span v-if="customer.customerCompany">Modifier le client</span>
            <span v-else>Ajouter un client</span>
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="close(null)">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="group-input-label mar-t-2">
              <label for="customerCompany">Nom de l'entreprise</label>
              <input type="email" class="form-control" id="customerCompany" placeholder="nom de l'entreprise" v-model="customer.customerCompany">
            </div>
            <div class="group-input-label mar-t-2">
              <label for="customerAddress">Adrresse du client</label>
              <input type="email" class="form-control" id="customerAddress" placeholder="adrresse du client" v-model="customer.customerAddress">
            </div>
            <div class="group-input-label mar-t-2">
              <label for="customerEmail">Email du client</label>
              <input type="email" class="form-control" id="customerEmail" placeholder="email du client" v-model="customer.customerEmail">
            </div>
            <div class="group-input-label mar-t-2">
              <label for="customerPhone">Téléphone du client</label>
              <input type="email" class="form-control" id="customerPhone" placeholder="téléphone du client" v-model="customer.customerPhone">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" v-on:click="close(null)">
            Annuler
          </button>
          <button type="button" class="btn btn-success" data-dismiss="modal" v-on:click="saveCustomer()">Sauvegarder</button>
        </div>
      </div>
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
      if (this.customer.id) {
        const customerList = JSON.parse(localStorage.customers);
        const index = customerList.findIndex(item => item.id = this.customer.id);
        customerList[index] = this.customer;
        localStorage.customers = JSON.stringify(customerList);
        // ('#editCustomer').modal('hide');
        this.close(this.customer);
      }
    },
    close(value) {
      this.$emit("return", value);
    }
  }
};
</script>

<style scoped lang="scss">
.modal {
  .group-input-label {
    width: 100% !important;
  }
}
</style>