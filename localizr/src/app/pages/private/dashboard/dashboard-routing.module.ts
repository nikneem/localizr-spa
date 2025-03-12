import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLandingPageComponent } from './default-landing-page/default-landing-page.component';
import { PrivatePageLayoutComponent } from '../../../shared/layouts/private-page-layout/private-page-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PrivatePageLayoutComponent,
    children: [{ path: '', component: DefaultLandingPageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
