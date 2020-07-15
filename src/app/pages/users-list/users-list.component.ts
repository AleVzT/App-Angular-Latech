import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
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

  constructor(
    private router: Router,
    private shared: SharedService
  ) { }

  ngOnInit() {

    this.activateUser = localStorage.getItem('usuario');

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    this.shared.getUsuarios()
      .subscribe( resp => {

        Swal.close();
        this.usuarios = resp;
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
        usuario.typeUser = usuario.typeUser === 'admin' ? 'users' : 'admin';
        this.shared.actualizarUsuario(usuario).subscribe();
      } else {
        this.ngOnInit();
      }
    });
  }

}
