import React, { useState,useEffect } from 'react';
import DataTable from 'react-data-table-component';
import './stylesd.css'
import clientesService from '../services/clienteService';
import unidadesService from '../services/unidadesService';
import { Link, useNavigate} from 'react-router-dom';

function DashboardUnidade() {

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

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    async function fetchTableData () {
    
    try {
      
      //const response = await axios.get('http://localhost:5000/api/clientes');
      const response = await unidadesService.getUnidades();
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
           await unidadesService.deleteUnidade(id);
           alert("Deletado com sucesso")

    } catch (error) {
      console.error(error);
    }      
  }

  const columns = [
    {
      name: 'Unidade',
      selector: 'unidade',
      sortable: true
    },
    {
      name: 'Localizacao',
      selector: 'localizacao',
      sortable: true
    },
    {
      name: 'Imagem',
      selector: 'imagem',
      sortable: true
    },
    {
      name: 'Editar',
      cell: (row) => (

        <Link to={`/cadastrounidade/${row._id}`} state={{classe:''}}>
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
          fixedHeader
          pagination
        />
      </div>
    </div>
  );
}

export default DashboardUnidade;