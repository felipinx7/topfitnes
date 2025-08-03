import { api } from "@/config/axios.config";
import { headerMultipart } from "@/constants/headerMultipart";

export async function UpdateAluno(rawData: any, id: string) {
    try {
        const { data } = await api.put(`/student/${id}`, rawData, headerMultipart)
        return data
    } catch (err: any) {
        throw err.response?.data || { message: "erro ao atualizar informações" }
    }
}