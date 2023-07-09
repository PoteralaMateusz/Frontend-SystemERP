import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ItemService} from "../_services/item.service";
import {Product} from "../model/product";
import {ProductService} from "../_services/product.service";

@Component({
  selector: 'app-item-add-page',
  templateUrl: './item-add-page.component.html',
  styleUrls: ['./item-add-page.component.css']
})
export class ItemAddPageComponent {
  item: any = {
    material: null,
    quality: null,
    pieces: null,
    weight: null,
  };
  product = {} as Product;
  productId: any;
  orderId: any;

  constructor(private route: ActivatedRoute, private router: Router, private itemService: ItemService, private productService: ProductService) {
    this.route.params.subscribe(params => {
      this.productId = params['productId'];
      this.orderId = params['orderId'];
      this.productService.getProductById(this.productId).subscribe({
          next: value => {
            this.product = value;
          }
        }
      )
    });

  }

  submitItemDetails() {
    this.itemService.addItemToProduct(
      this.productId,
      this.item.material,
      this.item.quality,
      this.item.pieces,
      this.item.weight
    ).subscribe();
    this.item = {};
    window.location.reload();
  }

  addNextProduct() {
    this.router.navigate(['add-product', {orderId: this.orderId}]);
  }

  done() {
    this.router.navigate(['/orders']);
  }
}
