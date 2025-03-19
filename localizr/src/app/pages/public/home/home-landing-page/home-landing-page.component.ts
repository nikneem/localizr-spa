import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SharedComponentsModule } from '../../../../shared/shared-components/shared-components.module';
@Component({
  selector: 'lcl-home-landing-page',
  templateUrl: './home-landing-page.component.html',
  styleUrl: './home-landing-page.component.scss',
  imports: [SharedComponentsModule],
})
export class HomeLandingPageComponent {}
