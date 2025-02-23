import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrdersService } from 'src/app/core/services/orders/orders.service';
import { ViewDialogComponent } from './view-dialog/view-dialog.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  orders: any[] = [];
  orderColumns: string[] = ['id', 'title', 'price', 'category'];

  constructor(private ordersService: OrdersService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.ordersService.getAllProducts().subscribe({
      next: (res) => {
        this.orders = res;
      },
      error: (err) => {
        console.error('Error fetching orders:', err);
      }
    });
  }

  viewOrderDetails(orderId: number) {
    const order = this.orders.find((o) => o.id === orderId);
    if (order) {
      this.dialog.open(ViewDialogComponent, {
        width: '500px',
        data: order
      });
    }
  }
}
