import router from "../../router";

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
        prepareFunction: (value: any) => router.push({name: "CustomerDetails", params: { id: value.id }})
      },
      edit: {
        icon: "Modifier",
        class: "btn-success",
        prepareFunction: (value: any) => console.log(value)
      },
      delete: {
        icon: "Supprimer",
        class: "btn-danger",
        prepareFunction: (value: any) => console.log(value)
      }
    }
  };
}