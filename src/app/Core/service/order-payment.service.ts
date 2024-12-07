import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../Environments/env';

@Injectable({
  providedIn: 'root'
})
export class OrderPaymentService {

  
  constructor(private _HttpClient:HttpClient) { }
  private myheader: any = { token: localStorage.getItem('UserAuth') };

  checkOut(cardId:any, shipingData:object):Observable<any>{
     
    return this._HttpClient.post(`${environment.baseUrl}${environment.orderPaymentRouter}/${cardId}?url=${environment.urlRouter}`,
      {

          "shippingAddress":shipingData
      }
    )

  }
}
