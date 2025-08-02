import { api } from "@/config/axios.config";
import { headerMultipart } from "@/constants/headerMultipart";

export async function UpdatePersonal(rawData: any, id?: string){
    const routeUpdatePersonal = id ? `/personal/${id}`: '/personal/'

    try {
        const { data } = await api.put(routeUpdatePersonal, rawData, headerMultipart) 
        return data
    } catch (err: any) {
        throw err.response?.data || { message: "erro ao atualizar informações"}
    }
}