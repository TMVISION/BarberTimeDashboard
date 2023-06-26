import axios from "axios";

var unidadesService = {

    getUnidades: async()=>{
        //var unidadesApi = axios.get(`http://10.0.2.2:5000/api/unidades/`);
        var unidadesApi = axios.get(`http://barbertimeapi.vercel.app/api/unidades/`);
        return await unidadesApi;
    },
    createUnidade: async(unidade)=>{

        try {
            var unidadesApi = axios.post(`http://barbertimeapi.vercel.app/api/unidades/`, unidade);
            return await unidadesApi;
        } catch (error) {
            alert(error)
        }
        
    },

    // método para validar o login do usuário
    deleteUnidade: async (user) => {
      console.log(user)
      var unidadeAPI = axios.delete(`http://barbertimeapi.vercel.app/api/unidades/`+user);
      return await unidadeAPI;
    },
    getUnidadesById: async(id)=>{
        //var unidadesApi = axios.get(`http://10.0.2.2:5000/api/unidades/`);
        var unidadesApi = axios.get(`http://barbertimeapi.vercel.app/api/unidades/`+id);
        return await unidadesApi;
    },
    updateUnidade: async(id,unidade)=>{
        //var unidadesApi = axios.get(`http://10.0.2.2:5000/api/unidades/`);
        var unidadesApi = axios.put(`http://barbertimeapi.vercel.app/api/unidades/`+id,unidade);
        return await unidadesApi;
    },
    



}

export default unidadesService;