import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WebshopHomeComponent} from './webshop-home/webshop-home.component';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'INFIRFS_s1157305_Frontend';
  protected readonly environment = environment;
}
