import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ClaseModel } from '../../models/clase.model';
import { SharedService } from '../../services/shared.service';

import Swal from 'sweetalert2';
import { SubscritoModel } from '../../models/subscrito';

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.css']
})
export class ClassCardComponent implements OnInit, OnChanges {

  // tslint:disable-next-line:no-input-rename
  @Input('data') clases: ClaseModel [];
  @Input() tipoClase: boolean;

  clase: ClaseModel;
  subscrito: SubscritoModel;
  userAdmin = false;

  constructor( private shared: SharedService ) {

  }

  ngOnInit() {
    this.userAdmin = localStorage.getItem('type') === 'admin' ? true : false;
    console.log('tipo de clase: ', this.tipoClase);
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
          clase: clase.id,
          usuario: localStorage.getItem('id')
        };
        this.shared.crearSubscrito(this.subscrito)
          .subscribe( console.log );
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
