import React, {useState, useEffect} from 'react';
import { useParams, useLocation, useNavigate } from "react-router-dom";
import './styles.css';
import Logo from '../imgs/logo preta.png';
import unidadesService from '../services/unidadesService';


function CadastroUnidade() {



  const { id } = useParams();

  const [unidade, setFormData] = useState({});
  const history = useNavigate();

  useEffect(() => {

    async function fetchFormData () {
    
    try {        
      //const response = await axios.get(`http://localhost:5000/api/salas/${id}`);
      const response = await unidadesService.getUnidadesById(id)
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
            //await axios.post('http://localhost:5000/api/unidades/',unidade );
            await unidadesService.createUnidade(unidade);
            alert('incluido com sucesso!'); 
        }
        else {
          
          await unidadesService.updateUnidade(id,unidade)
          alert('alterado com sucesso!');
        }
      }
    } catch (error) {
      console.error(error);
    }
    history(-1);
  }


  console.log(unidade)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...unidade, [name]: value });
  };








  return (
    <div className="cadastroMain">
      <div className="degradeLogo">
        <img className="cadastroLogo" src={Logo} alt="logo" />
      </div>

      <div className="containerCadastro">
        <div className="areaCadastro">
          <h1 className="tituloCadastro">Cadastrar Unidade</h1>

          <form className="areaInput" onSubmit={handleSubmit}>
            <p className="tituloInput">Nome Da Unidade</p>
            <input className="Input" type="text" name="unidade" id="unidade" placeholder="ex: Unidade Leste " value={unidade.unidade} onChange={handleChange}/>

            <p className="tituloInput">Localização</p>
            <input className="Input" type="text" name="localizacao" id="localizacao" placeholder="ex: Av. Paulista, 550" value={unidade.localizacao} onChange={handleChange}/>

            <p className="tituloInput">imagem</p>
            <input className="Input" type="text" name="imagem" id="imagem" placeholder="ex: ...." value={unidade.imagem} onChange={handleChange}/>

            <input className="confirmaCadastro" type="submit" value="Cadastrar" name='salvar'/>

          </form>

        </div>
      </div>
    </div>
  );
}

export default CadastroUnidade;