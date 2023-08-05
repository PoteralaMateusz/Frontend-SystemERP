import {Component, OnInit} from '@angular/core';
import {OrderService} from "../_services/order.service";
import {OrderStats} from "../model/orderStats";
import {TokenStorageService} from "../_services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.css']
})
export class StatisticsPageComponent implements OnInit {
  ordersStats: OrderStats[] = [];

  constructor(private orderService: OrderService, private tokenStorageService: TokenStorageService, private router: Router) {
  }

  ngOnInit(): void {
    if (!this.tokenStorageService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    this.orderService.getOrdersStats().subscribe({
      next: data => {
        this.ordersStats = data.sort((a, b) => a.daysToDeadline - b.daysToDeadline);
      }
    });
  }

  progressPercentage(workProgress: number): number {
    if (workProgress == null) {
      return 0;
    }
    if (isNaN(workProgress)) {
      return 0;
    }
    return Math.ceil(workProgress);
  }

  deadlineInformation(daysToDeadline: number): string {
    if (daysToDeadline == 1) {
      return daysToDeadline + ' day to deadline !!!';
    }
    if (daysToDeadline <= 0) {
      return Math.abs(daysToDeadline) + ' days after deadline !!!';
    }

    return daysToDeadline + ' days to deadline !';
  }
}
