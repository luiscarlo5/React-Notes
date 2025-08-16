import React, {useContext, useState} from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { FloatLabel } from "primereact/floatlabel";
import { Calendar } from 'primereact/calendar';
import dados from '../content/topicos.json';
import { NoteViewContext } from '../context/NoteContext';



export const FuncInputNote = () => {
    const [value, setValue] = useState('');
    const [date, setDate] = useState(null);

    const {info_id} = useContext(NoteViewContext);
    
    return (
        <section className='flex flex-wrap flex-column gap-5 justify-content-center mx-auto'>
            <div className="card flex justify-content-center ">
                <FloatLabel>
                    <InputTextarea id="description" value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
                    <label htmlFor="description">Anote aqui seu resumo diário ou semanal sobre {dados[info_id].titulo}</label>
                </FloatLabel>
            </div>
            
            <div className="card flex flex-column justify-content-center h-min">
                <label  value="ex"><p className="text-yellow-700 ">dia do estudo</p></label>
                <Calendar id="ex" value={date} onChange={(e)  => setDate(e.value)} />
                
            </div>
        </section>  
    );
};