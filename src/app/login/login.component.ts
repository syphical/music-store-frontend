import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {NgClass} from '@angular/common';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NgClass,
    TranslatePipe
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private authService = inject(AuthService);
  private router = inject(Router);
  private translateService = inject(TranslateService);
  protected formState: "idle" | "submitting" | "success" | "error" = "idle";
  protected errorMessage = "";
  public formSubmitted = false;

  protected loginForm = new FormGroup({
    "email": new FormControl("",
      [Validators.required, Validators.email]),
    "password": new FormControl("",
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/[A-Z]/), // 1 uppercase minimum
        Validators.pattern(/[a-z]/), // 1 lowercase minimum
        Validators.pattern(/\d/), // 1 digit minimum
        Validators.pattern(/[@$!%*?&]/) // 1 special char minimum
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
    this.formSubmitted = true;

    Object.keys(this.loginForm.controls).forEach(key => {
      const control = this.loginForm.get(key);
      control?.markAsTouched();
    });

    if (this.loginForm.invalid) {
      console.log("Invalid information");
      this.translateService.get('LOGIN.FORM_INVALID').subscribe(text => {
        this.errorMessage = text;
      });
      this.formState = 'error';
      return;
    }

    const loginData = {
      email: this.loginForm.get('email')?.value || "",
      password: this.loginForm.get('password')?.value || "",
    };

    this.formState = 'submitting';
    this.errorMessage = '';

    this.authService.login(loginData).subscribe({
      next: (responseData) => {
        this.formState = 'success';
        this.router.navigate([""])
      },
      error: (error) => {
        console.log("Login failed", error);
        this.translateService.get('LOGIN.LOGIN_FAILED').subscribe(text => {
          this.errorMessage = text;
        });
        this.formState = 'error';
      }
    })
  }
}
