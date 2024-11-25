import { Component } from '@angular/core';
import { NavbarPageComponent } from "../../Components/navbar-page/navbar-page.component";
import { FooterComponent } from "../../Components/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pages-layout',
  standalone: true,
  imports: [NavbarPageComponent, FooterComponent , RouterOutlet],
  templateUrl: './pages-layout.component.html',
  styleUrl: './pages-layout.component.scss'
})
export class PagesLayoutComponent {

}
