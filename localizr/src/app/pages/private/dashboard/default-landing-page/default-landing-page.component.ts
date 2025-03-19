import { Component } from '@angular/core';
import { MostRecentProjectsComponent } from '../components/most-recent-projects/most-recent-projects.component';

@Component({
  selector: 'lcl-default-landing-page',
  imports: [MostRecentProjectsComponent],
  templateUrl: './default-landing-page.component.html',
  styleUrl: './default-landing-page.component.scss',
})
export class DefaultLandingPageComponent {}
