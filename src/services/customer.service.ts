export default class CustomerService {
  getCustomers() {
    return JSON.parse(localStorage.customers);
  }

  getCustomersByUserId(id: number) {
    const customersList = this.getCustomers();
    return customersList.filter(
      (customer: any) => {
        return customer.userId === id;
      }
    );
  }

  getCustomerById(id: number|string) {
    const customersList = this.getCustomers();
    return customersList.find((customer: any) => {
      return customer.id.toString() === id.toString();
    });
  }

  saveCustomer(customer: any, userId: number) {
    customer.userId = userId;
    let max = 0;
    const customerList = this.getCustomers();
    customerList.forEach((item: any) => {
      if (item.id > max) {
        max = item.id;
      }
    });
    customer.id = max + 1;
    customerList.push(customer);
    localStorage.customers = JSON.stringify(customerList);
  }

  updateCustomer(customer: any) {
    const customerList = this.getCustomers();
    const index = customerList.findIndex(
      (item: any) => (item.id === customer.id)
    );
    customerList[index] = customer;
    localStorage.customers = JSON.stringify(customerList);
  }

  deleteCustomer(id: number|string) {
    const customersList = this.getCustomers();
    const index = customersList.findIndex(
      (item: any) => (item.id.toString() === id.toString())
    );
    customersList.splice(index,1);
    localStorage.customers = JSON.stringify(customersList);
  }
}