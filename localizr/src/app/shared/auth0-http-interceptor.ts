import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, throwError, timer } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private jwtToken?: string;
  private secureRoutes?: string[];

  constructor(private oidc: OidcSecurityService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let copiedRequest = request;
    this.oidc.getAccessToken().subscribe((tkn) => {
      this.jwtToken = tkn;
      console.log('Token: ', this.jwtToken);
    });

    this.oidc.getConfiguration().subscribe((config) => {
      if (config != null) {
        this.secureRoutes = config.secureRoutes;
      }
    });

    if (
      this.jwtToken &&
      this.secureRoutes &&
      this.secureRoutes.some((route) =>
        request.url.toLocaleLowerCase().startsWith(route.toLocaleLowerCase())
      )
    ) {
      copiedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.jwtToken}`,
        },
      });
    }

    return next.handle(copiedRequest).pipe(
      retry({
        count: 3,
        delay: (err, retryCount) => {
          switch (err.status) {
            case 408:
            case 500:
            case 502:
            case 503:
            case 504:
              return timer(1000 * (retryCount * retryCount));
            default:
              return throwError(() => err);
          }
        },
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 0) {
          // Server not responding, connection lost?
        }
        return throwError(() => error);
      })
    );
  }
}

export const authHttpInterceptor: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};
