import React, { useState,useEffect } from 'react';
import DataTable from 'react-data-table-component';
import './stylesd.css';
import { Link } from 'react-router-dom';
import reservasService from '../services/reservasService';

function DashboardReservas() {
  const columns = [
    {
      name: 'Numero',
      selector: 'numero',
      sortable: true
    },
    
    
    {
      name: 'Cliente',
      selector: 'cliente',
      sortable: true
    },
    {
      name: 'Corte',
      selector: 'corte',
      sortable: true
    },
    {
      name: 'Barbeiro',
      selector: 'barbeiro',
      sortable: true
    },
    {
      name: 'Data',
      selector: 'data',
      sortable: true
    },

    {
      name: 'Horas',
      selector: 'horas',
      sortable: true
    },


    {
      name: 'Valor Total',
      selector: 'valortotal',
      sortable: true
    },

    {
      name: 'Unidade',
      selector: 'unidade',
      sortable: true
    },
    {
      name: 'Status',
      selector: 'status',
      cell: row => (
        <div
          style={{
            backgroundColor: row.status === 'Concluída' ? 'green' : 'red',
            color: 'white',
            textAlign: 'center',
            borderRadius: '4px',
            padding: '5px'
          }}
        >
          {row.status}
        </div>
      )
    },
    {
      name: 'Editar',
      cell: (row) => (

        <Link to={`/cadastroreserva/${row._id}`} state={{classe:''}}>
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


  const handleEdit=(row)=>{
    alert(row._id)
  }

 

  const handleDelete=async(row)=>{
    try {
      await reservasService.deleteReservas(row)
      alert("Deletado com sucesso")

} catch (error) {
 console.error(error);
}      
   
      
    
  }


  const data = [
    {
      Cliente: 'Davi',
      corte: 'cabelo',
      barbeiro: 'Joao',
      data: '2023-06-15',
      horas:'18:00',
      status: 'Concluída'
    },
    {
      Cliente: 'Daniel',
      servico: 'combo',
      barbeiro: 'Davi',
      data: '2023-06-15',
      status: 'Pendente'
    },
    {
      Cliente: 'Gabriel',
      servico: 'cabelo',
      barbeiro: 'Daniel',
      data:'2023-06-15',
      status: 'Pendente'
    },
    {
      Cliente: 'Joao',
      servico: 'barba',
      barbeiro: 'Leandro',
      data:'2023-06-15',
      status: 'Concluída'
    },
    {
      Cliente: 'Leandro',
      servico: 'cabelo',
      barbeiro: 'Joao',
      data:'2023-06-15',
      status: 'Concluída'
    }
  ];
  

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    async function fetchTableData () {
    
    try {
      
      //const response = await axios.get('http://localhost:5000/api/clientes');
      const response = await reservasService.getAllReservas()
      console.log(response)
      console.log(response.data)
      setTableData(response.data);
    } catch (error) {
      console.error(error);
    }

    };
    fetchTableData();
  },[tableData]); 


 
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

export default DashboardReservas;
