import axios from "axios";

var barbeirosService = {

    getBarbeiro: async()=>{
        var barbeirosApi = axios.get(`http://barbertimeapi.vercel.app/api/funcionarios/barbeiro`);
        //var barbeirosApi = axios.get(`http://barbertimeapi.vercel.app/api/funcionarios/barbeiro`);
        return await barbeirosApi;


    },

    getBarbeiroId: async(id)=>{
        var barbeirosApi = axios.get(`http://barbertimeapi.vercel.app/api/funcionarios/`+id);
        //var barbeirosApi = axios.get(`http://barbertimeapi.vercel.app/api/funcionarios/`+id);
        return await barbeirosApi;


    },
    getBarbeiroByUnidade: async(id)=>{
        console.log("aaa")
        var barbeirosApi = axios.get(`http://barbertimeapi.vercel.app/api/funcionarios/unidades/`+id);
        //var barbeirosApi = axios.get(`http://barbertimeapi.vercel.app/api/funcionarios/`+id);
        return await barbeirosApi;
    },
    createFuncionario: async(barbeiro,id)=>{
        try {
            var barbeirosApi = axios.post(`http://barbertimeapi.vercel.app/api/funcionarios`,barbeiro,id);
        //var barbeirosApi = axios.get(`http://barbertimeapi.vercel.app/api/funcionarios/`+id);
        return await barbeirosApi;
        } catch (error) {
            alert(error);
        }
        
    },
    getAllFuncionarios: async() =>{
        try {
            var barbeirosApi = axios.get(`http://barbertimeapi.vercel.app/api/funcionarios`);
        //var barbeirosApi = axios.get(`http://barbertimeapi.vercel.app/api/funcionarios/`+id);
        return await barbeirosApi;
        } catch (error) {
            alert(error);
        }
    },
    deletefuncionarios: async(id) => {
        var funcionarioAPI = axios.delete(`http://barbertimeapi.vercel.app/api/funcionarios/${id}`);
        return await funcionarioAPI;
    
      },

      updateFuncionarios: async(id, funcionario) => {
      
        var funcionarioAPI = axios.put('http://barbertimeapi.vercel.app/api/funcionarios/'+id, funcionario);
        return await funcionarioAPI;  
      
      }



}

export default barbeirosService;