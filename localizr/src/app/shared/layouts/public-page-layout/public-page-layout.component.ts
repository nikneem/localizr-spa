import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PublicPageMainNavigationComponent } from './components/public-page-main-navigation/public-page-main-navigation.component';

@Component({
  selector: 'lcl-public-page-layout',
  imports: [RouterModule, PublicPageMainNavigationComponent],
  templateUrl: './public-page-layout.component.html',
  styleUrl: './public-page-layout.component.scss',
})
export class PublicPageLayoutComponent {}
