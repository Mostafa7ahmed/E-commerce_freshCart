import { Component } from '@angular/core';
import { NavAuthComponent } from "../../Components/nav-auth/nav-auth.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../Components/footer/footer.component";

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [NavAuthComponent, RouterOutlet, FooterComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {

}
