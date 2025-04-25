import "primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-blue/theme.css"
import 'primereact/resources/primereact.min.css';              // Estilos do PrimeReact
import 'primeicons/primeicons.css';                            // Ícones
import styled from "styled-components";
import VideoEspaco from "../assets/videos/4kSpace.mp4"
import { Button } from 'primereact/button';

const SectionPagIni = styled.section`
    .cor1 {
        
        
    }
  
    #video1 {

        object-fit: cover;
        width: 100%;
        heigth: 100%;
    }

    Button {
        background-color: var(--indigo-800);
        color: var(--yellow-500);
        border-color: var(--surface-0);
        
    }
    Button:hover {
        transform: scale(0.95);
    }
    


`

const PaginaInicial = () => {
    return ( 
        <SectionPagIni className="flex flex-wrap w-12 flex-columm m-0 p-10 h-screen w-screen">
            {/* Grande Imagem*/}
           
            <video src={VideoEspaco} autoPlay loop muted id="video1" className="    "/>
           
      
           <div className=" flex flex-column flex-wrap  cor1  align-items-center h-screen justify-content-center absolute px-auto mx-auto w-11 ">

                 <h1 className="justify-content-center block">Anotar Estudos </h1>
                 <h3>Bem-Vindo ao meu site feito para estudos</h3>
                 
                 <nav className="flex flex-row lg:flex-row flex-column sm:flex-column  flex-wrap gap-5  ml-6  ">
                    <Button label="Login"  />
                    <Button label="Register"  />
                    <Button label="Linkedin" />
                    <Button label="GitHub" />
                 </nav>
           </div>
            
            
        
        </SectionPagIni>


     );
}
 
export default PaginaInicial;