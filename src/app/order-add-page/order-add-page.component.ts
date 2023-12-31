import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerService} from "../_services/customer.service";
import {Product} from "../model/product";
import {OrderService} from "../_services/order.service";
import {Item} from "../model/item";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-add-page',
  templateUrl: './order-add-page.component.html',
  styleUrls: ['./order-add-page.component.css']
})
export class OrderAddPageComponent implements OnInit {
  customers: Customer[] = [];
  orderDetail: any = {
    customerId: null,
    orderNumber: null,
    orderDate: null,
    deadline: null,
    finishDate: null,
    price: null,
    products: {} as Product,
    items: {} as Item
  };
  orderId: number = 0;
  badDate: boolean = false;

  constructor(private customerService: CustomerService, private orderService: OrderService, private router: Router) {

  }

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe({
      next: data => {
        this.customers = data;
      }
    });
  }

  submitOrderDetails() {
    const {customerId, orderNumber, orderDate, deadline, finishDate, price} = this.orderDetail;
    if(deadline < orderDate)
    {
      this.badDate = true;
      this.orderDetail.deadline = null;
    }else {
      this.orderService.saveOrder(customerId, orderNumber, orderDate, deadline, finishDate, price).subscribe({
        next: data => {
          this.orderId = data.id;
          this.router.navigate(['add-product', {orderId: this.orderId}]);
        }
      });
    }
  }
}
