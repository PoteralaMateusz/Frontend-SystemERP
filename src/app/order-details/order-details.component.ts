import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OrderService} from "../_services/order.service";
import {Order} from "../model/order";
import {Item} from "../model/item";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {
  orderId:any;
  order = {} as Order;
  form: any = {
    id: null,
    productId: null,
    material: null,
    quality: null,
    pieces: null,
    donePieces: null,
    weight: null
  };
  constructor(private route:ActivatedRoute, private orderService:OrderService) {
    this.route.params.subscribe( params => {
      this.orderId = params;
    });
    this.orderService.getOrderById(this.orderId.id).subscribe({
      next: data => {
        this.order = data;
        console.log(this.order);
      }
    });
  }

  updateItem(item: Item) {
    this.form = {
    id: item.id,
    productId: item.productId,
    material: item.material,
    quality: item.quality,
    pieces: item.pieces,
    donePieces: item.donePieces,
    weight: item.weight
  };
  }

  deleteItem(item: Item) {

  }

  addItem() {

  }

  cancelAddOrUpdate() {
    this.form = {
      id: null,
      productId: null,
      material: null,
      quality: null,
      pieces: null,
      donePieces: null,
      weight: null
    };
  }
}
