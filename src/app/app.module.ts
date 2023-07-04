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
import { OrderAddPageComponent } from './order-add-page/order-add-page.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    CustomerPageComponent,
    OrderPageComponent,
    OrderAddPageComponent,
    OrderDetailsComponent
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
