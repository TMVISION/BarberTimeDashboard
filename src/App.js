import React from 'react';

import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastrofunci from './paginas/cadastrofunci';
import Home from './paginas/home';
import CadastroReserva from './paginas/cadastroreserva';
import Reservas from './paginas/reservas';
import Cadastro from './paginas/cadastrocliente';
import Cliente from './paginas/clientes';
import CadastroServicos from './paginas/cadastroservicos';
import Serviço from './paginas/servico';
import CadastroUnidade from './paginas/cadastrounidade';
import Unidade from './paginas/unidades';
import CadastroGaleria from './paginas/cadastrogaleria';
import Galeria from './paginas/galeria';
import DashboardUser from './componentes/dashboarduser';
import CadastroUser from './paginas/cadastrouser';
import User from './paginas/user';
import Login from './paginas/login';

function App() {
  return (
 
    <Router>
      <div>

       <Routes>
       
        <Route path="/" element={<Login/>}/>
          <Route path="/cadastrofunci/:id" element={<Cadastrofunci />} />
          <Route path="/cadastrocliente/:id" element={<Cadastro />} />
          <Route path="/cadastroreserva/:id" element={<CadastroReserva />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/clientes" element={<Cliente/>}/>
          <Route path="/servicos" element={<Serviço />} />
          <Route path="/cadastroservicos/:id" element={<CadastroServicos/>}/>
          <Route path="/cadastrounidade/:id" element={<CadastroUnidade/>}/>
          <Route path="/unidade" element={<Unidade/>}/>
          <Route path="/cadastrogaleria/:id" element={<CadastroGaleria/>}/>
          <Route path="/galeria" element={<Galeria/>}/>
          <Route path='/cadastrouser' element={<CadastroUser/>}/>
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />

     
          
       
        </Routes>
    
     
      </div>
      </Router>
  );
}

export default App;


