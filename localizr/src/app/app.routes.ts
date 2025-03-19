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
    canActivate: [AuthorizationGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/private/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./pages/private/projects/projects.module').then(
            (m) => m.ProjectsModule
          ),
      },
      // {
      //   path: '**',
      //   redirectTo: 'dashboard',
      //   pathMatch: 'full',
      // },
    ],
  },
];
