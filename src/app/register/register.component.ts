import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private authService = inject(AuthService);
  private router = inject(Router);

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

  get email() {
    return this.registerForm.get('email')
  }

  get password() {
    return this.registerForm.get('password')
  }

  get firstname() {
    return this.registerForm.get('firstname')
  }

  get lastname() {
    return this.registerForm.get('lastname')
  }

  get phonenumber() {
    return this.registerForm.get('phonenumber')
  }

  get streetaddress() {
    return this.registerForm.get('streetaddress')
  }

  get housenumber() {
    return this.registerForm.get('housenumber')
  }

  get zipcode() {
    return this.registerForm.get('zipcode')
  }

  get city() {
    return this.registerForm.get('city')
  }

  get province() {
    return this.registerForm.get('province')
  }

  protected register(): void{

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

    if (this.registerForm.invalid) {
      console.log("Invalid information")
      return;
    }

    this.authService.register(registerData).subscribe({
      next: (response) => {
        console.log("Registration successful", response);
        this.router.navigate(["/"]);
      },
      error: (error) => {
        console.log("Registration failed", error);
      }
    })
  }
}
