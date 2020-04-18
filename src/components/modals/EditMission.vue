<template>
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="editMissionCenterTitle">
        <span v-if="mission.userId">Modifier la mission</span>
        <span v-else>Ajouter une mission</span>
      </h5>
      <button type="button" class="close" @click="close()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form>
        <div class="group-input-label mar-t-2">
          <label for="customer">Client de la mission</label>
          <select class="form-control" id="customer" v-model="mission.customerId">
            <option id="option-placeholder" :value="undefined" disabled selected>client de la mission</option>
            <template v-for="customer in customers">
              <option :key="customer.id" :value="customer.id">
                {{ customer.customerCompany }}
              </option>
            </template>
          </select>
        </div>
        <div class="group-input-label mar-t-2">
          <label for="missionTitle">Intitulé de la mission</label>
          <input
            type="text"
            class="form-control"
            id="missionTitle"
            placeholder="intitulé de la mission"
            v-model="mission.missionTitle"
          />
        </div>
        <div class="group-input-label mar-t-2">
          <label for="missionDescription">Description de la mission</label>
          <textarea
            class="form-control"
            id="missionDescription"
            rows="3"
            placeholder="description de la mission"
            v-model="mission.missionDescription"
          ></textarea>
        </div>
        <div class="group-input-label mar-t-2">
          <label for="missionStartDate">Début de la mission</label>
          <input
            type="date"
            class="form-control"
            id="missionStartDate"
            v-model="mission.missionStartDate"
          />
        </div>
        <div class="group-input-label mar-t-2 mar-b-2">
          <label for="missionEndDate">Fin de la mission</label>
          <input
            type="date"
            class="form-control"
            id="missionEndDate"
            v-model="mission.missionEndDate"
          />
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" @click="close()">
        Annuler
      </button>
      <button type="button" class="btn btn-success" @click="saveMission()">
        Sauvegarder
      </button>
    </div>
  </div>
</template>

<script>
import MissionService from "@/services/mission.service";
import ToastService from "@/services/toast.service";
import CustomerService from "../../services/customer.service";

export default {
  name: "EditMission",
  data: () => {
    return {
      missionService: new MissionService(),
      customerService: new CustomerService(),
      toastService: new ToastService(),
      customers: null,
      currentUser: null
    };
  },
  props: {
    mission: {
      type: Object,
      default: () => {
        return {
          id: null,
          userId: null,
          customerId: null,
          missionTitle: null,
          missionDescription: null,
          missionStartDate: null,
          missionEndDate: null
        };
      }
    }
  },
  beforeMount() {
    this.currentUser = JSON.parse(localStorage.currentUser);
    this.customers = this.customerService.getCustomersByUserId(
      this.currentUser.id
    );
  },
  methods: {
    saveMission() {
      if (this.mission.id) {
        this.missionService.updateMission(this.mission);
        this.toastService.showToast(
          this,
          "les modifications ont été sauvegardées",
          "toast-success",
          "Ok"
        );
      } else {
        const currentUser = JSON.parse(localStorage.currentUser);
        this.missionService.saveMission(this.mission, currentUser.id);
        this.toastService.showToast(
          this,
          "La nouvelle mission a bien été créée",
          "toast-success",
          "Ok"
        );
      }
      this.close(this.mission);
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
