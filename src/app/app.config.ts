import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { headersInterceptor } from './Core/interceptors/headers.interceptor';
import { errorInterceptor } from './Core/interceptors/error.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { loadingInterceptor } from './Core/interceptors/loading.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Create Function To Load Files from assets/i18n/

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withViewTransitions()),
    provideClientHydration() ,
   provideHttpClient(withFetch(),withInterceptors([headersInterceptor,errorInterceptor, loadingInterceptor])),
   provideAnimations(),
   importProvidersFrom(
    NgxSpinnerModule,
    TranslateModule.forRoot({
      defaultLanguage:"en",
      loader:{
        provide :TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    })

   ),
   
  
  ]
};
