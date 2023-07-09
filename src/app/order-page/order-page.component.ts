import {Component, OnInit} from '@angular/core';
import {OrderService} from "../_services/order.service";
import {Order} from "../model/order";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit{
  orders:Order[] = [];
  form: any;

  constructor(private orderService:OrderService, private router:Router) {
  }
  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe({
      next: data => {
        this.orders = data;
      }
    });
  }

  showOrderDetails(id:number) {
    this.router.navigate(['order-details', {id: id}]);
  }
}
