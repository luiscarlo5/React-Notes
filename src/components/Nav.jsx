import imgFlask from "../assets/icons/Flask.png"
import imgReact from "../assets/icons/React.png"
import imgNode from "../assets/icons/Node.js.png"
import imgMysql from "../assets/icons/Mysql.png"
import imgPostgre from "../assets/icons/PostgresSQL.png"
import imgPyTorch from "../assets/icons/PyTorch.png"
import imgArduino from "../assets/icons/Arduino.png"
import imgR from "../assets/icons/R.png"
import ImgHome from "../assets/icons/home.png"
import styled from "styled-components";
import "primeflex/primeflex.css";
import React, {useContext} from 'react';
import { NoteViewContext } from "../context/NoteContext"

import "primeflex/primeflex.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/arya-blue/theme.css"


const Navcss = styled.nav`
    margin: 0;
    padding: 0;
    
    background: linear-gradient(to right,rgb(0, 176, 219),rgb(0, 0, 0)) !important;

    .my_list_img {
        overflow-x: auto;
        
        white-space: nowrap;
    }

    .my_list_img::-webkit-scrollbar {
        height: 5px;
        width: 5px;

    }

    .my_list_img::-webkit-scrollbar-track {
        background: rgb(0, 0, 0);
        border-radius: 5px;
    }

    .my_list_img::-webkit-scrollbar-thumb {
        background-color: var(--cyan-400);
        border-radius: 5px;
    }

    .my_list_img::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }

    @media (max-width: 768px) {
        background: linear-gradient(to bottom,rgb(0, 176, 219),rgb(0, 0, 0)) !important;

        .my_list_img::-webkit-scrollbar-thumb {
            background-color: rgb(0, 73, 122);
            border-radius: 5px;
        }
    
         .my_list_img::-webkit-scrollbar-track {
            background: rgb(1, 30, 39);
            border-radius: 5px;
            margin-top: -100px;
        }
    }
    .boxteste0,.boxteste1, .boxteste2, .boxteste3, .boxteste4 {
        transition: transform 0.4s ease; /* 0.5 segundos com easing */
    }
    .boxteste0:hover {
        transform: skew(5deg, 5deg);
    }
    .boxteste1:hover {
        transform: matrix(0,1,1,0,0,0);
    }
    .boxteste2:hover {
        transform: scale(0.85);
    }
    .boxteste3:hover {
        transform: rotate(-40deg);
        
    }
    }
    .boxteste4:hover {
        transform: rotate(180deg);
        
    }
}
  
`;
//<Button className='m-3 hover:bg-red-600 'onClick={mudar_visibilidade} label="Aba de tópicos" rounded />
const Nav = ({ nav_visible  }) => {
    const {mudar_info_id} = useContext(NoteViewContext);

    const mudar_id = (meu_id) => {
        mudar_info_id(meu_id);
    };
    
    return (
        
        <Navcss className={`${nav_visible} border-round-top border-round-2xl  md:flex-row lg:flex-column w-12 lg:w-1 lg:h-screen md:h-9rem  pb-0 max-w-screen m-0 lg:p-0 justify-content-center `} >
            
            <div className="fadeinleft animation-duration-200 animation-iteration-1 my_list_img overflow-x-auto md:overflow-x-auto lg:overflow-y-auto flex justify-content-center md:flex-row sm:flex-row lg:flex-column justify-content-around align-content-center gap-5 md:py-5 m-0 p-0 w-12 mg:h-6rem ">
                <img  src={ImgHome} alt="imagem Home"         className="     boxteste0     block mx-auto   py-1  h-3rem w-auto  lg:w-7  lg:h-auto  md:h-4rem md:w-auto " />
                <img  src={imgFlask} alt="imagem Flask"      onClick={() => mudar_id(0)} className="   boxteste2  block mx-auto   py-1  h-3rem w-auto  lg:w-7  lg:h-auto  md:h-4rem md:w-auto " />
                <img  src={imgReact} alt="imagem React"      onClick={() => mudar_id(1)} className="   boxteste1     block mx-auto   py-1  h-3rem w-auto  lg:w-7  lg:h-auto  md:h-4rem md:w-auto " />
                <img  src={imgNode}  alt="imagem Node js"    onClick={() => mudar_id(2)} className="   boxteste2  block mx-auto   py-1  h-3rem w-auto  lg:w-7  lg:h-auto  md:h-4rem md:w-auto " />
                <img  src={imgMysql} alt="imagem MySQL"      onClick={() => mudar_id(3)} className="   boxteste3  block mx-auto   py-1  h-3rem w-auto  lg:w-7  lg:h-auto  md:h-4rem md:w-auto " />
                <img  src={imgPostgre} alt="imagem Postgre"  onClick={() => mudar_id(4)} className="   boxteste2  block mx-auto   py-1  h-3rem w-auto  lg:w-7  lg:h-auto  md:h-4rem md:w-auto " />
                <img  src={imgPyTorch} alt="imagem PyTorch"  onClick={() => mudar_id(5)} className="   boxteste4 block mx-auto   py-1  h-3rem w-auto  lg:w-7  lg:h-auto  md:h-4rem md:w-auto " />
                <img  src={imgR} alt="imagem Estatistica em R" onClick={() => mudar_id(7)} className=" boxteste2  block mx-auto   py-1  h-3rem w-auto  lg:w-7  lg:h-auto  md:h-4rem md:w-auto " />
                <img  src={imgArduino} alt="imagem arduino"  onClick={() => mudar_id(6)} className="   boxteste4  block mx-auto   py-1  h-3rem w-auto  lg:w-7  lg:h-auto  md:h-4rem md:w-auto " />
            </div>
        </Navcss>
    
     );
}
 
export default Nav;