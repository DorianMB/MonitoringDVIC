export default function () {
  return {
    column: {
      id: {
        title: "#"
      },
      email: {
        title: "email"
      },
      password: {
        title: "password",
        valuePrepareFunction: (value: any) => {
          console.log(value);
          return "*****";
        }
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