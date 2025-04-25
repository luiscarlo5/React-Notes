import React, {useState, useEffect} from 'react';
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

import styled from 'styled-components';
import { PagTopicos } from '../pages/PagTopicos';
import { NoteViewProvider } from '../context/NoteContext';

const PageLayout = () => {
    
    
    return ( 
    
       
        
        < NoteViewProvider>
        <Header />
        </NoteViewProvider>
        /*
        <Outlet />
        <Footer />
        </div> */
   
    );
}
 
export default PageLayout;