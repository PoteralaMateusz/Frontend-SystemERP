import {Component, OnInit} from '@angular/core';
import {OrderService} from "../_services/order.service";
import {Order} from "../model/order";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  allOrders: Order[] = [];
  orders: Order[] = [];
  form: any;
  showFinished = false;
  sortType: string = 'orderDate';

  constructor(private orderService: OrderService, private router: Router) {
  }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe({
      next: data => {
        this.allOrders = data;
        this.orders = this.allOrders.filter(order => order.finishDate == null);
        this.sortChange();
      }
    });
  }

  showOrderDetails(id: number) {
    this.router.navigate(['order-details', {id: id}]);
  }

  showFinishedOrders() {
    this.showFinished = !this.showFinished;
    this.setOrdersByFinished();
  }

  setOrdersByFinished() {
    if (this.showFinished) {
      this.orders = this.allOrders.filter(a => a.finishDate != null);
    } else {
      this.orders = this.allOrders.filter(a => a.finishDate == null);
    }
  }

  sortChange() {
    this.setOrdersByFinished();
    if (this.sortType == 'orderDate') {
      this.orders.sort((a, b) => a.orderDate >= b.orderDate ? -1 : -1);
    }

    if (this.sortType == 'deadline') {
      this.orders.sort((a, b) => a.deadline >= b.deadline ? 1 : -1);
    }

    if (this.sortType == 'price') {
      this.orders.sort((a, b) => a.price >= b.price ? 1 : -1);
    }
  }

  setAsFinished(id: number) {
    this.orderService.setOrderAsFinnish(id).subscribe();
    window.location.reload();
  }

  workProgress(id: number) {
  }
}
