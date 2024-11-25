import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../Core/service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass , RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {



  private readonly _httpAuth = inject(AuthService);
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _Router = inject(Router);


  isLoading: boolean = false;

  loginForm: FormGroup = this._FormBuilder.group(
    {
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.pattern(/^[A-Z][a-zA-Z0-9@#$%^&+=]{7,}$/), Validators.required]],
    },
  );

  registerFun()  {
    this.isLoading = true;
    if (this.loginForm.valid) {
      this._httpAuth.setLoginForm(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.isLoading = false;
          localStorage.setItem("UserAuth", res.token);
          this._httpAuth.saveUserAuth()
          this._Router.navigate(['/home'])
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.error.message);
          this.isLoading = false;
        },
      });
    }
  }


}
