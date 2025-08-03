import { api } from "@/config/axios.config";
import { headerMultipart } from "@/constants/headerMultipart";

export async function CreateAluno(rawData: any) {
    try {
        const { data } = await api.post("/student/register", rawData, headerMultipart)
        return data
    } catch (err: any) {
        throw err.response?.data || { message: "erro ao atualizar informações" }
    }
}