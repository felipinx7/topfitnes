import { api } from "@/config/axios.config"

export async function DisconectarAlunoAoPersonal(idStudent: string){
    try {
        return await api.put(`/student/unlink-to-personal/${idStudent}`)
    } catch (err: any) {
        err.response.data || { message: "Erro ao disvincular aluno"}
    }
}