import axios from "axios";

var unidadesService = {

    getUnidades: async()=>{
        //var unidadesApi = axios.get(`https://10.0.2.2:5000/api/unidades/`);
        var unidadesApi = axios.get(`https://barbertimeapi.vercel.app/api/unidades/`);
        return await unidadesApi;
    },
    createUnidade: async(unidade)=>{

        try {
            var unidadesApi = axios.post(`https://barbertimeapi.vercel.app/api/unidades/`, unidade);
            return await unidadesApi;
        } catch (error) {
            alert(error)
        }
        
    },

    // método para validar o login do usuário
    deleteUnidade: async (user) => {
      console.log(user)
      var unidadeAPI = axios.delete(`https://barbertimeapi.vercel.app/api/unidades/`+user);
      return await unidadeAPI;
    },
    getUnidadesById: async(id)=>{
        //var unidadesApi = axios.get(`https://10.0.2.2:5000/api/unidades/`);
        var unidadesApi = axios.get(`https://barbertimeapi.vercel.app/api/unidades/`+id);
        return await unidadesApi;
    },
    updateUnidade: async(id,unidade)=>{
        //var unidadesApi = axios.get(`https://10.0.2.2:5000/api/unidades/`);
        var unidadesApi = axios.put(`https://barbertimeapi.vercel.app/api/unidades/`+id,unidade);
        return await unidadesApi;
    },
    



}

export default unidadesService;