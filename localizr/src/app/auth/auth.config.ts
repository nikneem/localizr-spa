import { PassedInitialConfig } from 'angular-auth-oidc-client';

export const authConfig: PassedInitialConfig = {
  config: {
    authority: 'https://localizr.eu.auth0.com',
    redirectUrl: `${window.location.origin}/auth/callback`,
    postLogoutRedirectUri: `${window.location.origin}/auth/logout`,
    clientId: 'ByEPU8v147RvT0dlTJGZGeKht4wG1fu8',
    scope: 'openid profile offline_access', // 'openid profile offline_access ' + your scopes
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    renewTimeBeforeTokenExpiresInSeconds: 30,
    triggerAuthorizationResultEvent: true,
    secureRoutes: ['https://localhost:7187'],
  },
};
