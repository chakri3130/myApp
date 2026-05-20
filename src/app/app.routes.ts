import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'userdetails',
    loadComponent: () => import('./userdetails/userdetails.page').then( m => m.UserdetailsPage)
  },
];
