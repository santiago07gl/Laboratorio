import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { StorefrontShell } from './app/storefront-shell';

bootstrapApplication(StorefrontShell, appConfig)
  .catch((err) => console.error(err));
