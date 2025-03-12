import { Routes } from '@angular/router';
import { AuthorizationGuard } from './shared/auth-guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/public/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/public/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./pages/private/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [AuthorizationGuard],
  },
];
