import { api } from "@/config/axios.config";
import { headerMultipart } from "@/constants/headerMultipart";

export async function deleteTreino(id: string){
    try {
        const response = await api.delete(`/training/${id}`, headerMultipart)
        return response
    } catch (err) {
        console.log(err)
    }
}