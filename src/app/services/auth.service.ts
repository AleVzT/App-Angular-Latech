import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:5000/firestore-latech/us-central1/api';

  constructor(
    private http: HttpClient
  ) { }

  /* Cerrar sesion */
  logout() {
    /* this.users.updateState({
      action: ACTION_LOGIN,
      data: data.data
    }); */
    console.log('Cerrando sesion');
  }

  login( usuario: UsuarioModel ) {

    return this.http.post(`${ this.url }/login`, usuario)
      .pipe(
        map( resp => {
          return resp;
        })
      );
  }

  /* Creando un nuevo usuario */
  nuevoUsuario( usuario: UsuarioModel ) {
    return this.http.post(`${ this.url }/usuario`, usuario);
  }

}
