import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerService} from "../_services/customer.service";
import {TokenStorageService} from "../_services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {
  public customers: Customer[] = [];
  public isLogged = false;

  constructor(private customerService: CustomerService, private tokenStorageService: TokenStorageService, private router: Router) {
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
    } else {
      this.router.navigate(['/login']);
    }
  }

  addCustomer() {
    this.router.navigate(['add-customer']);
  }

  updateCustomer(customer: Customer) {
    this.router.navigate(['add-customer', {customerId: customer.customerId}]);
  }

  deleteCustomer(customer: Customer) {
    this.customerService.deleteCustomer(customer.customerId).subscribe();
    window.location.reload();
  }

}
