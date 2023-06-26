import axios from "axios";

var reservasService = {

    getReservas: async(id)=>{
        var reservasApi = axios.get(`https://barbertimeapi.vercel.app/api/reservas/cliente/`+id);
        return await reservasApi;
    },

    getHorariosDisponiveis: async(barbeiro,id)=>{
        var reservasApi = axios.get(`https://barbertimeapi.vercel.app/api/reservas/horas/`+barbeiro+'/'+id+'/');
        return await reservasApi;
    },
    
    createReserva: async(reserva)=>{


        try {
            var reservasApi = axios.post(`https://barbertimeapi.vercel.app/api/reservas/`, reserva);
            return await reservasApi;
        } catch (error) {
            alert(error)
            console.error(error)
            alert("ESPERA")
        }
        
    },
    getAllReservas: async () => {
        var reservasAPI = axios.get(`https://barbertimeapi.vercel.app/api/reservas/`);
        return await reservasAPI;
      },
      putReservas: async (id,Reservas) => {
        var reservasAPI = axios.put(`https://barbertimeapi.vercel.app/api/reservas/`+ id,Reservas);
        return await reservasAPI;
      },
      getoneReservas: async (id) => {
        var reservasAPI = axios.get(`https://barbertimeapi.vercel.app/api/reservas/`+id);
        return await reservasAPI;
      },
      deleteReservas: async (id) => {
        var reservasAPI = axios.delete(`https://barbertimeapi.vercel.app/api/reservas/deletar/`+id);
        return await reservasAPI;
      },


}

export default reservasService;