import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './mobile-dashboard.component.html',
  styleUrl: './mobile-dashboard.component.css'
})
export class MobileDashboardComponent {
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}

