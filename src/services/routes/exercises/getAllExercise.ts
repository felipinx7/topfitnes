import { api } from "@/config/axios.config";
import { toast } from "react-toastify";

export async function getAllExercise(){
    try {
        const { data } = await api.get(`exercises`)
        return data;
    } catch (err: any) {
        toast.error("erro: ", err)
    }
}