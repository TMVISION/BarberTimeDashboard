import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from "react-router-dom";
import clientesService from '../services/clienteService';
import './styles.css';
import Logo from '../imgs/logo preta.png';
import usuarioService from '../services/usuarioService';

function Cadastro() {

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


  const { id } = useParams();
  const [cliente, setFormData] = useState({});

  useEffect(() => {
    async function fetchFormData() {
      try {
        const response = await clientesService.getClienteById(id);
        console.log(response.data);
        setFormData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFormData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (event.nativeEvent.submitter.name === "salvar") {
        if (id === ":id") {
          // Cadastrar novo cliente
          const isValid = validateInputs();
          if (isValid) {
            try {
              const usuario = {
                nome: cliente.nome,
                email: cliente.email,
                tel: cliente.telefone,
                senha: cliente.nome + "@12355",
                role: "cliente",
              };
              const user = await usuarioService.postUsuario(usuario);
              cliente._id = user.data;
              await clientesService.postClientes(cliente);
              alert('Inserido com Sucesso!');
            } catch (error) {
              console.error(error);
            }
          }
        } else {
          // Atualizar cliente existente
          const isValid = validateInputs();
          if (isValid) {
            const usuario = {
              nome: cliente.nome,
              email: cliente.email,
              tel: cliente.telefone,
            };
            await usuarioService.updateUsuario(id, usuario);
            await clientesService.updateClientes(id, cliente);
            alert('Alterado com sucesso!');
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...cliente, [name]: value });
  };

  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{2}\s\d{4,5}-\d{4}$/;

    if (!cliente.nome || cliente.nome.trim() === '') {
      alert('Por favor, informe o nome.');
      return false;
    }

    if (!cliente.email || !emailRegex.test(cliente.email)) {
      alert('Por favor, informe um email válido.');
      return false;
    }

    if (!cliente.telefone || !phoneRegex.test(cliente.telefone)) {
      alert('Por favor, informe um telefone válido no formato XX XXXX-XXXX.');
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
          <h1 className="tituloCadastro">Cadastrar Cliente</h1>

          <form className="areaInput" onSubmit={handleSubmit}>
            <p className="tituloInput">Nome</p>
            <input
              className="Input"
              type="text"
              name="nome"
              id="nome"
              placeholder="ex: José Medeiros"
              value={cliente.nome}
              onChange={handleChange}
            />

            <p className="tituloInput">E-mail</p>
            <input
              className="Input"
              type="text"
              name="email"
              id="email"
              placeholder="ex: JoséMedeiros@gmail.com"
              value={cliente.email}
              onChange={handleChange}
            />

            <p className="tituloInput">Celular</p>
            <input
              className="Input"
              type="text"
              name="telefone"
              id="telefone"
              placeholder="ex: 92 9999-99999"
              value={cliente.telefone}
              onChange={handleChange}
            />
            <input className="confirmaCadastro" type="submit" value="Cadastrar" name="salvar" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
