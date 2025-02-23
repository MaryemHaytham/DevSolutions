import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Output() sidebarToggled = new EventEmitter<boolean>();
  isCollapsed = window.innerWidth <= 768; 

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.sidebarToggled.emit(this.isCollapsed);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isCollapsed = event.target.innerWidth <= 768;
    this.sidebarToggled.emit(this.isCollapsed);
  }
}