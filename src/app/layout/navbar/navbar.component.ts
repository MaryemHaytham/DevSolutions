import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() sidebarCollapsed = false;
  isMenuOpen = false;
  hasNotifications = true; 

  user = {
    name: 'John Doe',
    avatar: 'https://i.pravatar.cc/150?img=3' 
  };

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}