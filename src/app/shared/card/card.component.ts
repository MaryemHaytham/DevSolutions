import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title!: string;
  @Input() value!: string;
  @Input() icon!: string;
  @Input() percentage?: string;
  @Input() percentageType?: 'positive' | 'negative';

}
