import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../Core/service/products.service';
import { Category, Iproduct } from '../../Core/interface/iproduct';
import { Subscription } from 'rxjs';
import { CategoryService } from '../../Core/service/category.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SplittextPipe } from '../../Core/Pipes/splittext.pipe';
import { SerchPipe } from '../../Core/Pipes/serch.pipe';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../Core/service/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule , CommonModule, RouterLink ,SplittextPipe , SerchPipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly _ProductsService = inject(ProductsService);
  private readonly _CategoryService = inject(CategoryService);
  private readonly _CartService = inject(CartService);


  textSearch:string =""

  prodcutList: Iproduct[] = [];
  categoriesList: Category[] = [];
  getAllProducts!: Subscription;
  getAllCateogies!: Subscription;


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true,
  }


  customOptionsMain: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause: true,
    dots: false,
    navSpeed: 700,
    items:1

  }

  ngOnInit(): void {
    this.getProducts();
    this.getCateogries()
  }

  getProducts() {

    this.getAllProducts = this._ProductsService.GetAllProdcuts().subscribe({
      next: (res) => {
        this.prodcutList = res.data;

      },
      error: () => {},
    });
  }

  getCateogries() {

    this.getAllCateogies = this._CategoryService.GetAllCategories().subscribe({
      next: (res) => {
        this.categoriesList = res.data;

      },
      error: () => {},
    });
  }

  addCart(id:string) {

    console.log(id);
    this._CartService.addProductToCart(id).subscribe({
      next:(res)=>{
        console.log(res);
  
      }
    })
  }

  ngOnDestroy() {
    this.getAllProducts.unsubscribe();
  }
}
