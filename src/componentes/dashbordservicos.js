import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import './stylesd.css'
import servicosService from '../services/servicosService';
import { Link } from 'react-router-dom';

function Dashboardservicos() {

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    async function fetchTableData () {
    
    try {
      
      //const response = await axios.get('http://localhost:5000/api/clientes');
      const response = await servicosService.getServico();
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
           await servicosService.deleteServico(id);
           alert("Deletado com sucesso");
    } catch (error) {
      console.error(error);
    }      
  }


  const columns = [
    {
      name: 'Nome',
      selector: 'nome',
      sortable: true
    },
    {
      name: 'Valor',
      selector: 'valor',
      sortable: true
    },
    {
      name: 'Descrição',
      selector: 'descricao',
      sortable: true
    },


    {
      name: 'Numero',
      selector: 'numero',
      sortable: true
    },


    {
      name: 'Imagem',
      selector: 'imagem',
      sortable: true
    },

    {
      name: 'Duração',
      selector: 'duracao',
      sortable: true
    },
    {
      name: 'Editar',
      cell: (row) => (

        <Link to={`/cadastroservicos/${row._id}`} state={{classe:''}}>
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

export default Dashboardservicos;
