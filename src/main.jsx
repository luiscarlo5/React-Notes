import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { PrimeReactProvider } from "primereact/api";


createRoot(document.getElementById('root')).render(
    <PrimeReactProvider value={{ ripple: true }}>
    <App />
    </PrimeReactProvider>
)
