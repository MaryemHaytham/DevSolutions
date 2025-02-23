import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { AnalyticsService } from 'src/app/core/services/analytics/analytics.service';
import { OrdersService } from 'src/app/core/services/orders/orders.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  salesData: any[] = [];
  visitData: any[] = [];
  weekDays: string[] = [];
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'category'];

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit() {
    this.loadChartData();
    this.loadProducts();
  }

  loadChartData() {
    const chartData = this.analyticsService.getMockChartData();
    this.salesData = chartData.salesData;
    this.visitData = chartData.visitData;
    this.weekDays = chartData.weekDays;
  }

  loadProducts() {
    this.analyticsService.getProducts().subscribe({
      next: (res) => this.products = res,
      error: (err) => console.error("Error fetching products:", err)
    });
  }
}
