import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'lcl-auth-redirect-page',
  imports: [FieldsetModule, TranslatePipe, TranslateDirective],
  templateUrl: './auth-redirect-page.component.html',
  styleUrl: './auth-redirect-page.component.scss',
})
export class AuthRedirectPageComponent implements OnInit {
  private readonly returnUrlSettingName = 'localizr.returnUrl';
  private readonly oidcSecurityService = inject(OidcSecurityService);
  private readonly router = inject(Router);

  constructor() {}

  private getRedirectUrl(): string {
    let defaultRedirectUrl = '/app';
    let savedReturnUrl = sessionStorage.getItem(this.returnUrlSettingName);
    if (savedReturnUrl) {
      defaultRedirectUrl = savedReturnUrl;
    }

    sessionStorage.removeItem(this.returnUrlSettingName);
    return defaultRedirectUrl;
  }

  ngOnInit(): void {
    this.oidcSecurityService.isAuthenticated$.subscribe((authResult) => {
      if (authResult.isAuthenticated) {
        this.router.navigate([this.getRedirectUrl()]);
      }
    });
  }
}
