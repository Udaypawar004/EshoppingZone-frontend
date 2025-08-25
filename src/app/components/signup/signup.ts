import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.html',
  imports: [FormsModule, CommonModule, RouterLink]
})
export class SignupComponent {
  merchantIcon = './seller-in-shop-icon.svg';

  isClient = true;
  isMerchant = false;
  isAdmin = false;

  onClientSelected() {
    this.isClient = true;
    this.isMerchant = false;
    this.isAdmin = false;
  }

  onMerchantSelected() {
    this.isClient = false;
    this.isMerchant = true;
    this.isAdmin = false;
  }

  onAdminSelected() {   
    this.isClient = false;
    this.isMerchant = false;
    this.isAdmin = true;
  }

  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  formError = '';

  constructor(private router: Router) {}

  onSubmit() {
    this.formError = '';
    if (!this.name || !this.email || !this.password || !this.confirmPassword) {
      this.formError = 'Please fill all fields.';
      return;
    }
    if (this.password !== this.confirmPassword) {
      this.formError = 'Passwords do not match.';
      return;
    }
    // TODO: call signup API
    this.router.navigate(['/']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}