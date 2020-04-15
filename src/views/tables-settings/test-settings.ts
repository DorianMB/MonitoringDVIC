export default function () {
  return {
    column: {
      userId: {
        title: "email",
        valuePrepareFunction: (item: any) => {
          const users = JSON.parse(localStorage.users);
          const res = users.find((user:any) => user.id === item.userId);
          return res.email;
        }
      },
      firstname: {
        title: "prénom"
      },
      lastname: {
        title: "nom"
      },
      companyName: {
        title: "nom de l'entreprise",
      }
    },
    actions: {
      edit: {
        icon: "!",
        prepareFunction: (value: any) => console.log(value)
      }
    }
  };
}