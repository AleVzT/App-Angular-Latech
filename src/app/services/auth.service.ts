import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://firestore-latech.firebaseio.com';

  userToken: string;

  constructor(
    private http: HttpClient
  ) { }

  /* Cerrar sesion */
  logout() {
    /* limpiando datos de la sesion */
    localStorage.removeItem('usuario');
    localStorage.removeItem('type');
    localStorage.removeItem('id');
  }

  /* Login de usuario a la app web */
  login( usuario: UsuarioModel ) {

    let usuarioFinal: UsuarioModel;

    return this.http.get(`${ this.url }/usuario.json`)
    .pipe(
      map( resp => {
        const userTemp = this.crearArregloUsers(resp);
        userTemp.forEach(element => {
          if ( element.email === usuario.email &&  element.password === usuario.password ) {
            localStorage.setItem('usuario', element.email );
            localStorage.setItem('type', element.typeUser);
            localStorage.setItem('id', element.id);
            usuarioFinal = element;
          }
        });
        return usuarioFinal;
      })
    );
  }

  /* Creando un nuevo usuario */
  nuevoUsuario( usuario: UsuarioModel ) {

    return this.http.post(`${ this.url }/usuario.json`, usuario);
  }

  /* Convertir un objeto en array */
  private crearArregloUsers( usersObj: object ) {
    const usuarios: UsuarioModel[] = [];
    Object.keys( usersObj ).forEach( key => {
      const usuario: UsuarioModel = usersObj[key];
      usuario.id = key;
      usuarios.push( usuario );
    });

    return usuarios;
  }

}
