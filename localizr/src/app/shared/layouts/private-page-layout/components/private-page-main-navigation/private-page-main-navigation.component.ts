import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, Signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateDirective } from '@ngx-translate/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { Store } from '@ngxs/store';
import { UserLoginSelectors } from '../../../../../states/user/user-selectors';
import { IUserLoginStateModel } from '../../../../../states/user/user-state';
import { MenuModule } from 'primeng/menu';
@Component({
  selector: 'lcl-private-page-main-navigation',
  imports: [
    CommonModule,
    AvatarModule,
    RouterModule,
    MenubarModule,
    ButtonModule,
    MenuModule,
  ],
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
}
