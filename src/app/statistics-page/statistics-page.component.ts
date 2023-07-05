import {Component, OnInit} from '@angular/core';
import {OrderService} from "../_services/order.service";
import {OrderStats} from "../model/orderStats";

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.css']
})
export class StatisticsPageComponent implements OnInit{
  ordersStats = {} as OrderStats[];

  constructor(private orderService:OrderService) {
  }

  ngOnInit(): void {
    this.orderService.getOrdersStats().subscribe({
      next: data => {
        this.ordersStats = data.sort((a, b) => a.daysToDeadline - b.daysToDeadline);
      }
    });
  }

  progressPercentage(workProgress:number):number {
    if (workProgress == null){
      return 0;
    }
    if (isNaN(workProgress)){
      return 0;
    }
    return Math.ceil(workProgress);
  }

  deadlineInformation(daysToDeadline: number):string {
    if(daysToDeadline == 1){
      return daysToDeadline + ' day to deadline !!!';
    }
    if (daysToDeadline <= 0){
      return Math.abs(daysToDeadline) + ' days after deadline !!!';
    }

    return daysToDeadline + ' days to deadline !';
  }
}
