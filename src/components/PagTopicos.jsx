import React, {useContext, useState} from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { FloatLabel } from "primereact/floatlabel";
import { Calendar } from 'primereact/calendar';
import dados from '../content/topicos.json';
import styled from 'styled-components';
import { NoteViewContext } from '../context/NoteContext';

/*
🧡 2. Elegante e suave (portfólio pessoal ou branding minimalista)
Primária (laranja queimado): #D97706

Bege claro (background): #FDF6EC

Cinza suave: #A8A29E

Texto: #3F3F46

Detalhes/destaque: #FBBF24


*/

const SectionTopics= styled.section`
    margin: 0;
    padding: 0px;
    background: black;
    height: 100%;
    color: white;
    border-color: var(--cyan-200);

`
export const PagTopicos = () =>{
    const {info_id} = useContext(NoteViewContext);
    
    return (
        <SectionTopics className="block w-auto h-auto p-5 border-double border-round-lg m-5 bg-contain flex-column bg-secundary-500 ">
            <div><h3>  {dados[info_id].titulo}</h3></div>
            <p> {dados[info_id].descricao}</p>
        </SectionTopics>
    )

}