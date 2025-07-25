import { Component } from '@angular/core';
import { HeropComponent } from "../../components/productos/herop/herop.component";
import { ListaComponent } from "../../components/productos/lista/lista.component";

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [HeropComponent, ListaComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
