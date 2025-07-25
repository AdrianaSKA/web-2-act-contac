import { Component } from '@angular/core';
import { HeronComponent } from "../../components/nosotros/heron/heron.component";
import { TabsComponent } from "../../components/nosotros/tabs/tabs.component";
import { TestimoniosComponent } from "../../components/nosotros/testimonios/testimonios.component";

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [HeronComponent, TabsComponent, TestimoniosComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

}
