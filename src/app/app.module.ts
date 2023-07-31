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
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';
import { ProductAddPageComponent } from './product-add-page/product-add-page.component';
import { ItemAddPageComponent } from './item-add-page/item-add-page.component';
import { ProductEditPageComponent } from './product-edit-page/product-edit-page.component';
import { ItemEditPageComponent } from './item-edit-page/item-edit-page.component';
import { WorkProgressPageComponent } from './work-progress-page/work-progress-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    CustomerPageComponent,
    OrderPageComponent,
    OrderAddPageComponent,
    OrderDetailsComponent,
    StatisticsPageComponent,
    ProductAddPageComponent,
    ItemAddPageComponent,
    ProductEditPageComponent,
    ItemEditPageComponent,
    WorkProgressPageComponent
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
