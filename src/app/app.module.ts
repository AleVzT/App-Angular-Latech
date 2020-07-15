import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClassListComponent } from './pages/class-list/class-list.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { PagesComponent } from './pages/pages.component';
import { RegistroComponent } from './registro/registro.component';
import { AddClassComponent } from './pages/add-class/add-class.component';
import { MyclassComponent } from './pages/myclass/myclass.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClassListComponent,
    UsersListComponent,
    PagesComponent,
    RegistroComponent,
    AddClassComponent,
    MyclassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
