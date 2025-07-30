import { api } from "@/config/axios.config";
import { headerMultipart } from "@/constants/headerMultipart";
import { TrainingSchemaDTO } from "@/schemas/schema-treino";

export async function axiosUpdateTreino(id: string, data: TrainingSchemaDTO){
    try {
        const response = await api.put(`training/update/${id}`, data, headerMultipart)
        return response
    } catch (err) {
        console.log(err)
    }
}