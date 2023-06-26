import React, { useState, useEffect } from 'react';
import './styles.css';
import Logo from '../imgs/logo preta.png';
import unidadesService from '../services/unidadesService';
import barbeirosService from '../services/barbeirosService';
import usuarioService from '../services/usuarioService';
import { useParams, useLocation, useNavigate } from "react-router-dom";

function Cadastrofunci() {

    const { id } = useParams();


  const [formData, setFormData] = useState([]);
  const [selectedUnidade, setSelectedUnidade] = useState('');
  const [funcionario, setFuncionario] = useState({ funcao: 'RECEPCIONISTA' });



   useEffect(() => {

    async function fetchFuncionario () {

    try {        
      //const response = await axios.get(`http://localhost:5000/api/salas/${id}`);
      const response = await barbeirosService.getBarbeiroId(id)
      console.log(response.data)
      setFuncionario(response.data);
    } catch (error) {
      console.error(error);
    }

    };
    fetchFuncionario();
  },[id]); 





  useEffect(() => {
    async function fetchUnidades() {
      try {
        const unidades = await unidadesService.getUnidades();
        setFormData(unidades.data);
        if (unidades.data.length > 0) {
          if (formData.unidade == undefined) {
            funcionario.unidade = formData[0]._id;
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchUnidades();
  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFuncionario({ ...funcionario, [name]: value });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateCPF = (cpf) => {
    // Remove caracteres não numéricos do CPF
    const cleanedCPF = cpf.replace(/\D/g, '');
  
    // Verifica se o CPF possui 11 dígitos
    if (cleanedCPF.length !== 11) {
      return false;
    }
  
    // Verifica se todos os dígitos são iguais, o que é considerado inválido
    if (/^(\d)\1+$/.test(cleanedCPF)) {
      return false;
    }
  
    
  
    return true;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Verificar se o email é válido
    if (!validateEmail(funcionario.email)) {
      alert('O email fornecido é inválido.');
      return;
    }

    // Verificar se o CPF é válido
    if (!validateCPF(funcionario.cpf)) {
      alert('O CPF fornecido é inválido.');
      return;
    }
  
    // Verificar se o CEP foi preenchido
    if (funcionario.cep.trim() === '') {
      alert('O campo CEP é obrigatório.');
      return;
    }

    try {
      // Form submission logic
      const usuario = {
        nome: funcionario.nome,
        email: funcionario.email,
        senha: funcionario.nome + '@123',
        role: 'funcionario',
      };
      if(id === ":id"){
        const user = await usuarioService.postUsuario(usuario);
        funcionario._id = user.data;
        await barbeirosService.createFuncionario(funcionario);
  
        alert('Funcionário criado');
      }else{
        const usuario = {
          nome: funcionario.nome,
          email:  funcionario.email,
          tel: funcionario.telefone,
        };
        await usuarioService.updateUsuario(id, usuario);
        await barbeirosService.updateFuncionarios(id,funcionario);
      }
      
    } catch (error) {
      console.error(error);
    }
  };









  return (
    <div className="cadastroMain">
      <div className="degradeLogo">
        <img className="cadastroLogo" src={Logo} alt="logo" />
      </div>

      <div className="containerCadastro">
        <div className="areaCadastro">
          <h1 className="tituloCadastro">Cadastrar Funcionário</h1>

      
          <form className="areaInputt" onSubmit={handleSubmit}>
          <div className='primeiradiv'>
          <p className="tituloInput">Nome</p>
            <input className="Input" type="text" name="nome" id="nome" placeholder="ex: José " value={funcionario.nome} onChange={handleChange}/>

            <p className="tituloInput">E-mail</p>
            <input className="Input" type="email" name="email" id="email" placeholder="ex:  Jose@gmail.com" value={funcionario.email} onChange={handleChange}/>

            <p className="tituloInput">CPF</p>
            <input className="Input" type="number" name="cpf" id="cpf" placeholder="ex: 706.846.826-70" value={funcionario.cpf} onChange={handleChange}/>

            <p className="tituloInput">CEP</p>
            <input className="Input" type="text" name="cep" id="cep" placeholder="ex: 69084-418" value={funcionario.cep} onChange={handleChange} />

            <p className="tituloInput">Função</p>
            <select className='Input' name='funcao' onChange={handleChange} value={funcionario.funcao} defaultValue="RECEPCIONISTA">
              <option>RECEPCIONISTA</option>
              <option>BARBEIRO</option>
              <option>ZELADOR</option>
            </select>
            {/*<input className="Input" type="text" name="funcao" id="funcao" placeholder="ex: Barbeiro" />*/}
            <p className="tituloInput">Celular</p>
            <input className="Input" type="text" name="telefone" id="telefone" value={funcionario.nome}  placeholder="ex: (92) 9999-99999" onChange={handleChange} />
            </div>
         
          <div className='segundadiv'>
          <p className="tituloInput">Unidade</p>
          <select className='Input' value={funcionario.unidade} onChange={handleChange} name='unidade'>
                {
                  formData.map((unidades,index)=>{
                    return(
                      <option className='cor'  key={index} value={unidades._id}>{unidades.unidade}</option>
                    )
                  })

                }
              </select>

            {/*<input className="Input" type="text" name="unidade" id="unidade" placeholder="ex: Centro" />*/}

            <p className="tituloInput">Imagem</p>
            <input className="Input" type="text" name="imagem" id="imagem" placeholder="ex: ......" value={funcionario.imagem} onChange={handleChange}/>

            <p className="tituloInput">Descrição</p>
            <input className="Input" type="text" name="descricao" id="descricao" placeholder="ex: Especialista em..." value={funcionario.descricao} onChange={handleChange} />

            <p className="tituloInput">Facebook</p>
            <input className="Input" type="text" name="face" id="face" placeholder="ex: Jose Medeiros" value={funcionario.face} onChange={handleChange}/>


            <p className="tituloInput">Twitter</p>
            <input className="Input" type="text" name="twitter" id="twitter" placeholder="ex: @jose" value={funcionario.twitter} onChange={handleChange}/>

            <p className="tituloInput">Instagram</p>
            <input className="Input" type="text" name="instagram" id="instagram" placeholder="ex: @jose_" value={funcionario.instagram} onChange={handleChange}/>

            <input className="confirmaCadastro" type="submit" value="Cadastrar" name='salvar' />
          </div>
        
          </form>

          
        </div>
      </div>
    </div>
  );
}

export default Cadastrofunci;