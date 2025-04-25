import { useState, createContext, Children } from "react";

export const NoteViewContext = createContext();

export const NoteViewProvider = ({children}) => {
    const [ info_id, set_info_id ] = useState(0);

    const mudar_info_id = (new_id=0) => {
        set_info_id(new_id);
    } 
    return (
        <NoteViewContext.Provider value={{info_id, mudar_info_id}}>
            {children}
        </NoteViewContext.Provider>
    )
}