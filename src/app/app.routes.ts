import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/movies/presentation/pages/login').then(m => m.LoginPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./features/movies/presentation/pages/login').then(m => m.LoginPage)
  }
];
