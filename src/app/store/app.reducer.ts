import { Action } from '@ngrx/store';
import { ACTION_LOGOUT, ACTION_LOGIN } from './app.actions';
import { UsuarioModel } from '../models/usuario.model';

/* const usuario: UsuarioModel = {
    email: 'alex@latech.com',
    password: '123456',
    nombre: 'Alex Latech',
    typeuser: false,
    id: 'alex@latech.com'
}; */

export function reducer( state: UsuarioModel, action: Action): UsuarioModel {
    const actionTemp: any = action;
    switch ( actionTemp.type ) {
        case ACTION_LOGOUT:
            return {
                ...state
            };
        case ACTION_LOGIN:
            state = actionTemp.payload;
            return {
                ...state
            };
        default:
            return state;
    }

}

