import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MatIconModule } from '@angular/material/icon';
import { ChartComponent } from './chart/chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';




@NgModule({
  declarations: [
    CardComponent,
    ChartComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    NgApexchartsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    CardComponent,
    ChartComponent,
    TableComponent
  ]
})
export class SharedModule { }
