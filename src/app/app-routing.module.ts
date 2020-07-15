import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { ClassListComponent } from './pages/class-list/class-list.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { RegistroComponent } from './registro/registro.component';
import { AddClassComponent } from './pages/add-class/add-class.component';
import { MyclassComponent } from './pages/myclass/myclass.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'classList', component: ClassListComponent },
      { path: 'addClass', component: AddClassComponent },
      { path: 'addClass/:id', component: AddClassComponent },
      { path: 'userList', component:  UsersListComponent },
      { path: 'myClass', component: MyclassComponent }
    ],
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
