import { api } from "@/config/axios.config";
import { headerMultipart } from "@/constants/headerMultipart";
import { exerciseDTO } from "@/schemas/schema-exercicio";
import { toast } from "react-toastify";

export async function UpdateExercise(rawData: exerciseDTO, id: string){
    try {
        const { data } = await api.put(`exercise/update/${id}`, rawData, headerMultipart)
        return data;
    } catch (err: any) {
        toast.error("erro: ", err)
    }
}