import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from './models/usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'latech';

  usuario: string;

  constructor( ) {

  }

  ngOnInit() {

  }

}
