import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  private API_URL = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  getUsuarioById(id: string): Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  crearUsuario(usuario: any): Observable<any> {
    return this.http.post(this.API_URL, usuario);
  }

}
