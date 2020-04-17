import CustomerService from "@/services/customer.service";

const customerService = new CustomerService();

export default class InitDataService {
  randomString(type: string, length: number) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const numberArray = [1,2,3,4,5,6,7,8,9,0];
    if (type === "string") {
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
    } else if (type === "number") {
      const charactersLength = number.length;
      result = "0";
      for (let i = 1; i < length; i++) {
        result += number.charAt(Math.floor(Math.random() * charactersLength));
      }
    } else if (type === "email") {
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      result += "@gmail.com";
    } else if (type === "date") {
      if (length === 0) {
        result = new Date().toISOString();
        result = result.substring(0, 10);
      } else {
        const charactersLength = numberArray.length;
        let addToDate = 0;
        for (let i = 1; i < 100; i++) {
          addToDate = addToDate + numberArray[(Math.floor(Math.random() * charactersLength))];
        }
        const date = new Date().getTime() + addToDate;
        result = new Date(date).toISOString();
        result = result.substring(0, 10);
      }
    }
    return result;
  }

  initUsers() {
    if (localStorage.users === null || localStorage.users === undefined) {
      const users = [
        {
          id: 1,
          email: "admin@admin.fr",
          password: "admin"
        }
      ];
      localStorage.users = JSON.stringify(users);
    }
  }

  initAccounts() {
    if (
      localStorage.accounts === null ||
      localStorage.accounts === undefined
    ) {
      const accounts = [
        {
          id: 1,
          userId: 1,
          firstname: null,
          lastname: null,
          phone: null,
          companyName: null,
          companyAddress: null,
          siret: null,
          offer: null
        }
      ];
      localStorage.accounts = JSON.stringify(accounts);
    }
  }

  initCustomers() {
    if (
      localStorage.customers === null ||
      localStorage.customers === undefined
    ) {
      const customers = [];
      for (let i = 1; i <= 21; i++) {
        const customer = {
          id: i,
          userId: (Math.floor(Math.random() * Math.floor(2)) + 1),
          customerCompany: this.randomString("string", 12),
          customerEmail: this.randomString("email", 7),
          customerPhone: this.randomString("number", 10),
          customerAddress: this.randomString("string", 20)
        };
        customers.push(customer);
      }
      localStorage.customers = JSON.stringify(customers);
    }
  }

  initMissions() {
    if (
      localStorage.missions === null ||
      localStorage.missions === undefined
    ) {
      const missions = [];
      for (let i = 1; i <= 35; i++) {
        const mission = {
          id: i,
          userId: 1,
          customerId: (Math.floor(Math.random() * Math.floor(21)) + 1),
          missionTitle: this.randomString("string", 12),
          missionDescription: this.randomString("string", 40),
          missionStartDate: this.randomString("date", 0),
          missionEndDate: this.randomString("date", 1)
        };
        mission.userId = customerService.getCustomerById(mission.customerId).userId;
        missions.push(mission);
      }
      localStorage.missions = JSON.stringify(missions);
    }
  }
}