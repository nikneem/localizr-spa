import { Component } from '@angular/core';
import { PrivatePageMainNavigationComponent } from './components/private-page-main-navigation/private-page-main-navigation.component';

@Component({
  selector: 'lcl-private-page-layout',
  imports: [PrivatePageMainNavigationComponent],
  templateUrl: './private-page-layout.component.html',
  styleUrl: './private-page-layout.component.scss',
})
export class PrivatePageLayoutComponent {}
