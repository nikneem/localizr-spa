import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'lcl-auth-logout-page',
  imports: [FieldsetModule, TranslatePipe, TranslateDirective],
  templateUrl: './auth-logout-page.component.html',
  styleUrl: './auth-logout-page.component.scss',
})
export class AuthLogoutPageComponent {
  private router = inject(Router);

  constructor() {
    // Navigate to the main page in 4 seconds
    setTimeout(() => {
      this.navigateMainPage();
    }, 4000);
  }

  private navigateMainPage(): void {
    this.router.navigate(['/']);
  }
}
