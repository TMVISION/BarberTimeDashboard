import React, {useState, useEffect} from 'react';
import { useParams, useLocation, useNavigate } from "react-router-dom";
import './styles.css';
import Logo from '../imgs/logo preta.png';
import GaleriasService from '../services/galeriaService';
function CadastroGaleria() {


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

  const [galeria, setFormData] = useState({});


  useEffect(() => {

    async function fetchFormData () {
    
    try {        
      //const response = await axios.get(`http://localhost:5000/api/salas/${id}`);
      const response = await GaleriasService.getGaleriaById(id)
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
            //await axios.post('http://localhost:5000/api/galerias/',galeria );
            await GaleriasService.createFoto(galeria);
            alert('incluido com sucesso!'); 
        }
        else {
        
          await GaleriasService.updateFoto(id,galeria);
          alert('alterado com sucesso!');
       }
      }
    } catch (error) {
      console.error(error);
    }
  }


  console.log(galeria)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...galeria, [name]: value });
  };







  return (
    <div className="cadastroMain">
      <div className="degradeLogo">
        <img className="cadastroLogo" src={Logo} alt="logo" />
      </div>

      <div className="containerCadastro">
        <div className="areaCadastro">
          <h1 className="tituloCadastro">Cadastro Galeria</h1>

          <form className="areaInput" onSubmit={handleSubmit}>
            <p className="tituloInput">Nome</p>
            <input className="Input" type="text" name="nome" id="nome" placeholder="ex: Corte do Jaca " value={galeria.nome}  onChange={handleChange} />

            <p className="tituloInput">Imagem</p>
            <input className="Input" type="text" name="imagem" id="imagem" placeholder="ex:  url da imagem" value={galeria.imagem}  onChange={handleChange}/>

            <input className="confirmaCadastro" type="submit" value="Cadastrar" name='salvar' />
          </form>

          
        </div>
      </div>
    </div>
  );
}

export default CadastroGaleria;