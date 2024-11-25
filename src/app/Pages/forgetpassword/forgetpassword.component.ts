import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss'
})
export class ForgetpasswordComponent {

  private readonly _FormBuilder = inject(FormBuilder);
  step:number =1;


  verifyEmail : FormGroup = this._FormBuilder.group({
    email: [null, [Validators.email, Validators.required]],

  });

  verifyCode : FormGroup = this._FormBuilder.group({
    resetCode: [null, [Validators.pattern(/^[0-9]{6}$/), Validators.required]],
  })

  resetPassword : FormGroup = this._FormBuilder.group({
    email: [null, [Validators.email, Validators.required]],
    newPassword: [null, [Validators.pattern(/^[A-Z][a-zA-Z0-9@#$%^&+=]{7,}$/), Validators.required]],

  })





}
