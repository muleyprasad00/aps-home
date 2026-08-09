import {
  ApplicationConfig,
  importProvidersFrom
} from '@angular/core';
import { environment } from '../environments/environment';

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { GraphqlModule } from 'aps-common-ui';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      GraphqlModule.forRoot(environment.apiUrl),
    )
  ]
};