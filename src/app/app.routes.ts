import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WebshopHomeComponent} from './webshop-home/webshop-home.component';
import { WebshopCartComponent } from './webshop-cart/webshop-cart.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: WebshopHomeComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "cart",
    component: WebshopCartComponent,
  },
  {
    path: "products/:id",
    component: ProductDetailComponent,
  }
];
