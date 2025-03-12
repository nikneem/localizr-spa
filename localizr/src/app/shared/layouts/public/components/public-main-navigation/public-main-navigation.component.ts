import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { TranslateDirective } from '@ngx-translate/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

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
}
