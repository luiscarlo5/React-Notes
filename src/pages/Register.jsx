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
    background-color: #001013ff;


  img{
   
    
    height: 200px;
    width: auto;

    padding-left: -100px;
  }
  form {
    background: rgba(50, 167, 69, 0.6);
    padding: 2rem;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 70%;
    max-width: 400px;
    color: #fff;
    
  }

  h1 {
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
    background-color: #0be73bff;
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
`;

// Component
const Register = () => {
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


        
      <form onSubmit={handleSubmit}>
       
       
        <h1>Seja Bem-Vindo </h1>

        {error && <div className="error-message">{error}</div>}

        <div className="input-group">
          
          <input
            type="text"
            placeholder="Nome"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="input-group">
          
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

export default Register;
