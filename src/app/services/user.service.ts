import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private store: Store
  ) {
    /* this.store.subscribe( state => {
      console.log('useService', state);
    });*/
  } 

  getAllState() {
    return this.store.select(state => state);
  }

  updateState( obj ) {
    this.store.dispatch({
      type: obj.action,
      payload: obj.data
    });
  }

}
