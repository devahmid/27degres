import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-public-homepage',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './public-homepage.component.html',
  styleUrl: './public-homepage.component.css'
})
export class PublicHomepageComponent {
}

