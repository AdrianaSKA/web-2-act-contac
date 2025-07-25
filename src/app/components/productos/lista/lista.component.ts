import { Component, Input } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  loading = true;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Product[]>('assets/data/products.json').subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading products:', err);
        this.loading = false;
      }
    });
  }

  filterProducts(searchTerm: string) {
    if (!searchTerm) {
      this.filteredProducts = this.products;
      return;
    }

    const term = searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter(
      p => p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term)
    );
  }
}
