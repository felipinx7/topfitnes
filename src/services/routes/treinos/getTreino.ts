import { api } from "@/config/axios.config";
import { headerMultipart } from "@/constants/headerMultipart";

export async function getTreino(id: string){
    try {
        const response = await api.get(`training/${id}`, headerMultipart)
        return response
    } catch (err) {
        console.log(err)
    }
}