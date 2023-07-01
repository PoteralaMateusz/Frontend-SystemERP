import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {authInterceptorProviders} from "./_helpers/auth.interceptor";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { RegisterPageComponent } from './register-page/register-page.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { OrderPageComponent } from './order-page/order-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    CustomerPageComponent,
    OrderPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
