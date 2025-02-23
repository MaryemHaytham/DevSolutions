import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  sidebarCollapsed = window.innerWidth <= 768;

  onSidebarToggle(collapsed: boolean) {
    this.sidebarCollapsed = collapsed;
  }

}
