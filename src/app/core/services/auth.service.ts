import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

interface UserCredentials {
  login: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private mockAccount: UserCredentials = {
    login: 'navega@navega.com',
    password: 'navega'
  };

  private sessionActive: boolean = false;

  constructor(private router: Router) {}

  hasActiveSession(): boolean {
    return this.sessionActive;
  }

  signIn(username: string, password: string): Observable<boolean> {
    const valid = username === this.mockAccount.login && password === this.mockAccount.password;

    if (valid) {
      this.sessionActive = true;
      localStorage.setItem('sessionToken', 'mock-session-token');
    }

    return of(valid);
  }

  signOut(): void {
    this.sessionActive = false;
    localStorage.removeItem('sessionToken');
    this.router.navigate(['/login']);
  }
}
