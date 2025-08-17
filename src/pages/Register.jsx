import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import styled from "styled-components";
import "primeflex/primeflex.css";
import imgLogin from "../assets/icons/account.png"

// Styled Components
const SectionLogin = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #00030aff;


  img{
    height: 200px;
    width: auto;
  }
  form {
    background: rgba(35, 56, 110, 0.6);
    padding: 2rem;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 70%;
    max-width: 400px;
    color: #fff;
    
  }

  h3 {
    text-align: center;
  }

  .input-group {
    position: relative;
    display: flex;
    align-items: center;
  }

  input {
    background-color: #020101ff;
    color: #333;
    border: 2px solid #ccc;
    border-radius: 8px;
    padding: 10px 10px 10px 36px;
    font-size: 16px;
    width: 100%;
  }

  input:focus {
    border-color: #4caf50;
    outline: none;
    box-shadow: 0 0 5px #4caf50;
  }

  .icon {
    position: absolute;
    left: 10px;
    color: #888;
  }

  button {
    background-color: #0b96e7ff;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
  }

  .button_mod {
    background-color: #460be7ff;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
  }

  button:hover {
    background-color: #0218dbff;
  }

  .button_mod:hover {
    background-color: #ee06eeff;
  }

  .error-message {
    color: #ffb3b3;
    font-size: 0.9rem;
    text-align: center;
  }
  
  @media (max-width: 850px) {
    padding-bottom: 100px;
    height: 800px;
    img{


      height: 150px;
      width: auto;

    }
        .logobox {
    padding-bottom: 10px !important;
       }
  
  }

  @media (max-width: 600px) {
    height: 100%;
    padding-bottom: 250px;

    .logobox {
      padding-bottom: 100px !important;
      margin: 10px;
      padding: 60px;
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
      flex-direction: raw; 

      padding-bottom: 10px !important;
      img{
   
    
        height: 100px;
        width: auto;

      }

    }
  }
`;

// Component
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!userName || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    setError("");
    console.log("E-mail:", userName);
    console.log("Senha:", password);

    // Aqui você pode fazer a chamada para API ou lógica de autenticação
  };

  return (
    
    <SectionLogin>
        <div className="logobox flex flex-wrap justify-content-center gap-2 bg-gray-400 p-1 rounded-mdborder-red-100" >
            <div className="flex justify-content-center  ">
                <img  src={imgLogin} alt="imagem login"   className="justify-content-center" />
            </div>
            <div className=" flex flex-column gap-3 lg:w-6 xl:w-6 justify-content-center">
              <button type="submit" className="w-12  button_mod ">Login</button>
              <button type="submit" className="w-12  button_mod">Registrar</button>
            </div>
         </div>

        
      <form onSubmit={handleSubmit}>
       
       
        <h3>Bem Vindo de volta, acesse o sistema ou se registre caso seja novo aqui</h3>

        {error && <div className="error-message">{error}</div>}

        <div className="input-group">
          <FaUser className="icon" />
          <input
            type="email"
            placeholder="E-mail"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Entrar</button>
      </form>
    </SectionLogin>
  );
};

export default Login;
