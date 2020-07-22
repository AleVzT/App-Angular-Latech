import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { UserService } from '../../services/user.service';

import { ClaseModel } from '../../models/clase.model';
import { SubscritoModel, ResponseService } from '../../models/subscrito';
import { UsuarioModel } from '../../models/usuario.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.css']
})
export class ClassCardComponent implements OnInit, OnChanges {

  // tslint:disable-next-line:no-input-rename
  @Input('data') clases: ClaseModel [];
  @Input() myclass;

  clase: ClaseModel;
  subscrito: SubscritoModel;
  data: UsuarioModel;

  constructor(
    private shared: SharedService,
    private user: UserService
    ) { }

  ngOnInit() {
    this.user.getAllState().subscribe( state => {
      const stateTemp: any = state;
      this.data = stateTemp.appReducer;
    });
  }

  subscribe( clase: ClaseModel ) {
    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea subscribirse la clase ${ clase.name }`,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {

      if ( resp.value ) {
        this.subscrito = {
          idclase: clase.id,
          iduser: this.data.email
        };
        this.shared.crearSubscrito(this.subscrito)
          .subscribe( (res: ResponseService) => {
            if (res.ok) {
              Swal.fire({
                title: clase.name,
                text: res.mensaje,
                type: 'success'
              });
            } else {
              Swal.fire({
                title: clase.name,
                text: res.mensaje,
                type: 'error'
              });
            }
          });
      }
    });
  }

  borrarClase( clase: ClaseModel, i: number ) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar la clase ${ clase.name }`,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
      if ( resp.value ) {
        this.clases.splice(i, 1);
        this.shared.borrarClase( clase.id ).subscribe();
      }
    });

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.clases) {
      this.clases = changes.clases.currentValue;
    }
  }

}
