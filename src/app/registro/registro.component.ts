import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioModel } from '../models/usuario.model';
import { AuthService } from '../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit() {

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();
    this.auth.nuevoUsuario( this.usuario )
      .subscribe( resp => {
        Swal.close();
        const data: any = resp; 
        if (!data.ok) {
          Swal.fire({
            type: 'error',
            title: 'Error al registrarse',
            text: data.mensaje
          });
        } else {
          Swal.fire({
            type: 'success',
            title: 'Registro completado',
            text: data.mensaje
          });
          this.router.navigateByUrl('/login');
        }
      });

  }

}
