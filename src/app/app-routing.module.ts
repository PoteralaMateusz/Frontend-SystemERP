import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {CustomerPageComponent} from "./customer-page/customer-page.component";
import {OrderPageComponent} from "./order-page/order-page.component";


const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'customers', component: CustomerPageComponent},
  {path: 'orders', component: OrderPageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
