import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppInterceptor } from './app.interceptor';
import { AuthModule } from './auth/auth.module';
import { ContentModule } from './content/content.module';
import { NavModule } from './nav/nav.module';
import { PreferencesService } from './preferences/preferences.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AuthModule,
    NavModule,
    ContentModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    PreferencesService,
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
