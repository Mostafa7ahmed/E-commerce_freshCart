import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../Environments/env';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly _httpCliect = inject(HttpClient);

  constructor() { }



  
  GetAllCategories(): Observable<any>{
    return this._httpCliect.get(`${environment.baseUrl}${environment.categoriesRouter}`)
 }

 GetSpecificCategories(idProduct :string): Observable<any>{
   return this._httpCliect.get(`${environment.baseUrl}${environment.categoriesRouter}/${idProduct}`)
}
}
