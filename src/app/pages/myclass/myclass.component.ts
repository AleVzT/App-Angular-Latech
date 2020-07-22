import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { UserService } from '../../services/user.service';

import { ClaseModel } from '../../models/clase.model';
import { UsuarioModel } from '../../models/usuario.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-myclass',
  templateUrl: './myclass.component.html',
  styleUrls: ['./myclass.component.css']
})
export class MyclassComponent implements OnInit {

  clases: ClaseModel[] = [];
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

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();
    this.shared.consultarClase(this.data.id)
      .subscribe( resp => {
        this.clases = resp;
        Swal.close();
      });

  }

}
