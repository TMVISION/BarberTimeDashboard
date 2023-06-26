import axios from 'axios';


var clientesService = {
  
  
  
  getClientes: async()=>{

    var clientesAPI = axios.get(`http://barbertimeapi.vercel.app/api/clientes/`)
    return await clientesAPI
  },
  
  
  // método para cadastrar um usuário
  postClientes: async (Cadastro,id) => {
    Cadastro.role = "cliente";
    console.log(Cadastro)
    var clientesAPI = axios.post(`http://barbertimeapi.vercel.app/api/clientes/`,Cadastro,id);
    return await clientesAPI;
  },

  // método para validar o login do usuário
  getClienteById: async (id) => {
    var clientesAPI = axios.get(`http://barbertimeapi.vercel.app/api/clientes/`+id);
    return await clientesAPI;
  },

  deleteClientes: async(id) => {
    var clienteAPI = axios.delete(`http://barbertimeapi.vercel.app/api/clientes/${id}`);
    return await clienteAPI;

  },

  updateClientes: async(id, cliente) => {
  
    var clienteAPI = axios.put('http://barbertimeapi.vercel.app/api/clientes/'+id, cliente);
    return await clienteAPI;  
  
  }
}

export default clientesService;