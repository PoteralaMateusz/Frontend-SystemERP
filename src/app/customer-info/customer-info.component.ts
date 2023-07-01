import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerService} from "../_services/customer.service";
import {TokenStorageService} from "../_services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit{
  public customers = {} as Customer[];
  public isLogged = false;

  constructor(private customerService :CustomerService, private tokenStorageService:TokenStorageService) {
  }

  ngOnInit(): void {

    if (this.tokenStorageService.isLoggedIn()){
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

}
