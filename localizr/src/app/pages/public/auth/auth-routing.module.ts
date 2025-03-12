import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRedirectPageComponent } from './auth-redirect-page/auth-redirect-page.component';
import { AuthLogoutPageComponent } from './auth-logout-page/auth-logout-page.component';
import { AuthUnauthorizedPageComponent } from './auth-unauthorized-page/auth-unauthorized-page.component';

const routes: Routes = [
  { path: 'callback', component: AuthRedirectPageComponent },
  { path: 'logout', component: AuthLogoutPageComponent },
  { path: 'unauthorized', component: AuthUnauthorizedPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
