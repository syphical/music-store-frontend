import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WebshopHomeComponent} from './webshop-home/webshop-home.component';

export const routes: Routes = [
  {
    path: '',
    component: WebshopHomeComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  }
];
