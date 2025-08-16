import React, { useState, useEffect, useContext } from 'react';
import "primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-blue/theme.css"
import 'primereact/resources/primereact.min.css';              // Estilos do PrimeReact
import 'primeicons/primeicons.css';                            // Ícones
import styled from "styled-components";
import Nav from '../components/Nav';
import { Button } from 'primereact/button';
import { PagTopicos } from '../components/PagTopicos';

import { NoteViewContext } from "../context/NoteContext"
import { FuncInputNote } from '../functions/NoteStudy';

const SectionMain = styled.section`
    margin: 0;
    background-color: black  !important;
    color: white;
    
    Button{
        background-color: var(--cyan-200);
        background: red !importante;
    }

    div div {
        background: red !importante;
    }

`;
const Main = () => {

    const {mudar_info_id} = useContext(NoteViewContext);
    const  [nav_visible, set_nav] = useState(true);
    const  [classe_nav, set_classe_nav] = useState('flex');
    const  [w_dinamico, set_w_dinamico] = useState('lg:w-11');
    
    useEffect (() =>{
            set_classe_nav(nav_visible ? 'flex' : 'hidden');
            set_w_dinamico(nav_visible ? 'lg:w-11' : 'lg:w-12')
    }, [nav_visible]);
    
    const mudar_visibilidade =  () => {
        set_nav(prevNavVisible => !prevNavVisible);
    };
    

    return (
       
        <SectionMain className='flex flex-wrap flex-row'>
            <Nav nav_visible={classe_nav}  />
            <div className={`flex flex-wrap flex-row lg:h-auto w-12 ${w_dinamico} md:w-100  m-0 px-0 py-0 bg-red-500`}>
                <header className='flex flex-wrap flex-column h-3 w-12 m-0 p-0 align-content-center'>
                    <div className='flex flex-wrap flex-row justify-content-center align-content-center'>
                        <Button 
                                            icon="pi pi-list" 
                                            onClick={mudar_visibilidade} 
                                            className="m-3 p-2 justify-content-center align-content-center h-2rem w-2rem"
                                            rounded 
                                            style={{ backgroundColor: "rgb(0, 176, 219)", border: "none" }}
                                        />
                        
                        <h1 className=' m-3 mx-auto p-0 bg-blue-400'> Luis Carlos o fera   </h1>
                    </div>
                    <h3 className='inline mx-auto h-min w-100'> ⏩ Bem Vindo ao seu campo de anotações de tecnologias</h3>
                </header>
                
                <PagTopicos  />
                <FuncInputNote  />
            </div>
        </SectionMain>
        
    );
}
        
export default Main;