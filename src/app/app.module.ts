import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularClrModule} from 'src/app/angular-clr.module';
import {AppRoutingModule} from 'src/app/app-routing.module';
import {AuthInterceptor} from 'src/app/auth/auth-interceptor';
import {ErrorInterceptor} from 'src/app/error-interceptor';
import {ErrorComponent} from 'src/app/error/error.component';
import {GitReposModule} from 'src/app/git-repos/git-repos.module';
import {HeaderComponent} from 'src/app/header/header.component';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    GitReposModule,
    AppRoutingModule,
    AngularClrModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
