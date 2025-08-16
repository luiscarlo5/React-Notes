import "primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-blue/theme.css"
import 'primereact/resources/primereact.min.css';              // Estilos do PrimeReact
import 'primeicons/primeicons.css';                            // Ícones
import styled from "styled-components";
import VideoEspaco from "../assets/videos/4kSpace.mp4"
import { Button } from 'primereact/button';

import { useNavigate } from "react-router-dom"; // lib para mudar a pagina 
  

const SectionPagIni = styled.section`
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

    .text {

    }

`

const PaginaInicial = () => {
    const navigate = useNavigate();

    const mudarCaminho = (caminho) => {
        navigate(caminho);
    };

    const abrirLinkedin = () => {
        window.open("https://www.linkedin.com/in/luis-carlos-eng-comp", "_blank"); // abre em nova aba
    };

    const abrirGithub = () => {
        window.open("https://github.com/luiscarlo5", "_blank"); // abre em nova aba
    };

    return ( 
        <SectionPagIni className="flex flex-wrap w-12 flex-columm m-0 h-screen w-screen">
            {/* Grande Imagem*/}
           
            <video src={VideoEspaco} autoPlay loop muted id="video1" className="    "/>
           <div className=" flex flex-column flex-wrap  cor1  align-items-center h-screen justify-content-center absolute px-auto mx-auto w-11 ">

                 <h1 className="justify-content-center block">Notes for Study</h1>
                 <h3 className="text-center">Bem-Vindo ao meu site feito para estudos <br></br>da área da tecnologia</h3>    
                 <p className="bg-blue-600 text-center">Aqui você poderá separar e organizar seus estudos por disciplina,<br></br> tecnologia e área de maneira períodicamente</p>          
                 <nav className="flex flex-row lg:flex-row flex-column sm:flex-column  flex-wrap gap-5  ml-6  ">
                    <Button label="Login"  onClick={() => mudarCaminho("/login")}/>
                    <Button label="Register"  />
                    <Button label="Linkedin" onClick={abrirLinkedin}/>
                    <Button label="GitHub" onClick={abrirGithub} />
                 </nav>
           </div>
            
        </SectionPagIni>
     );
}
 
export default PaginaInicial;