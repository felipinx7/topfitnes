import { api } from "@/config/axios.config";
import { headerMultipart } from "@/constants/headerMultipart";
import { exerciseDTO } from "@/schemas/schema-exercicio";
import { toast } from "react-toastify";

export async function CreateExercise(rawData: exerciseDTO){
    try {
        const { data } = await api.post('exercise/create', rawData, headerMultipart)
        return data;
    } catch (err: any) {
        toast.error("erro: ", err)
    }
}