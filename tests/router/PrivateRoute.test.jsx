import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe('pruebas en el <PrivateRoute />', () => {

    test('debe de mostrar el children si esta autenticado', () => {

        //localStorage en el testing es igual a: Storage.prototype
        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                name: 'juaka',
                id: '1234'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        
        expect( screen.getByText('Ruta privada') ).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    });

    test('debe de almacenar el localStorage', () => {


    });

});