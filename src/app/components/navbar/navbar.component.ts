import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

declare var M: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userAdmin = false;

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {

    this.userAdmin = localStorage.getItem('type') === 'admin' ? true : false;

    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems);

  }

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

}
