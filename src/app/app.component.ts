import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'latech';

  ngOnInit() {
  localStorage.setItem('usuario', null);
  localStorage.setItem('type', null);
  localStorage.setItem('id', null);
  }

}
