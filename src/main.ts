import {ApplicationRef, enableProdMode} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {enableDebugTools} from "@angular/platform-browser";

if (environment.production) {
  enableProdMode();
}

async function bootstrap() {
  const module = await platformBrowserDynamic().bootstrapModule(
      AppModule
  );
  if (!environment.production) {
    const applicationRef = module.injector.get(ApplicationRef);
    const appComponent = applicationRef.components[0];
    enableDebugTools(appComponent);
  }
  return module;
}

bootstrap().catch(err => console.error(err));

