import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { UserService } from '../../services/user.service';

import { UsuarioModel } from '../../models/usuario.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usuarios: UsuarioModel[] = [];
  activateUser: string;
  data: UsuarioModel;

  constructor(
    private router: Router,
    private shared: SharedService,
    private user: UserService
  ) { }

  ngOnInit() {

    this.cargarUsuarios();
    this.user.getAllState().subscribe( state => {
      const stateTemp: any = state;
      this.data = stateTemp.appReducer;
    });

  }

  cargarUsuarios() {
    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    this.shared.getUsuarios()
      .subscribe( resp => {
        this.usuarios = resp;
        Swal.close();
      });
  }

  actualizarUser(usuario: UsuarioModel) {
    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea cambiar el tipo de usuario a ${ usuario.email }`,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {

      if ( resp.value ) {
        usuario.typeuser = usuario.typeuser ? false : true;
        this.shared.actualizarUsuario(usuario).subscribe();
      } else {
        this.cargarUsuarios();
      }
    });
  }

}
