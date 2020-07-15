import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { UsuarioModel } from '../models/usuario.model';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UsuarioModel = new UsuarioModel();

  data: any;

  constructor(
    private router: Router,
    private auth: AuthService,
  ) { }

  ngOnInit() {
  }

  login() {

    this.auth.login( this.user )
      .subscribe( resp => {
        if ( !resp ) {
          Swal.fire({
            type: 'error',
            title: 'Error al autenticar',
            text: 'Correo y/o contraseña Invalidos!'
          });
        } else {
          this.router.navigateByUrl('/classList');
        }
      });

  }

}
