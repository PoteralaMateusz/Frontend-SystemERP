import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OrderService} from "../_services/order.service";
import {Order} from "../model/order";
import {Item} from "../model/item";
import {ItemService} from "../_services/item.service";
import {ProductService} from "../_services/product.service";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {
  params: any;
  order = {} as Order;
  toUpdate = false;
  isEditMode = false;
  isFinished = true;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private orderService: OrderService,
              private itemService: ItemService,
              private productService: ProductService) {
    this.route.params.subscribe(params => {
      this.params = params;
    });
    this.orderService.getOrderById(this.params.id).subscribe({
      next: data => {
        this.order = data;
        if (this.order.finishDate != null) {
          this.isFinished = false;
        }
      }
    });
  }

  updateItem(item: Item) {
    this.router.navigate(['edit-item', {itemId: item.id, orderId: this.params.id}]);
  }

  deleteItem(item: Item) {
    this.itemService.deleteItem(item.id).subscribe();
    window.location.reload();
  }

  addItem(productId: number) {
    this.router.navigate(['edit-item', {productId: productId, orderId: this.params.id}]);
  }

  editMode() {
    this.isEditMode = !this.isEditMode;
  }

  addNewProduct() {
    this.router.navigate(['add-product', {orderId: this.params.id}]);
  }

  editProduct(id: number) {
    this.router.navigate(['edit-product', {productId: id}]);
  }

  deleteProduct(id: number) {
    this.productService.deleteProductById(id).subscribe();
    window.location.reload();
  }


}
