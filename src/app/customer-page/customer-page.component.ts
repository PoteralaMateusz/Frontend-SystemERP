import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerService} from "../_services/customer.service";
import {TokenStorageService} from "../_services/token-storage.service";

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {
  public customers = {} as Customer[];
  public isLogged = false;
  public toUpdate = false;
  form: any = {
    id: null,
    name: null,
    street: null,
    houseNumber: null,
    city: null,
    zipcode: null,
    country: null
  };
  operation = 'Add';

  constructor(private customerService: CustomerService, private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    if (this.tokenStorageService.isLoggedIn()) {
      this.isLogged = true;
      this.customerService.getAllCustomers().subscribe({
        next: data => {
          this.customers = data;
          console.log(this.customers);
        }
      });
    }
    console.log(this.isLogged);
  }

  addCustomer() {
    const {name, street, houseNumber, city, zipcode, country} = this.form;
    if (this.toUpdate) {
      this.customerService.updateCustomer(this.form.id, name, street, houseNumber, city, zipcode, country).subscribe()
      this.toUpdate = false;
      window.location.reload();
    } else {
      this.customerService.addCustomer(name, street, houseNumber, city, zipcode, country).subscribe();
      window.location.reload();
    }
  }

  updateCustomer(customer: Customer) {
    this.form = {
      id: customer.customerId,
      name: customer.name,
      street: customer.street,
      houseNumber: customer.houseNumber,
      city: customer.city,
      zipcode: customer.zipCode,
      country: customer.country
    };
    this.operation = 'Save';
    this.toUpdate = true;
  }

  deleteCustomer(customer: Customer) {
    this.customerService.deleteCustomer(customer.customerId).subscribe();
    window.location.reload();
  }

  cancelUpdate() {
    this.toUpdate = false;
    this.form = {
      id: null,
      name: null,
      street: null,
      houseNumber: null,
      city: null,
      zipcode: null,
      country: null
    }
  }
}
