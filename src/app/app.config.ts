import { ApplicationConfig } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app-routing.module';
import { ManagementServiceService } from './services/management-service.service';
import { TitleCasePipe } from './shared/pipes/title-case.pipe';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    ManagementServiceService,
    TitleCasePipe,
  ],
};
