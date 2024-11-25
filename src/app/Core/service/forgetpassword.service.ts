import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../Environments/env';
import { Forgotpassword, resetPassword, verifyResetCode } from '../interface/forgotpassword';

@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {
  private readonly  _httpCliect = inject(HttpClient);

  constructor() { }


  forgotPassword(Data:Forgotpassword):Observable<any>{
    return this._httpCliect.post(`${environment.baseUrl}${environment.forgotPasswordRouter}` , Data)

  }
  
  verifyResetCode(Data:verifyResetCode):Observable<any>{
    return this._httpCliect.post(`${environment.baseUrl}${environment.verifyResetCodeRouter}` , Data)

  }
  
  ResetPassword(Data:resetPassword):Observable<any>{
    return this._httpCliect.put(`${environment.baseUrl}${environment.resetPasswordRouter}` , Data)

  }

}
