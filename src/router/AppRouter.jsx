import { Navigate, Route, Routes } from "react-router-dom";

import { LoginPage, NotFoundPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicROute";

/* dentro del path login podriamos llamar unicamente al componente 
   sino procedemos a definir todas las rutas publicas dentro
    <PublicRoute>
        <LoginPage/>
    </PublicRoute> */

export const AppRouter = () => {
    
    return (    
        <>
            <Routes>
                <Route path="login/*" element={
                    <PublicRoute>
                       <Routes>
                            <Route path="/*" element={<LoginPage/>}/>
                            <Route path="404" element={<NotFoundPage/>}/>
                       </Routes>
                    </PublicRoute>
                }/>


                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes/>
                    </PrivateRoute>
                }/>

            </Routes>
        </>
    )

}