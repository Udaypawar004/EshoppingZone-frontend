// user.service.ts
import { inject, Injectable } from '@angular/core';
import axios from 'axios';
import { loginCredentials, registerCredentials } from '../model/Auth';
import { Router } from '@angular/router';
import { environment } from 'src/environments/env';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = environment.NG_APP_BACKEND_URL || '';
  private router = inject(Router);

  async login(user: loginCredentials): Promise<any> {
    try {
      const response = await axios.post(`${this.baseUrl}/userservice/auth/login`, user, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status !== 200) {
        throw new Error('Login failed');
      }

      return response.data;

    } catch (error) {
      console.error('Error logging in user:', error);
      this.router.navigate(['/error']);
    }
  }
}
