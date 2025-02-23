import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-view-dialog',
  templateUrl: './view-dialog.component.html',
  styleUrls: ['./view-dialog.component.scss']
})
export class ViewDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ViewDialogComponent >,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  getStarsArray(rate: number): number[] {
    return Array(Math.round(rate)).fill(0);
  }

}
