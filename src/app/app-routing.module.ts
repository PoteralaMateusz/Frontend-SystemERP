import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {CustomerPageComponent} from "./customer-page/customer-page.component";
import {OrderPageComponent} from "./order-page/order-page.component";
import {OrderAddPageComponent} from "./order-add-page/order-add-page.component";
import {OrderDetailsComponent} from "./order-details/order-details.component";
import {StatisticsPageComponent} from "./statistics-page/statistics-page.component";


const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'customers', component: CustomerPageComponent},
  {path: 'orders', component: OrderPageComponent},
  {path: 'add-order', component: OrderAddPageComponent},
  {path: 'order-details', component: OrderDetailsComponent},
  {path: 'statistics', component: StatisticsPageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
