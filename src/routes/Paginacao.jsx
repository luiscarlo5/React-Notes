import {BrowserRouter, Routes, Route} from "react-router-dom"
import PageLayout from "../layouts/PageLayout";
import {PagTopicos} from "../components/PagTopicos"
import Login from "../pages/Login";
import Main from "../pages/Main";
import Menu from "../pages/Menu";
import PaginaInicial from "../pages/PaginaInicial";

const PagsNav = () =>{
    

    return (
        
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={ <PageLayout />}>
                    <Route path={"/pag"} element={  <PaginaInicial /> } />
                    <Route path={"/HomeAnotacoes"} element={  <Main /> } />
                    <Route path={"/login"} element={  <Login /> } />
                    <Route path={"/menu"} element={  <Menu /> } />
                </Route>    
                
            </Routes>
        </BrowserRouter>
    );
};

export default PagsNav;