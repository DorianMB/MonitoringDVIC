<template>
  <div>
    <navbar :current-user="currentUser"></navbar>
    <div
      class="missions d-flex flex-column justify-content-center align-items-center"
    >
      <div id="addMission" class="w-75 d-flex flex-row justify-content-end">
        <button class="btn btn-success" @click="showModal">+ Mission</button>
      </div>
      <custom-table
        :settings="settings"
        :values="missions"
        class="custom-table"
      ></custom-table>
    </div>
    <modals-container @close="modalClose" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import CustomTable from "@/components/CustomTable";
import settings from "@/views/tables-settings/missions-settings";
import EditMssion from "@/components/modals/EditMission";
import ToastService from "@/services/toast.service";
import MissionService from "@/services/mission.service";

export default {
  name: "Missions",
  components: { CustomTable, Navbar },
  data: () => {
    return {
      missionService: new MissionService(),
      toastService: new ToastService(),
      currentUser: JSON.parse(localStorage.currentUser),
      settings: settings(),
      missions: null,
      mission: null
    };
  },
  beforeMount() {
    this.missions = this.missionService.getMissionsByUserId(
      this.currentUser.id
    );
  },
  methods: {
    modalClose(result) {
      if (result && result.mustDeleted) {
        this.missionService.deleteMission(result.value.id);
        this.toastService.showToast(
          this,
          "cette mission a bien été supprimée",
          "toast-success",
          "Ok"
        );
      }
      this.updateCustomers();
    },
    updateCustomers() {
      this.missions = this.missionService.getMissionsByUserId(
        this.currentUser.id
      );
    },
    showModal() {
      this.$modal.show(
        EditMssion,
        {
          mission: {}
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
  .missions {
    width: 100vw;
    min-height: 100vh;
    background: url("../assets/images/bg-tables.png") top center;
    background-size: 100vw auto;

    #addMission {
      @extend .mar-t-14;
      @extend .mar-b-4;
    }

    .custom-table {
      width: 80%;
      @extend .mar-b-10;
    }
  }
</style>