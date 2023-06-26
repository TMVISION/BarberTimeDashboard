import React from "react";
import "./stylesb.css";
import carteiraIcon from "../imgs/carteira.png";
import listaDeAfazeresIcon from "../imgs/lista-de-afazeres.png";
import relogioIcon from "../imgs/relogio.png";
import { Link } from "react-router-dom";

function Buttons() {
  return (
    <div className="buttonsMain">
      <div class="carousel">
        <Link to={"/reservas"} className="linkButton">
          <div className="buttonsAll">
            <div className="background">
              <img className="iconReserva" src={carteiraIcon} alt="icon" />
            </div>
            <p className="titleAll">Reservas</p>
          </div>
        </Link>
        <Link to={"/clientes"} className="linkButton">
          <div className="buttonsAll">
            <div className="background">
              <img className="iconCliente" src={listaDeAfazeresIcon} alt="icon" />
            </div>
            <p className="titleAll">Clientes</p>
          </div>
        </Link>
        <Link to={"/home"} className="linkButton">
          <div className="buttonsAll">
            <div className="background">
              <img className="iconFunc" src={relogioIcon} alt="icon" />
            </div>
            <p className="titleAll">Funcionários</p>
          </div>
        </Link>
        <Link to={"/servicos"}className="linkButton">
        <div className="buttonsAll">
          <div className="background">
            <img className="iconCliente" src={listaDeAfazeresIcon} alt="icon" />
          </div>
          <p className="titleAll">Serviços</p>
        </div>
        </Link>
        <Link to={"/unidade"} className="linkButton">
          <div className="buttonsAll">
            <div className="background">
              <img className="iconCliente" src={listaDeAfazeresIcon} alt="icon" />
            </div>
            <p className="titleAll">Unidade</p>
          </div>
        </Link>
        <Link to={"/galeria"} className="linkButton">
          <div className="buttonsAll">
            <div className="background">
              <img className="iconCliente" src={listaDeAfazeresIcon} alt="icon" />
            </div>
            <p className="titleAll">Galeria</p>
          </div>
        </Link>

        <Link to={"/user"} className="linkButton">
          <div className="buttonsAll">
            <div className="background">
              <img className="iconCliente" src={listaDeAfazeresIcon} alt="icon" />
            </div>
            <p className="titleAll">User</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Buttons;





