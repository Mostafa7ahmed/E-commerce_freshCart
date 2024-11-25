import {
  verifyResetCode,
  resetPassword,
} from './../../Core/interface/forgotpassword';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ForgetpasswordService } from '../../Core/service/forgetpassword.service';
import { Router } from '@angular/router';
import { AuthService } from '../../Core/service/auth.service';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss',
})
export class ForgetpasswordComponent {
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _Router = inject(Router);
  private readonly _httpAuth = inject(AuthService);

  private readonly _ForgetpasswordService = inject(ForgetpasswordService);

  step: number = 1;

  verifyEmail: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.email, Validators.required]],
  });

  verifyCode: FormGroup = this._FormBuilder.group({
    resetCode: [null, [Validators.pattern(/^[0-9]{6}$/), Validators.required]],
  });

  resetPassword: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.email, Validators.required]],
    newPassword: [
      null,
      [
        Validators.pattern(/^[A-Z][a-zA-Z0-9@#$%^&+=]{7,}$/),
        Validators.required,
      ],
    ],
  });

  verifyEmailSubmit() {
    let emailValue = this.verifyEmail.get("email")?.value;
    this.resetPassword.get("email")?.patchValue(emailValue)
    this._ForgetpasswordService
      .forgotPassword(this.verifyEmail.value)
      .subscribe({
        next: (res) => {
          if (res.statusMsg === 'success') {
            this.step = 2;
          }
        },
      });
  }

  verifyResetCodeSubmit() {
    this._ForgetpasswordService
      .verifyResetCode(this.verifyCode.value)
      .subscribe({
        next: (res) => {
          this.step = 3;

        },
      });
  }

  resetPasswordSubmit() {
    this._ForgetpasswordService
      .ResetPassword(this.resetPassword.value)
      .subscribe({
        next: (res) => {
          localStorage.setItem('UserAuth', res.token);
          this._httpAuth.saveUserAuth();
          this._Router.navigate(['/home']);  if (res.statusMsg === 'success') {
           
          }
        },
      });
  }
}
