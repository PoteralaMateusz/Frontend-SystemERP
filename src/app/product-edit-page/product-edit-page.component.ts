import { Component } from '@angular/core';
import {ProductService} from "../_services/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-edit-page',
  templateUrl: './product-edit-page.component.html',
  styleUrls: ['./product-edit-page.component.css']
})
export class ProductEditPageComponent {
  productId:any;
  product: any;

  constructor(private productService:ProductService,private route:ActivatedRoute,private router:Router) {
    this.route.params.subscribe({
      next: params => {
        this.productId = params['productId'];
        this.productService.getProductById(this.productId).subscribe({
          next: value => {
            this.product = value;
          }
        })
      }
    })
  }


  saveChanges() {
    this.productService.updateProduct(this.productId,this.product.drawingName,this.product.pieces).subscribe();
    this.router.navigate(['order-details',{id: this.product.orderId}]);
  }

  cancelChanges() {
    this.router.navigate(['order-details',{id: this.product.orderId}]);
  }
}
