import { api } from "@/config/axios.config";

export async function DeleteTrainingAluno(id: string) {
    try {
        const { data } = await api.delete(`/student-training/delete/${id}`);
        return data
    } catch (err: any) {
        err.response.data || { message: "Erro ao delear aluno" }
    }
}