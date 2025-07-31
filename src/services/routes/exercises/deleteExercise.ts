import { api } from "@/config/axios.config";
import { toast } from "react-toastify";

export async function DeleteExercise(id: string){
    try {
        const { data } = await api.delete(`exercise/${id}`)
        return data;
    } catch (err: any) {
        toast.error("erro: ", err)
    }
}