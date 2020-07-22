import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private user: UserService
  ) { }

  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
      return new Promise(resolve => {
        this.user.getAllState().subscribe( state => {
          const stateTemp: any = state;
          if (stateTemp.appReducer) {
            resolve(true);
          } else {
            resolve(false);
            this.router.navigate(['login']);
          }
        });
      });
  }
}
