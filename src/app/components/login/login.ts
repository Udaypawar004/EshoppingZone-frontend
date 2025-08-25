import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.html'
})

export class LoginComponent {
  email = '';
  password = '';
  formError = '';

  constructor(private router: Router) {}

  onSubmit() {
    this.formError = '';
    if (!this.email || !this.password) {
      this.formError = 'Please enter email and password.';
      return;
    }
    // TODO: replace with real auth service call
    // simulate success
    this.router.navigate(['/']);
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}