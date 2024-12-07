import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { OrderPaymentService } from '../../Core/service/order-payment.service';

@Component({
  selector: 'app-all-orders',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.scss'
})
export class AllOrdersComponent implements OnInit {


   private _ActivatedRoute = inject(ActivatedRoute);
   private _OrderPaymentService = inject(OrderPaymentService)

   cardID : string | null = ""

  orders:FormGroup = new FormGroup({
    details:new FormControl(null , Validators.required),
    phone:new FormControl(null , Validators.required),
    city:new FormControl(null , Validators.required)



  })

  sendOrders(){

    console.log(this.orders)

    this._OrderPaymentService.checkOut(this.cardID, this.orders.value).subscribe({
      next :(res)=>{
        if(res.status == "success"){
          window.open( res.session.url ,"_self" )
           

        }
      
        
      }

    })
  }     

  

  ngOnInit(): void {
    
    this._ActivatedRoute.paramMap.subscribe({
      next :(parms)=>{
        this.cardID = parms.get("cartId");
        
      }
    });
    



  }
}
