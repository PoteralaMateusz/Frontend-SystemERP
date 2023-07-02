import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerService} from "../_services/customer.service";
import {Product} from "../model/product";
import {OrderService} from "../_services/order.service";
import {Item} from "../model/item";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-add-page',
  templateUrl: './order-add-page.component.html',
  styleUrls: ['./order-add-page.component.css']
})
export class OrderAddPageComponent implements OnInit {
  customers = {} as Customer[];
  orderDetail:any = {
    customerId: null,
    orderNumber: '',
    orderDate: null,
    deadline: null,
    finishDate: null,
    price: null,
    products: {} as Product,
    items: {} as Item
  };
  orderDetailsSubmit = false;
  productDetailsSubmit = false;
  orderId:any;
  productId:any;
  message= '';

  constructor(private customerService: CustomerService, private orderService:OrderService, private router:Router) {

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
    this.orderService.saveOrder(customerId,orderNumber,orderDate,deadline,finishDate,price).subscribe({
      next: data => {
        this.orderId = data.id;
      }
    });
    this.orderDetailsSubmit = true;
  }

  submitProductDetails() {
    console.log(this.orderDetail.products);
    this.orderService.addProductToOrder(this.orderId, this.orderDetail.products.drawingName, this.orderDetail.products.pieces).subscribe({
      next: value => {
        this.productId = value.id;
        this.productDetailsSubmit = true;
      }
    });
  }

  submitItemDetails() {
    this.orderService.addItemToProduct(
      this.productId,
      this.orderDetail.items.material,
      this.orderDetail.items.quality,
      this.orderDetail.items.pieces,
      this.orderDetail.items.weight
    ).subscribe();
    this.message = "Item added successful! Add next item, new product or done create order.";
    this.orderDetail.items = {};
  }

  addNextProduct() {
    this.message = "";
    this.productDetailsSubmit = false;
    this.productId = null;
    this.orderDetail.products = {};
  }

  done() {
    this.router.navigate(['/orders']);
  }
}
