import {BrowserRouter, Routes, Route} from "react-router-dom"
import PageLayout from "../layouts/PageLayout";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Login";
import Menu from "../pages/Menu";
import {PagTopicos} from "../pages/PagTopicos"

const PagsNav = () =>{
    

    return (
        
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={ <PageLayout />}>
                    <Route path={"/"} element={  <PagTopicos /> } />
                    <Route path={"/pagina 2"} element={ <Page2 />} />
                    <Route path={"/pagina 3"} element={ <Page3 />} />
                </Route>    
            </Routes>
        </BrowserRouter>
    );
};

export default PagsNav;