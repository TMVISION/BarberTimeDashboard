import axios from "axios";

var GaleriasService = {

    getGaleria: async()=>{
        var GaleriasApi = axios.get(`http://barbertimeapi.vercel.app/api/galeria/`);
        return await GaleriasApi;
    },
    createFoto: async(foto)=>{
        var GaleriasApi = axios.post(`http://barbertimeapi.vercel.app/api/galeria/`,foto);
        return await GaleriasApi;
    },
    deleteGaleria: async (user) => {
        console.log(user)
        var GaleriaAPI = axios.delete(`http://barbertimeapi.vercel.app/api/galeria/`+user);
        return await GaleriaAPI;
      },
      getGaleriaById: async(id)=>{
        var GaleriasApi = axios.get(`http://barbertimeapi.vercel.app/api/galeria/`+id);
        return await GaleriasApi;
    },
      updateFoto: async(id,foto)=>{
        var GaleriasApi = axios.put(`http://barbertimeapi.vercel.app/api/galeria/`+id,foto);
        return await GaleriasApi;
    },
    



}

export default GaleriasService;