import React from 'react'
import { createRoot } from 'react-dom/client'
import { PrimeReactProvider } from "primereact/api";
// import "primeflex/primeflex.css";

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-blue/theme.css"
            
import Rotas from "./routes/rotas"


createRoot(document.getElementById('root')).render(
    <PrimeReactProvider value={{ ripple: true }}>
        <Rotas />
    </PrimeReactProvider>
)
