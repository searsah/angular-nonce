import { ApplicationConfig, CSP_NONCE, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

const nonceValue = (window as any).requestId || 'random-nonce';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: CSP_NONCE,
      useValue: nonceValue
    },
  ]
};
