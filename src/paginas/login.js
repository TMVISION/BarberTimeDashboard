import React, { useState } from "react";
import logo from '../imgs/logo preta.png';
//import './login.css';
import usuarioService from "../services/usuarioService";
import { useNavigate } from 'react-router-dom';




function Login(){
  const navigate = useNavigate();

  const [user,setFormData] = useState({})
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...user, [name]: value });
  };




  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user)
    usuarioService.loginUsuario(user).then((response) => {
      if (response.status === 200 || response.status === 201) {
       alert('Logado')
       navigate('/home');      }
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="login">
      <img src={logo} alt="Logo" className="logo" />
s
      <h2>Entrar</h2>

      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="username">Usuário:</label>
        <input type="text" id="email" name="email" onChange={handleChange} />

        <label htmlFor="password">Senha:</label>
        <input type="password" id="senha" name="senha" onChange={handleChange} />

        <button type="submit">Entrar</button>
      </form>

      <p className="signup-link">Não possui uma conta? <a href="#">Cadastrar nova conta</a></p>
    </div>
  );
}

export default Login;
