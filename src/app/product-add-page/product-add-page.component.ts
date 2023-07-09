import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../_services/product.service";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add-page.component.html',
  styleUrls: ['./product-add-page.component.css']
})
export class ProductAddPageComponent {
  product: any = {
    drawingName: null,
    pieces: null
  };
  orderId: any;
  productId: any;

  constructor(private productService:ProductService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.orderId = params['orderId'];
    });
  }


  submitProductDetails() {
    this.productService.addProductToOrder(this.orderId, this.product.drawingName, this.product.pieces).subscribe({
      next: value => {
        this.productId = value.id;
        this.router.navigate(['add-item', {orderId: this.orderId, productId: this.productId}]);
      }
    });
  }
}
