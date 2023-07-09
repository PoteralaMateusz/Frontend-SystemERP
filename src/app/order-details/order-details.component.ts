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
  orderId: any;
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
  toUpdate = false;
  operation = "Add";
  isEditMode = false;

  constructor(private route: ActivatedRoute, private router: Router,
              private orderService: OrderService, private itemService: ItemService,
              private productService: ProductService) {
    this.route.params.subscribe(params => {
      this.orderId = params;
    });
    this.orderService.getOrderById(this.orderId.id).subscribe({
      next: data => {
        this.order = data;
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
    this.toUpdate = true;
    this.operation = "Save";
  }

  deleteItem(item: Item) {
    this.itemService.deleteItem(item.id).subscribe();
    window.location.reload();
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
    this.toUpdate = false;
    this.operation = "Add";

  }

  addOrUpdateItem(productId: number) {
    if (this.toUpdate) {
      const {id, material, quality, pieces, donePieces, weight} = this.form;
      this.itemService.updateItem(id, material, quality, pieces, donePieces, weight).subscribe();
      window.location.reload();
    } else {
      const {material, quality, pieces, weight} = this.form;
      this.itemService.addItem(productId, material, quality, pieces, weight).subscribe();
      window.location.reload();
    }
  }

  editMode() {
    this.isEditMode = !this.isEditMode;
  }

  addNewProduct() {
    this.router.navigate(['add-product', {orderId: this.orderId.id}]);
  }

  editProduct(id: number) {
    this.router.navigate(['edit-product', {productId: id}]);
  }

  deleteProduct(id: number) {
    this.productService.deleteProductById(id).subscribe();
    window.location.reload();
  }
}
