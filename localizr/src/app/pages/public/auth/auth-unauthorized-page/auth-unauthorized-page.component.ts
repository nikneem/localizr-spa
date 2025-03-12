import { Component, inject } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
@Component({
  selector: 'lcl-auth-unauthorized-page',
  imports: [ButtonModule, FieldsetModule, TranslateDirective, TranslatePipe],
  templateUrl: './auth-unauthorized-page.component.html',
  styleUrl: './auth-unauthorized-page.component.scss',
})
export class AuthUnauthorizedPageComponent {
  private readonly oidcSecurityService = inject(OidcSecurityService);

  openIdConnectLogin() {
    this.oidcSecurityService.authorize();
  }
}
