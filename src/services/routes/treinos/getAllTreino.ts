import { api } from "@/config/axios.config"
import { headerMultipart } from "@/constants/headerMultipart"

export async function getAllTreino(){
    try {
        const { data } = await api.get(`trainings`, headerMultipart)
        return data.trainings
    } catch (err) {
        console.log(err)
    }
}