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
    return this.http.get<any[]>(`${this.apiUrl}?nombre=${usuario}&password=${password}`)
      .pipe(
        map(usuarios => {
          if (usuarios.length > 0) {
            localStorage.setItem('usuarioLogueado', JSON.stringify(usuarios[0]));
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

