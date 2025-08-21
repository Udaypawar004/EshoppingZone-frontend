import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { DarkModeService } from './app/services/DarkModeService';

bootstrapApplication(App, appConfig)
  .then(() => {
    // Initialize theme after app bootstrap
    const darkModeService = new DarkModeService();
    darkModeService.initTheme();
  })
  .catch((err) => console.error(err));
