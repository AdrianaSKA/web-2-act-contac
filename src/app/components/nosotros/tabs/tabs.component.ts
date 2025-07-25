import { Component } from '@angular/core';
import { TeamMember } from './teamMember';




@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  activeTab: string = 'history';
  teamMembers: TeamMember[] = [
    {
      name: 'Joel Lopez',
      role: 'Florista Principal',
      bio: 'Con más de 15 años de experiencia en diseño floral, Joel trae elegancia y creatividad a cada arreglo.',
      image: 'https://i.pinimg.com/736x/83/76/42/837642ce7dec8529d7dc956477f2446e.jpg'
    },
    {
      name: 'Carlos Mendoza',
      role: 'Director de Operaciones',
      bio: 'Carlos asegura que cada flor llegue fresca y perfecta a su destino, gestionando nuestra cadena de suministro.',
      image: 'https://i.pinimg.com/736x/da/24/f1/da24f173dbb3d929823d62a723e63bc6.jpg'
    },
    {
      name: 'Shun Ishikawa',
      role: 'Diseñador Floral',
      bio: 'Shun combina colores y texturas de manera magistral, creando arreglos que cuentan historias.',
      image: 'https://i.pinimg.com/736x/97/21/1c/97211cf9def7e130b6a376b0fa89817f.jpg'
    }
  ];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
