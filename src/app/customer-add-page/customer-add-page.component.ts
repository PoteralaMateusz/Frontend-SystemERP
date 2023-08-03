import {Component} from '@angular/core';
import {CustomerService} from "../_services/customer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-customer-add-page',
  templateUrl: './customer-add-page.component.html',
  styleUrls: ['./customer-add-page.component.css']
})
export class CustomerAddPageComponent {
  customer: any = {
    customerId: null,
    name: null,
    country: null,
    city: null,
    street: null,
    houseNumber: null,
    zipCode: null
  };
  params: any;
  addOperation: boolean = true;

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.params = params;
      if (this.params.customerId != null) {
        this.addOperation = false;
        this.customerService.getCustomerById(this.params.customerId).subscribe({
          next: data => {
            this.customer = data;
          }
        });
      } else {
        this.addOperation = true;
      }
    });
  }

  save() {
    const {name, street, houseNumber, city, zipCode, country} = this.customer;
    this.customerService.addCustomer(name, street, houseNumber, city, zipCode, country).subscribe({
      next: date => {
        this.router.navigate(['customers']);
      }
    });
  }
  saveChanges() {
    const {name, street, houseNumber, city, zipCode, country} = this.customer;
    this.customerService.updateCustomer(this.params.customerId, name, street, houseNumber, city, zipCode, country).subscribe({
      next: date => {
        this.router.navigate(['customers']);
      }
    })
  }

  cancel() {
    this.router.navigate(['customers']);
  }


}
