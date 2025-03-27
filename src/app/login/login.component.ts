import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private loginService = inject(LoginService);
  private router = inject(Router);

  protected loginForm = new FormGroup({
    "email": new FormControl("",
      [Validators.required, Validators.email]),
    "password": new FormControl("",
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/[A-Z]/),
        Validators.pattern(/[a-z]/),
        Validators.pattern(/\d/),
        Validators.pattern(/[@$!%*?&]/)
      ]
    ),
  })

  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('password')
  }

  protected login(): void {

    const loginData = {
      email: this.loginForm.get('email')?.value || "",
      password: this.loginForm.get('password')?.value || "",
    };

    if (this.loginForm.invalid) {
      console.log("Invalid login");
      return;
    }

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
