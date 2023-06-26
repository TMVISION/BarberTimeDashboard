import React, { useState,useEffect } from 'react';
import DataTable from 'react-data-table-component';
import './stylesd.css'
import { Link } from 'react-router-dom';
import usuarioService from '../services/usuarioService';

function DashboardUser() {
  const columns = [
    {
      name: 'Nome',
      selector: 'nome',
      sortable: true
    },
    {
      name: 'E-mail',
      selector: 'email',
      sortable: true
    },
    {
      name: 'Role',
      selector: 'role',
      sortable: true
    },
    {
      name: 'Editar',
      cell: (row) => (

        <Link to={`/salas/${row._id}`} state={{classe:''}}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
            alt="editar"
            className="rounded-circle"
            width="30"
            height="30"
          />
        </Link>

      ),
      button: true,
    },
    {
      name: 'Deletar',
      cell: (row) => (

        <img
           src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
           alt="apagar"
           className="rounded-circle"
           width="30"
           height="30"
           onClick={() => handleDelete(row._id)}
           />

      ),
      button: true,
    },
  ];

  const data = [
    {
      Unidade: 'Centro',
      Localizacao: 'Av. Paulista, 515',
      Imagem: 'url.imagem' 
    },

    {
        Unidade: 'Leste',
        Localizacao: 'Av. Jupinambá, 457', 
        Imagem: 'url.imagem' 
      },
      


  ];

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    async function fetchTableData () {
    
    try {
      
      //const response = await axios.get('http://localhost:5000/api/clientes');
      const response = await usuarioService.getAllUsuarios();
      console.log(response)
      console.log(response.data)
      setTableData(response.data);
    } catch (error) {
      console.error(error);
    }

    };
    fetchTableData();
  },[tableData]); 

  async function handleDelete(id) {
    try {
           await usuarioService.deleteUsuario(id)
           alert("Deletado com sucesso")

    } catch (error) {
      console.error(error);
    }      
  }


  function handleFilter(event) {
    const newData = tableData.filter(row => {
      return row.nome.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setTableData(newData);
  }

  return (
    <div>
      <div className="container">
        <div className="text-end">
          <input type="text" onChange={handleFilter} />
        </div>
        <DataTable
          columns={columns}
          data={tableData}
          selectableRows
          fixedHeader
          pagination
        />
      </div>
    </div>
  );
}

export default DashboardUser;