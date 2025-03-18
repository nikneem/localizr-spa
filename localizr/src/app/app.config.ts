import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Material from '@primeng/themes/material';
import { routes } from './app.routes';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { authConfig } from './auth/auth.config';
import { authInterceptor, provideAuth } from 'angular-auth-oidc-client';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { withNgxsLoggerPlugin } from '@ngxs/logger-plugin';
import { provideStore } from '@ngxs/store';
import { UserLoginState } from './states/user/user-state';

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (
  http: HttpClient
) => new TranslateHttpLoader(http, './i18n/', '.json');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Material,
      },
    }),
    provideHttpClient(withInterceptors([authInterceptor()])),
    provideTranslateService({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    provideAuth(authConfig),
    provideStore(
      [UserLoginState],
      withNgxsReduxDevtoolsPlugin(),
      withNgxsLoggerPlugin()
    ),
  ],
};
