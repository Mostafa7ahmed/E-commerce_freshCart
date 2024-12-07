import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../Core/service/auth.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar-page',
  standalone: true,
  imports: [RouterLink,RouterLinkActive, TranslateModule],
  templateUrl: './navbar-page.component.html',
  styleUrl: './navbar-page.component.scss'
})
export class NavbarPageComponent {

  private _auth = inject(AuthService);


  signOut() : void{
    this._auth.SignOut()
  }
  

    ChangeLang(lang:string){

    }

}
