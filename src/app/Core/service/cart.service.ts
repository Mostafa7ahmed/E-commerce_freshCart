import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../Environments/env';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly _HttpClient = inject(HttpClient);

  constructor() {}

  addProductToCart(productId: string): Observable<any> {
    return this._HttpClient.post(
      `${environment.baseUrl}${environment.cartRouter}`,
      {
        productId: productId,
      }
    );
  }

  getProductCarts(): Observable<any> {
    return this._HttpClient.get(
      `${environment.baseUrl}${environment.cartRouter}`
    );
  }


  deleteProductFromCart(IdProdcut:string):Observable<any>{
    return this._HttpClient.delete(`${environment.baseUrl}${environment.cartRouter}/${IdProdcut}`
    )
  }

  deleteAllCart():Observable<any>{
    return this._HttpClient.delete(`${environment.baseUrl}${environment.cartRouter}`
    )
  }

  
  updateProductFromCart(IdProdcut:string, newCount:number):Observable<any>{
    return this._HttpClient.put(`${environment.baseUrl}${environment.cartRouter}/${IdProdcut}`,
      {
       "count":newCount
      }
    )
  }
}
