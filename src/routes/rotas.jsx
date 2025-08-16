import {BrowserRouter, Routes, Route} from "react-router-dom"
import PageLayout from "../layouts/PageLayout";
import {PagTopicos} from "../components/PagTopicos"
import Login from "../pages/Login";
import Register from "../pages/Register";
import Main from "../pages/Main";
import Menu from "../pages/Menu";
import PaginaInicial from "../pages/PaginaInicial";

const Rotas = () =>{
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={ <PageLayout />}>
                    <Route path={"/"} element={  <PaginaInicial /> } />
                    <Route path={"/anotacoes_input"} element={  <Main /> } />
                    {/* <Route path={"/anotacoes_read"} element={  <Main /> } /> */}
                    <Route path={"/login"} element={  <Login /> } />
                    <Route path={"/register"} element={  <Register /> } />
                    <Route path={"/menu"} element={  <Menu /> } />
                </Route>    
                
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;