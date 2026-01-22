import { ApplicationConfig, inject, ENVIRONMENT_INITIALIZER, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { IconService } from './core/services/icon.service';
import { provideHttpClient } from '@angular/common/http';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(MatDialogModule), 
    { provide: MatDialog, useClass: MatDialog },
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: () => inject(IconService)
    },
  ]
};
