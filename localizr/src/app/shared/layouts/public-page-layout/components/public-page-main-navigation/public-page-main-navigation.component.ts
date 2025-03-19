import { Component, inject, Signal } from '@angular/core';
import { SharedComponentsModule } from '../../../../shared-components/shared-components.module';
import { MenuItem } from 'primeng/api';
import { IUserLoginStateModel } from '../../../../../states/user/user-models';
import { Store } from '@ngxs/store';
import { UserLoginSelectors } from '../../../../../states/user/user-selectors';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'lcl-public-page-main-navigation',
  imports: [SharedComponentsModule, RouterModule],
  templateUrl: './public-page-main-navigation.component.html',
  styleUrl: './public-page-main-navigation.component.scss',
})
export class PublicPageMainNavigationComponent {
  items: MenuItem[] | undefined;

  isLoggedIn: Signal<IUserLoginStateModel>;

  constructor(private store: Store) {
    this.isLoggedIn = this.store.selectSignal(UserLoginSelectors.getLoginState);
    // let sub = this.store.select(UserLoginState.getAnimals).subscribe((animals) => {
    // });
  }

  private readonly oidcSecurityService = inject(OidcSecurityService);
  private readonly router = inject(Router);

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        route: '/',
      },
      {
        label: 'Features',
        route: 'features',
      },
      {
        label: 'Pricing',
        route: 'pricing',
      },
      {
        label: 'Contact',
      },
    ];
  }
  navigateMainDashboard() {
    this.router.navigate(['/app/dashboard']);
  }
  openIdConnectLogin() {
    this.oidcSecurityService.authorize();
  }
  openIdConnectLogout() {
    this.oidcSecurityService.logoffAndRevokeTokens().subscribe((result) => {
      console.log('Logged out');
    });
  }
}
