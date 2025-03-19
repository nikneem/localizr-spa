import { Component, inject, OnInit } from '@angular/core';
import { PrivatePageMainNavigationComponent } from './components/private-page-main-navigation/private-page-main-navigation.component';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'lcl-private-page-layout',
  imports: [PrivatePageMainNavigationComponent, RouterModule],
  templateUrl: './private-page-layout.component.html',
  styleUrl: './private-page-layout.component.scss',
})
export class PrivatePageLayoutComponent implements OnInit {
  private readonly returnUrlSettingName = 'localizr.returnUrl';
  private readonly oidcSecurityService = inject(OidcSecurityService);
  private readonly router = inject(Router);

  private getRedirectUrl(): string {
    let defaultRedirectUrl = '/app/dashboard';
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
