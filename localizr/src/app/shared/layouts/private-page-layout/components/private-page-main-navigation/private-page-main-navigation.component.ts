import { Component, inject, OnInit, Signal } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { MenuItem } from 'primeng/api';
import { Store } from '@ngxs/store';
import { UserLoginSelectors } from '../../../../../states/user/user-selectors';
import { IUserLoginStateModel } from '../../../../../states/user/user-models';
import { SharedComponentsModule } from '../../../../shared-components/shared-components.module';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'lcl-private-page-main-navigation',
  imports: [RouterModule, SharedComponentsModule],
  templateUrl: './private-page-main-navigation.component.html',
  styleUrl: './private-page-main-navigation.component.scss',
})
export class PrivatePageMainNavigationComponent implements OnInit {
  items: MenuItem[] | undefined;
  profileMenuItems: MenuItem[];

  private readonly oidcSecurityService = inject(OidcSecurityService);

  userLoginState: Signal<IUserLoginStateModel>;

  constructor(private store: Store) {
    this.userLoginState = this.store.selectSignal(
      UserLoginSelectors.getLoginState
    );

    this.profileMenuItems = [
      {
        label: 'User',
        items: [
          {
            label: 'Personal profile',

            icon: 'pi pi-user',
            command: () => {
              this.navigateToProfile();
            },
          },
          {
            label: 'Preferences',
            icon: 'pi pi-cog',
            command: () => {
              this.navigateToProfile();
            },
          },
          {
            separator: true,
          },
          {
            label: 'Logoff',
            icon: 'pi pi-cog',
            command: () => {
              this.logoff();
            },
          },
        ],
      },
    ];
  }

  private navigateToProfile() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        route: '/app',
      },
      {
        label: 'Projects',
        route: 'projects',
      },
    ];
  }

  openIdConnectLogin() {
    this.oidcSecurityService.authorize();
  }

  logoff() {
    this.oidcSecurityService.logoff().subscribe(() => {
      console.log('Logged off');
    });
  }
}
