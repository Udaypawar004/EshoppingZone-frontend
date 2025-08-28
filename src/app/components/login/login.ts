import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ZardLoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, ZardLoaderComponent],
  templateUrl: './login.html'
})
export class LoginComponent {
  isLoading = false;

  constructor(private router: Router, private userService: UserService) {}

  onSubmit(email: string, password: string) {
    this.isLoading = true;

    if (!email || !password) {
      this.isLoading = false;
      return;
    }

    const response = this.userService.login({ email, password });
    response
      .then((res: any) => {
        if (!res || !res.jwtToken) {
          this.isLoading = false;
          this.router.navigate(['/login']);
          return;
        }
        this.isLoading = false;
        localStorage.setItem('token', res.jwtToken);
        this.router.navigate(['/']);
      })
      .catch((err: any) => {
        this.isLoading = false;
        this.router.navigate(['/error']);
      });
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}