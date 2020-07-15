import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { ClassCardComponent } from './class-card/class-card.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ClassCardComponent
  ],
  exports: [
    NavbarComponent,
    ClassCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
