import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private authService = inject(AuthService);
  private router = inject(Router);
  protected formState: "idle" | "submitting" | "success" | "error" = "idle";
  protected errorMessage = "";
  public formSubmitted = false;

  protected registerForm = new FormGroup({
    "email": new FormControl("", [Validators.required, Validators.email]),
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
    "firstname": new FormControl("", [Validators.required]),
    "lastname": new FormControl("", [Validators.required]),
    "phonenumber": new FormControl("", [Validators.required]),
    "streetaddress": new FormControl("", [Validators.required]),
    "housenumber": new FormControl("", [Validators.required]),
    "zipcode": new FormControl("", [Validators.required]),
    "city": new FormControl("", [Validators.required]),
    "province": new FormControl("", [Validators.required]),
  })

  public get email() {
    return this.registerForm.get('email')
  }

  public get password() {
    return this.registerForm.get('password')
  }

  public get firstname() {
    return this.registerForm.get('firstname')
  }

  public get lastname() {
    return this.registerForm.get('lastname')
  }

  public get phonenumber() {
    return this.registerForm.get('phonenumber')
  }

  public get streetaddress() {
    return this.registerForm.get('streetaddress')
  }

  public get housenumber() {
    return this.registerForm.get('housenumber')
  }

  public get zipcode() {
    return this.registerForm.get('zipcode')
  }

  public get city() {
    return this.registerForm.get('city')
  }

  public get province() {
    return this.registerForm.get('province')
  }

  protected register(): void {
    this.formSubmitted = true;

    Object.keys(this.registerForm.controls).forEach(key => {
      const control = this.registerForm.get(key);
      control?.markAsTouched();
    });

    if (this.registerForm.invalid) {
      console.log("Invalid information");
      this.errorMessage = 'Vul alle verplichte velden correct in.';
      this.formState = 'error';
      return;
    }

    const registerData = {
      email: this.registerForm.get('email')?.value || "",
      password: this.registerForm.get('password')?.value || "",
      firstName: this.registerForm.get('firstname')?.value || "",
      lastName: this.registerForm.get('lastname')?.value || "",
      phoneNumber: this.registerForm.get('phonenumber')?.value || "",
      streetAddress: this.registerForm.get('streetaddress')?.value || "",
      houseNumber: this.registerForm.get('housenumber')?.value || "",
      zipcode: this.registerForm.get('zipcode')?.value || "",
      city: this.registerForm.get('city')?.value || "",
      province: this.registerForm.get('province')?.value || ""
    };

    this.formState = 'submitting';
    this.errorMessage = '';

    this.authService.register(registerData).subscribe({
      next: (response) => {
        console.log("Registration successful", response);
        this.formState = 'success';
        this.router.navigate(["/"]);
      },
      error: (error) => {
        console.log("Registration failed", error);
        this.errorMessage = 'Registratie mislukt. Controleer je gegevens en probeer het opnieuw.';
        this.formState = 'error';
      }
    });
  }
}
