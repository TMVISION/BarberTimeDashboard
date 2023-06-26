import axios from "axios";

var servicosService = {

    getServico: async()=>{
        //var servicosApi = axios.get(`https://10.0.2.2:5000/api/servicos/`);
        var servicosApi = axios.get(`https://barbertimeapi.vercel.app/api/servicos/`);
        
        return await servicosApi;
    },

    createServico: async(servico)=>{
        //var servicosApi = axios.get(`https://10.0.2.2:5000/api/servicos/`);
        var servicosApi = axios.post(`https://barbertimeapi.vercel.app/api/servicos/`, servico);
        
        return await servicosApi;
    },

    // método para validar o login do usuário
    deleteServico: async (user) => {
      console.log(user)
      var servicoAPI = axios.delete(`https://barbertimeapi.vercel.app/api/servicos/`+user);
      return await servicoAPI;
    }, 
    getServicoById: async(id)=>{
        //var servicosApi = axios.get(`https://10.0.2.2:5000/api/servicos/`);
        var servicosApi = axios.put(`https://barbertimeapi.vercel.app/api/servicos/`+id);
        
        return await servicosApi;
    },
    updateServico: async(id,servico)=>{
        //var servicosApi = axios.get(`https://10.0.2.2:5000/api/servicos/`);
        var servicosApi = axios.put(`https://barbertimeapi.vercel.app/api/servicos/`+id, servico);
        
        return await servicosApi;
    },
    

    



}

export default servicosService;