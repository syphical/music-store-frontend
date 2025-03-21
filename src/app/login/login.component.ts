import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  protected email = "";
  protected password = "";

  private loginService= inject(LoginService);
  private router = inject(Router);

  protected login(): void {
    const loginData = {email: this.email, password: this.password};
    this.loginService.login(loginData).subscribe({
      next: (responseData) => {
        this.router.navigate([""])
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
