import { CategorgiesComponent } from './Pages/categorgies/categorgies.component';
import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './Layouts/auth-layout/auth-layout.component';
import { PagesLayoutComponent } from './Layouts/pages-layout/pages-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { HomeComponent } from './Pages/home/home.component';
import { ProductComponent } from './Pages/product/product.component';
import { CartComponent } from './Pages/cart/cart.component';
import { BrandsComponent } from './Pages/brands/brands.component';
import { authGuard } from './Core/Guards/auth.guard';
import { isAuthGuard } from './Core/Guards/is-auth.guard';
import { DetaliesProductComponent } from './Pages/detalies-product/detalies-product.component';
import { ForgetpasswordComponent } from './Pages/forgetpassword/forgetpassword.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    canActivate:[isAuthGuard],
    children: [
        { path: '', redirectTo:'login' , pathMatch:'full' },

      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forget', component: ForgetpasswordComponent },

    ],
  },

  { path: '', component: PagesLayoutComponent , canActivate:[authGuard] , 
    children:
    [
        { path: '', redirectTo:'home' , pathMatch:'full' },
        {path:"home" , component :HomeComponent},
        {path:"products" , component :ProductComponent},
        {path:"details/:productId" , component :DetaliesProductComponent},
        {path:"cart" , component :CartComponent},
        {path:"brand" , component :BrandsComponent},
        {path:"category" , component :CategorgiesComponent},


    ]
  },
  { path: '**', component: NotFoundComponent },
];
