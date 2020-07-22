import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { UsuarioModel } from '../models/usuario.model';
import { ClaseModel } from '../models/clase.model';
import { ResponseModel } from '../models/subscrito';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private url =  'http://localhost:5000/firestore-latech/us-central1/api';

  constructor(
    private http: HttpClient
  ) { }

  /* consultar todos los usuarios registrados - OK!!*/
  getUsuarios() {

    return this.http.get(`${ this.url }/usuarios`)
    .pipe(
      map( resp => {
        return this.crearArreglo(resp);
      })
    );
  }

  /* modificar un usuario por id - OK!! */
  actualizarUsuario( usuario: UsuarioModel ) {

    return this.http.put(`${ this.url }/usuario/${ usuario.id }`, usuario);
  }


  /* crear una clase - OK!!*/
  crearClase( clase ) {

    const claseTemp = {
      id: clase.name.replace(/ /g, '').toLowerCase(),
      ...clase
    }

    return this.http.post(`${ this.url }/clases`, claseTemp);
  }
  
  /* Consulta una clase por id - OK!! */
  getClase( id: string ) {

    return this.http.get(`${ this.url }/clase/${ id }`);
  }
  
  /* Consulta todas las clases - OK!!*/
  getClases() {
    
    return this.http.get(`${ this.url }/clases`)
      .pipe(
        map( resp => {
          return this.crearArreglo(resp);
        })
      );
  }

  /* Borrar clase por id - OK!! */
  borrarClase( id: string ) {
    
    return this.http.delete(`${ this.url }/clase/${ id }`);
  }
  
  /* Editar una clase por id - OK!! */
  actualizarClase( clase: ClaseModel ) {
    
    return this.http.put(`${ this.url }/clase/${ clase.id }`, clase);
  }

  /* consultar clases subscritas de un usuario por id - OK!! */
  consultarClase( id: string ) {

    return this.http.get(`${ this.url }/subs/${ id }`)
            .pipe(
              map((resp: ResponseModel) => {
                const clasesT = [];
                if(resp.ok) {
                  let claseArray = this.crearArregloSubs(resp.clases);
                  claseArray.forEach( element => {
                    this.getClase(element).subscribe( res => {
                      clasesT.push(res);
                    });
                  });
                } 
                return clasesT;
              })
            );
  }
  
  /* crear una subscripcion */
  crearSubscrito( subscrito ) {
    return this.http.post(`${ this.url }/subs`, subscrito);
  }

  /* Convertir el Objeto en arreglo */
  private crearArregloSubs( tempObj: object ) {
    return Object.keys( tempObj )
  }

  private crearArreglo( tempObj: object ) {
    const arrayTemp = [];
    Object.keys( tempObj ).forEach( key => {
      const temp = tempObj[key];
      arrayTemp.push( temp );
    });

    return arrayTemp;
  }

}
