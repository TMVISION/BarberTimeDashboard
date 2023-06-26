import React from 'react';
import logo from '../imgs/logo preta.png';
import './styles.css';

function CadastroLogin() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de cadastro aqui
  };

  return (
    <div className="cadastro">
      <img src={logo} alt="Logo" className="logo" />

      <h1>Cadastrar Conta</h1>

      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" />

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" />

        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroLogin;



