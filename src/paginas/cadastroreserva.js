import React, { useState, useEffect } from "react";
import './styles.css';
import Logo from '../imgs/logo preta.png';

import { useParams } from "react-router-dom";
import reservasService from "../services/reservasService";
import barbeirosService from "../services/barbeirosService";
import unidadesService from "../services/unidadesService";
import servicosService from "../services/servicosService";

function CadastroReserva() {
 

  const { id } = useParams();
  const [reserva, setFormData] = useState({});
  
  
 
  const [hora, setHora] = useState([])
  const [unidade,setUnidades] = useState([]);
  const [barbeiros,setBarbeiros] = useState([]);
  const [selectedBarbeiro, setSelectedBarbeiro] = useState(barbeiros.length > 0 ? barbeiros[0]._id : '');
  const [servico, setServicos] = useState([]);
  const [selectedServico, setSelectedServico] = useState(servico.length > 0 ? servico[0]._id : null);
  const [valor, setValor] = useState(servico.length > 0 ? servico[0].valor : null)



  useEffect(() => {

    async function fetchFormData () {
    
    try {        

      if(id != ':id'){
        const response = await reservasService.getoneReservas(id)
        setFormData(response.data);
      }
      
    } catch (error) {
      console.error(error);
    }

    };
    fetchFormData();
  },[id]); 


  useEffect(() => {


    async function fetchUnidades() {
      try {
        const unidades = await unidadesService.getUnidades();
        setUnidades(unidades.data);
        reserva.unidade = unidades.data[0]._id
        if (unidades.data.length > 0) {
         
          
        }
       // const response = await reservasService.getHorariosDisponiveis();
       //setHora(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUnidades();

   
    


  }, []);

  console.log(reserva)

  useEffect(() => {
    async function fetchBarbeiros(){
      try {
        console.log(reserva.unidade)
        const barbeiro = await barbeirosService.getBarbeiroByUnidade(reserva.unidade);
        console.log(barbeiro)
          setBarbeiros(barbeiro.data);
          if (barbeiro.data.length > 0) {

  
            setSelectedBarbeiro(barbeiro.data[0]._id);
            
          }
      } catch (error) {
        
      }
    }
    fetchBarbeiros();

  }, [reserva.unidade]);

  useEffect(() => {
    async function fetchHorarios() {
      try {
        console.log(reserva)
        console.log(reserva.barbeiro,reserva.data)
        const response = await reservasService.getHorariosDisponiveis(reserva.barbeiro, reserva.data);
        setHora(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchHorarios();
  }, [reserva.barbeiro, reserva.data]);

  useEffect(() => {
    async function fetchServicos() {
      try {
        const response = await servicosService.getServico();
        setServicos(response.data);

        if (response.data.length > 0) {
          setSelectedServico(response.data[0]._id);
          setValor(response.data[0].valor);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchServicos();
  }, []); 



  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form submission behavior
  
    if (id === ":id") {
      try {
   
        /*
        const reservaData = {
          cliente: cliente,
          numero: 1,
          data: data,
          horas: selectedHora,
          barbeiro: selectedBarbeiro,
          corte: selectedServico,
          unidade: selectedUnidade,
          valortotal: valor,
          status: "R",
        };
      */
        await reservasService.createReserva(reserva);
        alert("Reservado com sucesso")
        alert("funcionario criado");
      } catch (error) {
        console.error(error);
      }
    }
    else {
      
      await reservasService.putReservas(id,reserva)
      alert('alterado com sucesso!');
   }
  }



  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...reserva, [name]: value });
  };

  return (
    <div className="cadastroMain">
      <div className="degradeLogo">
        <img className="cadastroLogo" src={Logo} alt="logo" />
      </div>

      <div className="containerCadastro">
        <div className="areaCadastro">
          <h1 className="tituloCadastro">Cadastrar reserva</h1>

          <form className="areaInputt" onSubmit={handleSubmit}>
            <div className="primeiradiv">
              <p className="tituloInput">Numero da Reserva</p>
              <input className="Input" type="text" name="numero" id="numero" placeholder="ex: 1" value={reserva.numero || ''} onChange={handleChange} />

              <p className="tituloInput">Unidade</p>
              <select className="Input" type="text" name="unidade" id="unidade" placeholder="ex: zona leste" defaultValue={reserva.unidade || ''} onChange={handleChange}>
                {unidade.map((unidades, index) => (
                  <option className='cor' key={index} value={unidades._id}>{unidades.unidade}</option>
                ))}
              </select>

              <p className="tituloInput">Barbeiro</p>
              <select className="Input" type="text" name="barbeiro" id="barbeiro" placeholder="ex: Lucas Silva" value={reserva.barbeiro || ''} onChange={handleChange}>
                {barbeiros.map((barbeiros, index) => (
                  <option key={index} value={barbeiros._id}>{barbeiros.nome}</option>
                ))}
              </select>

              <p className="tituloInput">data</p>
              <input className="Input" type="date" name="data" id="data" placeholder="" value={reserva.data || ''} onChange={handleChange} />

              <p className="tituloInput">Hora</p>
              <select className="Input" type="time" name="horas" id="horas" placeholder=" ex: 12:00" value={reserva.horas || ''} onChange={handleChange}>
                {hora.map((row, index) => (
                  <option key={index} value={row}>{row}</option>
                ))}
              </select>

              <p className="tituloInput">Cliente</p>
              <input className="Input" type="text" name="cliente" id="cliente" placeholder="ex: José Medeiros" value={reserva.cliente || ''} onChange={handleChange} />
            </div>

            <div className="segundadiv">
              <p className="tituloInput">Corte</p>
              <select className="Input" type="text" name="corte" id="corte" placeholder="ex: Combo" defaultValue={reserva.corte || ''} onChange={handleChange}>
                {servico.map((servicos, index) => (
                  <option key={index} value={`${servicos._id}||${servicos.valor}`}>{servicos.nome} -- R${servicos.valor}</option>
                ))}
              </select>

              <p className="tituloInput">Valor Total</p>
              <input className="Input" type="text" name="valortotal" id="valortotal" placeholder="ex: 35" value={reserva.valortotal || ''} onChange={handleChange} />

              <p className="tituloInput">Status</p>
              <input className="Input" type="text" name="status" id="status" placeholder="ex: concluido" value={reserva.status || ''} onChange={handleChange} />
              <input className="confirmaCadastro" type="submit" value="Cadastrar" name="salvar" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CadastroReserva;
