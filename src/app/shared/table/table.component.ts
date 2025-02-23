import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnChanges {
  @Input() columns: string[] = []; 
  @Input() data: any[] = []; 
  @Input() actionEvent: boolean = false; 
  @Output() viewDetails = new EventEmitter<number>();

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data) {
      this.dataSource.data = this.data;
    }
    this.updateColumns();
  }

  updateColumns() {
    
    this.displayedColumns = [...this.columns];


    if (this.actionEvent && !this.displayedColumns.includes('actions')) {
      this.displayedColumns.push('actions');
    }
  }

  openPopup(id: number) {
    this.viewDetails.emit(id); 
  }
}
