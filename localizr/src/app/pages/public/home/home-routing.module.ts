import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLandingPageComponent } from './home-landing-page/home-landing-page.component';
import { PublicComponent } from '../../../shared/layouts/public/public.component';
import { HomeFeaturesPageComponent } from './home-features-page/home-features-page.component';
import { HomePricingPageComponent } from './home-pricing-page/home-pricing-page.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', component: HomeLandingPageComponent },
      { path: 'features', component: HomeFeaturesPageComponent },
      { path: 'pricing', component: HomePricingPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
