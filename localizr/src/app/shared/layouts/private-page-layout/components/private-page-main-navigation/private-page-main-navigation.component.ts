import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateDirective } from '@ngx-translate/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'lcl-private-page-main-navigation',
  imports: [CommonModule, RouterModule, MenubarModule, ButtonModule],
  templateUrl: './private-page-main-navigation.component.html',
  styleUrl: './private-page-main-navigation.component.scss',
})
export class PrivatePageMainNavigationComponent implements OnInit {
  items: MenuItem[] | undefined;

  private readonly oidcSecurityService = inject(OidcSecurityService);

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
