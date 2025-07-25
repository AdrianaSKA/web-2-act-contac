import { Component } from '@angular/core';
import { DescripcionComponent } from "../../components/componentsHome/descripcion/descripcion.component";
import { HeroComponent } from "../../components/componentsHome/hero/hero.component";
import { DestacadosComponent } from "../../components/componentsHome/destacados/destacados.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ DescripcionComponent, HeroComponent, DestacadosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
