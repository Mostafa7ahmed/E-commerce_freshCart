import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../Environments/env';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly  _httpCliect = inject(HttpClient);
  private readonly _router = inject(Router);

  private baseUlr: string;
  private signUpUlr: string;
  private signInUlr: string;
  userData: any = null;

  constructor() {
    this.baseUlr = `${environment.baseUrl}`;

    this.signUpUlr = `${environment.signupRouter}`;
    this.signInUlr = `${environment.signInRouter}`;
  }

  setRegiterForm(data: object): Observable<any> {
    return this._httpCliect.post(`${this.baseUlr}${this.signUpUlr}`, data);
  }

  setLoginForm(data: object): Observable<any> {
    return this._httpCliect.post(`${this.baseUlr}${this.signInUlr}`, data);
  }

  saveUserAuth(): void {
    if (localStorage.getItem('UserAuth') != null) {
      this.userData = jwtDecode(localStorage.getItem('UserAuth')!);
    }
  }

  SignOut() {
    localStorage.removeItem('UserAuth');
    this.userData = null;
    this._router.navigate(['/login']);
  }
}
