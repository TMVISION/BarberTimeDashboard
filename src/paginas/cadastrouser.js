import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './styles.css';
import Logo from '../imgs/logo preta.png';

function CadastroUser() {

  const history = useNavigate();


  function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

  const storedId = getCookie('id');
  useEffect(() => {
    if (storedId < 0 || storedId === null || storedId === undefined) {
      
      history('/login');
      alert("Faça login");
    }
  }, [storedId, history]);


  const [cliente, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      if (event.nativeEvent.submitter.name === "salvar") {
        const isValid = validateEmail();
        if (isValid) {
          alert('incluido com sucesso!');
        }
      }
    } catch (error) {
      console.error(error);
    }
    history(-1);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...cliente, [name]: value });
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!cliente.email || !emailRegex.test(cliente.email)) {
      alert('Por favor, informe um email válido.');
      return false;
    }

    return true;
  };

  return (
    <div className="cadastroMain">
      <div className="degradeLogo">
        <img className="cadastroLogo" src={Logo} alt="logo" />
      </div>

      <div className="containerCadastro">
        <div className="areaCadastro">
          <h1 className="tituloCadastro">Cadastrar User</h1>

          <form className="areaInput" onSubmit={handleSubmit}>
            <p className="tituloInput">Nome</p>
            <input
              className="Input"
              type="text"
              name="nome"
              id="nome"
              placeholder="ex: Unidade Leste"
              onChange={handleChange}
            />

            <p className="tituloInput">E-mail</p>
            <input
              className="Input"
              type="text"
              name="email"
              id="localizacao"
              placeholder="ex: exemplo@gmail.com"
              onChange={handleChange}
            />

            <p className="tituloInput">Função</p>
            <select className='Input' name='funcao' onChange={handleChange} defaultValue="Admin">
              <option>CLIENTE</option>
              <option>Funcionário</option>
              <option>Admin</option>
            </select>

            <p className="tituloInput">Senha</p>
            <input
              className="Input"
              type="password"
              name="senha"
              id="senha"
              placeholder="ex: ...."
              onChange={handleChange}
            />

            <input className="confirmaCadastro" type="submit" value="Cadastrar" name="salvar" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default CadastroUser;
