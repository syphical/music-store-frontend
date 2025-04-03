import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WebshopHomeComponent} from './webshop-home/webshop-home.component';
import {environment} from '../environments/environment';
import { WebshopHeaderComponent } from './webshop-header/webshop-header.component';
import {FooterComponent} from './footer/footer.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WebshopHeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['nl', 'en']);
    this.translate.setDefaultLang('nl');
    this.translate.use(this.translate.getBrowserLang() || 'nl' );
  }

  title = 'INFIRFS_s1157305_Frontend';
  protected readonly environment = environment;
}
