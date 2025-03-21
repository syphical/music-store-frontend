import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WebshopHomeComponent} from './webshop-home/webshop-home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lutetiaWebshop';
}
