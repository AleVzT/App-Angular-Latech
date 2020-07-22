import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ClaseModel } from '../../models/clase.model';
import { SharedService } from '../../services/shared.service';



import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {

  clase = new ClaseModel();

  constructor(
    private shared: SharedService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo' ) {
      this.shared.getClase( id )
        .subscribe( (resp: ClaseModel) => {
          this.clase = resp;
        });
    }

  }

  agregar() {

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    let peticion: Observable<any>;
    // tslint:disable-next-line:prefer-const
    let operacion: string;

    if ( this.clase.id ) {
      peticion = this.shared.actualizarClase( this.clase );
      operacion = 'Se actualizó correctamente';
    } else {
      peticion = this.shared.crearClase( this.clase );
      operacion = 'Se agrego correctamente';
    }

    peticion.subscribe( resp => {

      Swal.fire({
        title: this.clase.name,
        text: operacion,
        type: 'success'
      });
    });

  }

}
