import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ClaseModel } from '../../models/clase.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-myclass',
  templateUrl: './myclass.component.html',
  styleUrls: ['./myclass.component.css']
})
export class MyclassComponent implements OnInit {

  clases: ClaseModel[] = [];
  userId: string;
  typeClass = true;

  constructor(
    private shared: SharedService
  ) { }

  ngOnInit() {

    this.userId = localStorage.getItem('id');

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    this.shared.consultarClase(this.userId)
      .subscribe( resp => {
        this.clases = resp;
        Swal.close();
      });

  }

}
