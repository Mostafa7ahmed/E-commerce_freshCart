import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../Environments/env';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly _httpCliect = inject(HttpClient);

  constructor() { }


  GetAllProdcuts(): Observable<any>{
     return this._httpCliect.get(`${environment.baseUrl}${environment.productsRouter}`)
  }

  GetSpecificProduct(idCategory :string | null): Observable<any>{
    return this._httpCliect.get(`${environment.baseUrl}${environment.productsRouter}/${idCategory}`)
 }
}
