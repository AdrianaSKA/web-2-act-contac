import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AutenticacionService } from '../../service/autenticacion.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(public authServicio: AutenticacionService, private router: Router) { }

  logout = () => {
    this.authServicio.logout(); 
    const redireccion = '/'; 
    this.router.navigateByUrl(redireccion);
  }
}
