import {Component, OnInit} from '@angular/core';
import {OrderService} from "../_services/order.service";
import {Order} from "../model/order";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit{
  orders = {} as Order[];
  form: any;

  constructor(private orderService:OrderService) {
  }
  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe({
      next: data => {
        this.orders = data;
      }
    });
  }
}
