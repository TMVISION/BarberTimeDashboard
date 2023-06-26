import React, {useState, useEffect} from 'react';
import { useParams, useLocation, useNavigate } from "react-router-dom";
import './styles.css';
import Logo from '../imgs/logo preta.png';
import servicosService from '../services/servicosService';



function CadastroServicos() {

  const { id } = useParams();
  const [servico, setFormData] = useState({});
  const history = useNavigate();
  console.log(id)

  useEffect(() => {

    async function fetchFormData () {
    
    try {        
      //const response = await axios.get(`http://localhost:5000/api/salas/${id}`);
      const response = await servicosService.getServicoById(id)
      console.log(response.data)
      setFormData(response.data);
    } catch (error) {
      console.error(error);
    }

    };
    fetchFormData();
  },[id]); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      
      alert("AAAAAAAA")
      //const id = event.target._id.value;
      if (event.nativeEvent.submitter.name === "salvar") {
        //alert(id);
        if (id === ":id") {
        
            console.log(servico)
            alert("BBBBB")
            await servicosService.createServico(servico);
            alert('incluido com sucesso!'); 
        }
        else {
            await servicosService.updateServico(id,servico)
            alert('alterado com sucesso!');
        }
      }
    } catch (error) {
      console.error(error);
    }
  }


  console.log(servico)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...servico, [name]: value });
  };







  return (
    <div className="cadastroMain">
      <div className="degradeLogo">
        <img className="cadastroLogo" src={Logo} alt="logo" />
      </div>

      <div className="containerCadastro">
        <div className="areaCadastro">
          <h1 className="tituloCadastro">Cadastrar Serviços</h1>

          <form className="areaInput" onSubmit={handleSubmit}>
            <p className="tituloInput">Nome</p>
            <input className="Input" type="text" name="nome" id="nome" placeholder="ex: barba " value={servico.nome} onChange={handleChange}/>

            <p className="tituloInput">Valor</p>
            <input className="Input" type="text" name="valor" id="valor" placeholder="ex:  10$" value={servico.valor} onChange={handleChange} />

            <p className="tituloInput">Descrição</p>
            <input className="Input" type="text" name="descricao" id="descricao" placeholder="ex: ...." value={servico.descricao} onChange={handleChange}/>

            <p className="tituloInput">Numero do Serviço</p>
            <input className="Input" type="text" name="numero" id="numero" placeholder="ex: ...." value={servico.numero} onChange={handleChange}/>

            <p className="tituloInput">Imagem</p>
            <input className="Input" type="text" name="imagem" id="imagem" placeholder="ex: ...." value={servico.imagem} onChange={handleChange}/>
           
            <input className="confirmaCadastro" type="submit" name='salvar' value="Cadastrar" />

          </form>

        </div>
      </div>
    </div>
  );
}

export default CadastroServicos;