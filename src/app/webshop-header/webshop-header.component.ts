import {Component, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-webshop-header',
  imports: [
    RouterLink
  ],
  templateUrl: './webshop-header.component.html',
  styleUrl: './webshop-header.component.scss'
})
export class WebshopHeaderComponent {
  protected authService = inject(AuthService);
  protected router = inject(Router);

  loginCheck(path: String): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate([path]);
    } else {
      this.router.navigate(["/login"]);
    }
  }
}
