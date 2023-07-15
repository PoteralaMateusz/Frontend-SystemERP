import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {CustomerPageComponent} from "./customer-page/customer-page.component";
import {OrderPageComponent} from "./order-page/order-page.component";
import {OrderAddPageComponent} from "./order-add-page/order-add-page.component";
import {OrderDetailsComponent} from "./order-details/order-details.component";
import {StatisticsPageComponent} from "./statistics-page/statistics-page.component";
import {ProductAddPageComponent} from "./product-add-page/product-add-page.component";
import {ItemAddPageComponent} from "./item-add-page/item-add-page.component";
import {ProductEditPageComponent} from "./product-edit-page/product-edit-page.component";
import {ItemEditPageComponent} from "./item-edit-page/item-edit-page.component";
import {WorkProgressPageComponent} from "./work-progress-page/work-progress-page.component";


const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'customers', component: CustomerPageComponent},
  {path: 'orders', component: OrderPageComponent},
  {path: 'add-order', component: OrderAddPageComponent},
  {path: 'add-product', component: ProductAddPageComponent},
  {path: 'edit-product', component: ProductEditPageComponent},
  {path: 'add-item', component: ItemAddPageComponent},
  {path: 'edit-item', component: ItemEditPageComponent},
  {path: 'order-details', component: OrderDetailsComponent},
  {path: 'work-progress', component: WorkProgressPageComponent},
  {path: 'statistics', component: StatisticsPageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
