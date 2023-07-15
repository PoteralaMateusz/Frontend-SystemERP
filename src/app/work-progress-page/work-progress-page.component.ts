import {Component} from '@angular/core';
import {Order} from "../model/order";
import {ActivatedRoute, Router} from "@angular/router";
import {OrderService} from "../_services/order.service";
import {ItemService} from "../_services/item.service";

@Component({
  selector: 'app-work-progress-page',
  templateUrl: './work-progress-page.component.html',
  styleUrls: ['./work-progress-page.component.css']
})
export class WorkProgressPageComponent {
  params: any;
  order = {} as Order;
  donePieces: number[][] = [[],[]];

  constructor(private route: ActivatedRoute, private router: Router, private orderService: OrderService,private itemService:ItemService) {
    this.route.params.subscribe({
      next: params => {
        this.params = params;
        this.orderService.getOrderById(this.params['id']).subscribe({
          next: value => {
            this.order = value;
          }
        })
      }
    })
  }

  addProgress(itemId:number,i:number,j:number) {
    this.itemService.addProgressItem(itemId,this.donePieces[i][j]).subscribe();
    window.location.reload();
  }
}
