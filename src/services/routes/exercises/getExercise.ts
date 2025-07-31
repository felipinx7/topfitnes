import { api } from "@/config/axios.config";
import { toast } from "react-toastify";

export async function GetExercise(id: string){
    try {
        const { data } = await api.get(`exercise/${id}`)
        return data
    } catch (err: any) {
        toast.error("erro: ", err)
    }
}