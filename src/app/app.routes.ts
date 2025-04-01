import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WebshopHomeComponent} from './webshop-home/webshop-home.component';
import { WebshopCartComponent } from './webshop-cart/webshop-cart.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {RegisterComponent} from './register/register.component';
import {WebshopProductListComponent} from './webshop-product-list/webshop-product-list.component';

export const routes: Routes = [
  {
    path: "",
    component: WebshopHomeComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
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
  },
  {
    path: "products",
    component: WebshopProductListComponent,
  }
];
