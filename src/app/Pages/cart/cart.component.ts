import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../Core/service/cart.service';
import { Iproduct } from '../../Core/interface/iproduct';
import { ICart } from '../../Core/interface/cart';
import { CommonModule } from '@angular/common';
import {  RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {


  private readonly _CartService = inject(CartService);

  cartDetails :ICart = {} as ICart;  

  deleteProductCart(id:string){
    this._CartService.deleteProductFromCart(id).subscribe({
      next:(res)=>{
  
        this.cartDetails =res.data;     

      }
    })

  }
  
  deleteCarts(){
    this._CartService.deleteAllCart().subscribe({
      next:(res)=>{
  
             if(res.message ="success"){
              this.cartDetails ={} as ICart;     

             }
      }
    })

  }
  updateProductCart(id:string, newCount:number){
    if(newCount > 0 ){
      this._CartService.updateProductFromCart(id, newCount ).subscribe({
        next:(res)=>{
          this.cartDetails =res.data;     
  
        }
      })
    }

  
  }



  getAll(){
    this._CartService.getProductCarts().subscribe({
      next:(res)=>{
        this.cartDetails =res.data;     
        console.log(res.data)
      }
    })
  }


  ngOnInit(): void {
    this.getAll()
  } 
}
