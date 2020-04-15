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
      },
      customerAddress: {
        title: "adresse",
      }
    },
    actions: {
      show: {
        icon: "Show",
        class: "btn-info",
        prepareFunction: (value: any) => console.log(value)
      },
      edit: {
        icon: "Edit",
        class: "btn-success",
        prepareFunction: (value: any) => console.log(value)
      },
      delete: {
        icon: "Delete",
        class: "btn-danger",
        prepareFunction: (value: any) => console.log(value)
      }
    }
  };
}