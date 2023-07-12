import {Component} from '@angular/core';
import {ItemService} from "../_services/item.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-item-edit-page',
  templateUrl: './item-edit-page.component.html',
  styleUrls: ['./item-edit-page.component.css']
})
export class ItemEditPageComponent {
  item: any = {
    id: null,
    material: null,
    quality: null,
    pieces: null,
    donePieces: null,
    weight: null,
  };
  params: any;

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe({
      next: params => {
        this.params = params;
        this.itemService.getItemByID(this.params.productId).subscribe({
          next: value => {
            this.item = value;
          }
        })
      }
    })
  }

  saveChanges() {
    const {id, material, quality, pieces, donePieces, weight} = this.item;
    this.itemService.updateItem(id, material, quality, pieces, donePieces, weight).subscribe({
      next: value => {
        this.router.navigate(['order-details', {id: this.params.orderId}]);
      }
    })
  }

  cancelChanges() {
    this.router.navigate(['order-details', {id: this.params.orderId}]);
  }
}
