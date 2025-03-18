import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, Signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { TranslateDirective } from '@ngx-translate/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Selector, Store } from '@ngxs/store';
import {
  UserLoginState,
  IUserLoginStateModel,
} from '../../../../../states/user/user-state';
import { UserLoginSelectors } from '../../../../../states/user/user-selectors';

@Component({
  selector: 'lcl-public-main-navigation',
  imports: [
    CommonModule,
    RouterModule,
    MenubarModule,
    ButtonModule,
    TranslateDirective,
  ],
  templateUrl: './public-main-navigation.component.html',
  styleUrl: './public-main-navigation.component.scss',
})
export class PublicMainNavigationComponent implements OnInit {
  items: MenuItem[] | undefined;

  isLoggedIn: Signal<IUserLoginStateModel>;

  constructor(private store: Store) {
    this.isLoggedIn = this.store.selectSignal(UserLoginSelectors.getLoginState);
    // let sub = this.store.select(UserLoginState.getAnimals).subscribe((animals) => {
    // });
  }

  private readonly oidcSecurityService = inject(OidcSecurityService);

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

  openIdConnectLogin() {
    this.oidcSecurityService.authorize();
  }
  openIdConnectLogout() {
    alert('a');
    this.oidcSecurityService.logoffAndRevokeTokens().subscribe((result) => {
      alert('c');
    });
  }
}
