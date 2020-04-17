<template>
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="editCustomerCenterTitle">
        <span>Confirmation de suppression</span>
      </h5>
      <button type="button" class="close" @click="close()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Voulez vous vraiment supprimer ce {{ item.type }}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" @click="close()">
        Annuler
      </button>
      <button type="button" class="btn btn-danger" @click="mustDeleted()">
        Supprimer
      </button>
    </div>
  </div>
</template>

<script>
import CustomerService from "@/services/customer.service";

export default {
  name: "DeleteConfirmation",
  data: () => {
    return {
      customerService: new CustomerService()
    };
  },
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  methods: {
    close(value) {
      this.$emit("close", value);
    },
    mustDeleted() {
      this.item.mustDeleted = true;
      this.close(this.item);
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
