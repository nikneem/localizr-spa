import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'lcl-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private readonly returnUrlSettingName = 'localizr.returnUrl';
  private readonly oidcSecurityService = inject(OidcSecurityService);
  private readonly router = inject(Router);

  title = 'localizr';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

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
    this.oidcSecurityService.checkAuth().subscribe((authResult) => {
      if (authResult.isAuthenticated) {
        this.router.navigate([this.getRedirectUrl()]);
      }
    });
  }
}
