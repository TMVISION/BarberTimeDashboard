import axios from "axios";

var GaleriasService = {

    getGaleria: async()=>{
        var GaleriasApi = axios.get(`https://barbertimeapi.vercel.app/api/galeria/`);
        return await GaleriasApi;
    },
    createFoto: async(foto)=>{
        var GaleriasApi = axios.post(`https://barbertimeapi.vercel.app/api/galeria/`,foto);
        return await GaleriasApi;
    },
    deleteGaleria: async (user) => {
        console.log(user)
        var GaleriaAPI = axios.delete(`https://barbertimeapi.vercel.app/api/galeria/`+user);
        return await GaleriaAPI;
      },
      getGaleriaById: async(id)=>{
        var GaleriasApi = axios.get(`https://barbertimeapi.vercel.app/api/galeria/`+id);
        return await GaleriasApi;
    },
      updateFoto: async(id,foto)=>{
        var GaleriasApi = axios.put(`https://barbertimeapi.vercel.app/api/galeria/`+id,foto);
        return await GaleriasApi;
    },
    



}

export default GaleriasService;