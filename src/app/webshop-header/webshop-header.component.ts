import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {NgIf} from '@angular/common';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-webshop-header',
  imports: [
    TranslateModule,
    RouterLink
  ],
  templateUrl: './webshop-header.component.html',
  styleUrl: './webshop-header.component.scss'
})
export class WebshopHeaderComponent implements OnInit {
  protected authService = inject(AuthService);
  protected translateService = inject(TranslateService);
  protected router = inject(Router);

  currentLang: string = 'en';

  ngOnInit(): void {
    this.currentLang = this.translateService.currentLang || this.translateService.getDefaultLang() || 'en';
  }

  loginCheck(path: String): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate([path]);
    } else {
      this.router.navigate(["/login"]);
    }
  }

  switchLanguage(lang: string): void {
    this.translateService.use(lang);
    this.currentLang = lang;
  }
}
