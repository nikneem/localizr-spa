import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { SetLoginState } from './states/user/user-actions';

@Component({
  selector: 'lcl-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'localizr';

  private oicsSecurityService = inject(OidcSecurityService);

  constructor(private translate: TranslateService, private store: Store) {
    this.translate.addLangs(['en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit(): void {
    this.oicsSecurityService.checkAuth().subscribe((authResult) => {
      console.log('is authenticated', authResult.isAuthenticated);
      this.store.dispatch(
        new SetLoginState(
          authResult.isAuthenticated,
          authResult.userData.name,
          authResult.userData.picture
        )
      );
    });
  }
}
