import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

import { UsuarioModel } from '../../models/usuario.model';

declare var M: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userAdmin = true;
  data: UsuarioModel;

  constructor(
    private router: Router,
    private auth: AuthService,
    private user: UserService
  ) { }

  ngOnInit() {

    /* this.userAdmin = localStorage.getItem('type') === 'admin' ? true : false; */
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems);

    this.user.getAllState().subscribe( state => {
      const stateTemp: any = state;
      this.data = stateTemp.appReducer;
    });

  }

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

}
