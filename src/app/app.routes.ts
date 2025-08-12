import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./features/movies/presentation/pages/home').then(m => m.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./features/movies/presentation/pages/login').then(m => m.LoginPage)
  }
];
