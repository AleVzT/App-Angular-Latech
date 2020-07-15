import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { UsuarioModel } from '../models/usuario.model';
import { ClaseModel } from '../models/clase.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  /* Url de la REaltime Database de firestore */
  private url = 'https://firestore-latech.firebaseio.com';

  constructor(
    private http: HttpClient
  ) { }

  /* consultar todos los usuarios registrados */
  getUsuarios() {

    return this.http.get(`${ this.url }/usuario.json`)
    .pipe(
      map( this.crearArreglo )
    );
  }

  /* modificar un usuario por id */
  actualizarUsuario( usuario: UsuarioModel ) {
    const usuarioTemp = {
      ...usuario
    };
    delete usuarioTemp.id;

    return this.http.put(`${ this.url }/usuario/${ usuario.id }.json`, usuarioTemp);
  }

  /* crear una subscripcion */
  crearSubscrito( subscrito ) {

    return this.http.post(`${ this.url }/subscrito.json`, subscrito);
  }

  /* crear una clase */
  crearClase( clase ) {

    return this.http.post(`${ this.url }/clase.json`, clase);
  }

  /* consulta una clase por id */
  getClase( id: string ) {

    return this.http.get(`${ this.url }/clase/${ id }.json`);
  }

  /* consulta todas las clases */
  getClases() {

    return this.http.get(`${ this.url }/clase.json`)
            .pipe(
              map( this.crearArreglo )
            );
  }

  /* Borrar clase por id */
  borrarClase( id: string ) {

    return this.http.delete(`${ this.url }/clase/${ id }.json`);
  }

  /* Editar una clase por id */
  actualizarClase( clase: ClaseModel ) {
    const claseTemp = {
      ...clase
    };
    delete claseTemp.id;

    return this.http.put(`${ this.url }/clase/${ clase.id }.json`, claseTemp);
  }

  /* consultar clases subscritas de un usuario por id */
  consultarClase( id: string ) {

    return this.http.get(`${ this.url }/subscrito.json`)
            .pipe(
              map( resp => {
                const SubsTemp = this.crearArreglo(resp);
                const clasesT = [];
                SubsTemp.forEach(element => {
                  if ( element.usuario === id ) {
                    this.getClase( element.clase )
                      .subscribe( res => {
                        clasesT.push( res );
                      });
                  }
                });
                return clasesT;
              })
            );
  }

  /* Convertir el Objeto en arreglo */
  private crearArreglo( tempObj: object ) {
    const arrayTemp = [];
    Object.keys( tempObj ).forEach( key => {
      const temp: ClaseModel = tempObj[key];
      temp.id = key;
      arrayTemp.push( temp );
    });

    return arrayTemp;
  }

}
