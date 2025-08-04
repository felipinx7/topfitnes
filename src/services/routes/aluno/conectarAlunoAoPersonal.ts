import { api } from "@/config/axios.config"

export async function ConectarAlunoAoPersonal(idStudent: string){
    try {
        return await api.put(`/student/link-to-personal/${idStudent}`)
    } catch (err: any) {
        err.response.data || { message: "Erro ao vincular aluno"}
    }
}