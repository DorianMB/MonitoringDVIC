import router from "../../router";

import EditCustomer from '../../components/modals/EditCustomer.vue'

export default function () {
  return {
    column: {
      customerCompany: {
        title: "nom de l'entreprise",
      },
      customerEmail: {
        title: "email"
      },
      customerPhone: {
        title: "phone"
      }
    },
    actions: {
      show: {
        icon: "Details",
        class: "btn-info",
        prepareFunction: (value: any, modal: any) => router.push({name: "CustomerDetails", params: { id: value.id }})
      },
      edit: {
        icon: "Modifier",
        class: "btn-success",
        prepareFunction: (value: any, modal: any) => {
          modal.show(EditCustomer, {
            customer: {...value}
          }, {
            draggable: true,
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
          modal.show(EditCustomer, {
            customer: {...value}
          }, {
            draggable: true,
            adaptive: true,
            scrollable: true,
            height: 'auto'
          })
        }
      }
    }
  };
}