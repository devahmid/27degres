import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/homepage/homepage.component').then(m => m.HomepageComponent)
  },
  {
    path: 'public',
    loadComponent: () => import('./components/public-homepage/public-homepage.component').then(m => m.PublicHomepageComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./components/member-dashboard/member-dashboard.component').then(m => m.MemberDashboardComponent)
  },
  {
    path: 'mobile',
    loadComponent: () => import('./components/mobile-dashboard/mobile-dashboard.component').then(m => m.MobileDashboardComponent)
  },
  {
    path: 'admin',
    loadComponent: () => import('./components/admin-interface/admin-interface.component').then(m => m.AdminInterfaceComponent)
  },
  {
    path: 'activities',
    loadComponent: () => import('./components/activities/activities.component').then(m => m.ActivitiesComponent)
  }
];

