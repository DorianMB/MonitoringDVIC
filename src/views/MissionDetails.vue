<template>
  <div>
    <navbar :current-user="currentUser"></navbar>
    <div class="mission-details d-flex flex-column align-items-center pad-t-12">
      <h1>Détails de la mission</h1>
      <div class="card-layout flex-row row fs-14">
        <div class="col-12">
          <p>
            <span class="fw-800">intitulé de la mission : </span
            >{{ mission ? mission.missionTitle : "" }}
          </p>
        </div>
        <div class="col-12">
          <p>
            <span class="fw-800">description de la mission : </span
            >{{ mission ? mission.missionDescription : "" }}
          </p>
        </div>
        <div class="col-6">
          <p>
            <span class="fw-800">client de la mission : </span
            >{{ mission ? customerService.getCustomerById(mission.customerId).customerCompany : "" }}
          </p>
        </div>
        <div class="col-6">
          <p>
            <span class="fw-800">email du client : </span
            >{{ mission ? customerService.getCustomerById(mission.customerId).customerEmail : "" }}
          </p>
        </div>
        <div class="col-6">
          <p>
            <span class="fw-800">Début de la mission : </span
            >{{ mission ? mission.missionStartDate : "" }}
          </p>
        </div>
        <div class="col-6">
          <p>
            <span class="fw-800">Fin de la mission : </span
            >{{ mission ? mission.missionEndDate : "" }}
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
    <modals-container @close="updateMission" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import EditMission from "@/components/modals/EditMission";
import ToastService from "@/services/toast.service";
import MissionService from "@/services/mission.service";
import DeleteConfirmation from "@/components/modals/DeleteConfirmation";
import CustomerService from "@/services/customer.service";

export default {
  name: "MissionDetails",
  components: { Navbar },
  data: () => {
    return {
      currentUser: null,
      id: null,
      mission: null,
      toastService: new ToastService(),
      missionService: new MissionService(),
      customerService: new CustomerService()
    };
  },
  beforeMount() {
    this.currentUser = JSON.parse(localStorage.currentUser);
    this.id = this.$router.currentRoute.params.id;
    this.mission = this.missionService.getMissionById(this.id);
    if (this.mission.userId !== this.currentUser.id) {
      this.toastService.showToast(
        this,
        "Vous n'êtes pas autorisé à voir cette page",
        "toast-danger",
        "Ok"
      );
      this.$router.push({ name: "Missions" });
    }
  },
  methods: {
    updateMission(result) {
      if (result && result.mustDeleted) {
        this.missionService.deleteMission(result.value.id);
        this.toastService.showToast(
          this,
          "cette mission a bien été supprimée",
          "toast-success",
          "Ok"
        );
        this.$router.push({ name: "Missions" });
      } else if (result) {
        this.mission = result;
      }
    },
    showEditModal() {
      this.$modal.show(
        EditMission,
        {
          mission: { ...this.mission }
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
            type: "cette mission",
            value: { ...this.mission },
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
.mission-details {
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
