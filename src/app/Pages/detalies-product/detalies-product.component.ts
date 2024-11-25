import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../Core/service/products.service';
import { Iproduct } from '../../Core/interface/iproduct';

@Component({
  selector: 'app-detalies-product',
  standalone: true,
  imports: [],
  templateUrl: './detalies-product.component.html',
  styleUrl: './detalies-product.component.scss'
})
export class DetaliesProductComponent  implements OnInit{

    private readonly _routerParms = inject(ActivatedRoute);
    private readonly _ProductsService = inject(ProductsService);

    detaliesProduct :Iproduct | null =null;



  ngOnInit(): void {
    this._routerParms.paramMap.subscribe({
      next :(Res)=>{
        let productId = Res.get("productId")
        this._ProductsService.GetSpecificProduct(productId).subscribe({
          next:(res)=>{
            this.detaliesProduct = res.data;
 
          },
          error:()=>{

          }
        })

        
        
      }
    })
  }

}
