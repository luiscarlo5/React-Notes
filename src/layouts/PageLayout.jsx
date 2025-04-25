import React, {useState, useEffect} from 'react';
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Main from "../pages/Main";

import styled from 'styled-components';
import { PagTopicos } from '../components/PagTopicos';
import { NoteViewProvider } from '../context/NoteContext';

const PageLayout = () => {
    
    
    return ( 
        < NoteViewProvider>
            <Outlet />
        </NoteViewProvider>
        /*
        <Outlet />
        <Footer />
        </div> */
   
    );
}
 
export default PageLayout;