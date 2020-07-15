import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ClaseModel } from '../../models/clase.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {

  clases: ClaseModel[] = [];

  userAdmin = false;
  typeClass = false;

  constructor(
    private shared: SharedService
  ) { }

  ngOnInit() {

    this.userAdmin = localStorage.getItem('type') === 'admin' ? true : false;

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    this.shared.getClases()
      .subscribe( resp => {
        this.clases = resp;
        Swal.close();
      });

  }

}
