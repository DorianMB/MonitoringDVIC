import router from "../../router";

import EditMission from '../../components/modals/EditMission.vue'
import DeleteConfirmation from '../../components/modals/DeleteConfirmation.vue'
import CustomerService from '../../services/customer.service'

const customerService = new CustomerService();

export default function () {
  return {
    column: {
      missionTitle: {
        title: "intitulé de la mission",
      },
      customerId: {
        title: "client",
        valuePrepareFunction: (mission: any) => {
          return customerService.getCustomerById(mission.customerId).customerCompany;
        }
      },
      missionEndDate: {
        title: "date de fin de mission",
        valuePrepareFunction: (mission: any) => {
          const res = new Date(mission.missionEndDate);
          const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
          return res.toLocaleDateString('fr-FR', options);
        }
      }
    },
    actions: {
      show: {
        icon: "Details",
        class: "btn-info",
        prepareFunction: (value: any, modal: any) => router.push({name: "MissionDetails", params: { id: value.id }})
      },
      edit: {
        icon: "Modifier",
        class: "btn-success",
        prepareFunction: (value: any, modal: any) => {
          modal.show(EditMission, {
            mission: {...value}
          }, {
            adaptive: true,
            scrollable: true,
            height: 'auto'
          })
        }
      },
      delete: {
        icon: "Supprimer",
        class: "btn-danger",
        prepareFunction: (value: any, modal: any) => {
          modal.show(DeleteConfirmation, {
            item: {
              type: "cette mission",
              value: {...value},
              mustDeleted: false
            }
          }, {
            adaptive: true,
            scrollable: true,
            height: 'auto'
          })
        }
      }
    }
  };
}