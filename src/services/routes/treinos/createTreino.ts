import { api } from "@/config/axios.config";
import { headerMultipart } from "@/constants/headerMultipart";
import { TrainingSchemaDTO } from "@/schemas/schema-treino";

export async function createTreino(data: TrainingSchemaDTO){
    try {
        const response = await api.post('/training/create', data, headerMultipart)
        return response
    } catch (err) {
        console.log(err)
    }
}