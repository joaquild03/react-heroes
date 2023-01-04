import { authReducer } from "../../../src/auth/";
import { types } from "../../../src/auth/";

describe('pruebas en <AuthReducer/>', () => {
    
    test('debe de retornar el estado por defecto', () => {

        const state = authReducer({logged: false}, {});
        
        expect(state).toEqual({logged: false});
    });    
    
    test('debe de llamar el login autenticar y logged en true ', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Juaka',
                id: '123'
            }
        }

        const state = authReducer({logged: false}, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload
        });

    });

    test('debe de borrar el name del usuario y logged en false', () => {

        const state = {
            logged: true,
            user: {id:'123', name: 'juaka'}
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer(state, action);

        expect(newState).toEqual({logged: false});
    });
});