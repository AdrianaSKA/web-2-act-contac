import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private http: HttpClient) {}

    private apiUrl = 'http://localhost:3000/usuarios';



  login(usuario: string, password: string): Observable<boolean> {
    return this.http.get<{ [key: string]: any }>(`${this.apiUrl}`)
      .pipe(
        map(usuariosObj => {
          if (!usuariosObj) return false;

          const usuarios = Object.values(usuariosObj);

          const usuarioEncontrado = usuarios.find(u =>
            u.nombre === usuario && u.password === password
          );

          if (usuarioEncontrado) {
            localStorage.setItem('user', JSON.stringify(usuarioEncontrado));
            return true;
          } else {
            return false;
          }
        })
      );
  }

  sesionIniciada = () => {
    return localStorage.getItem('user') !== null;
  }

  logout(): void {
    localStorage.removeItem('user');
  }

}

