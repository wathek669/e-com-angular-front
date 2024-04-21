import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { error } from 'console';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private snack: MatSnackBar,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
    });
  }
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  onSubmit() {
    const passowrd = this.signupForm.get('password')?.value;
    const confirmPassword = this.signupForm.get('confirmPassword')?.value;
    if (passowrd != confirmPassword) {
      this.snack.open('Password do not match. ', 'Close', {
        duration: 5000,
        panelClass: 'error-snackbar',
      });
      return;
    }
    this.authService.register(this.signupForm.value).subscribe(
      (respone) => {
        this.snack.open('Signup successful', 'Close', { duration: 5000 });
      },
      (error) => {
        this.snack.open('Signup failed. Please try again', 'Close', {
          duration: 5000,
        });
      }
    );
  }
}
