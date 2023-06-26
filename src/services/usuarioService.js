import axios from 'axios';


var usuarioService = {
  
  // método para cadastrar um usuário
  postUsuario: async (Cadastro) => {
    var usuarioAPI = axios.post(`https://barbertimeapi.vercel.app/users/cadastrar/`,Cadastro);
    return await usuarioAPI;
  },

  // método para validar o login do usuário
  loginUsuario: async (user) => {
    console.log(user)
    var usuarioAPI = axios.post(`https://barbertimeapi.vercel.app/users/login`, user);
    return await usuarioAPI;
  },

  // método para validar o login do usuário
  deleteUsuario: async (user) => {
    console.log(user)
    var usuarioAPI = axios.delete(`https://barbertimeapi.vercel.app/users/deletar/`+user);
    return await usuarioAPI;
  },
  getAllUsuarios: async () => {
    var usuarioAPI = axios.get(`https://barbertimeapi.vercel.app/users/`);
    return await usuarioAPI;
  },
  updateUsuario: async (id,user) => {
    var usuarioAPI = axios.put(`https://barbertimeapi.vercel.app/users/atualizar/`+id,user);
    return await usuarioAPI;

  }
}

export default usuarioService;