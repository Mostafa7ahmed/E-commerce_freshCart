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
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private readonly _httpAuth = inject(AuthService);
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _Router = inject(Router);


  isLoading: boolean = false;

  registerForm: FormGroup = this._FormBuilder.group(
    {
      name: [ null, [Validators.required, Validators.minLength(3),Validators.maxLength(20), ]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.pattern(/^[A-Z][a-zA-Z0-9@#$%^&+=]{7,}$/), Validators.required]],
      rePassword: [null],
      phone: [ null,[Validators.pattern(/^01[0-2]\d{8}$/), Validators.required]],
    },
    {validators : this.ConfirmPasswordCustom}
  );

  registerFun()  {
    this.isLoading = true;
    if (this.registerForm.valid) {
      this._httpAuth.setRegiterForm(this.registerForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.isLoading = false;
          if(res.message === "success"){
            this._Router.navigate(['/login'])
          }
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.error.message);
          this.isLoading = false;
        },
      });
    }
  }

  ConfirmPasswordCustom(confirmPass: AbstractControl): any {
    if (
      confirmPass.get('password')?.value == confirmPass.get('rePassword')?.value
    ) {
      return null;
    } else {
      return { mismatch: true };
    }
  }
}
