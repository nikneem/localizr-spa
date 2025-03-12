import { Component } from '@angular/core';
import { PublicMainNavigationComponent } from './components/public-main-navigation/public-main-navigation.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lcl-public',
  imports: [RouterModule, PublicMainNavigationComponent],
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss',
})
export class PublicComponent {}
