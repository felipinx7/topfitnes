import { api } from "@/config/axios.config";

export async function getAlunos(){
    try {
        const { data } = await api.get('/student/all', {
            withCredentials: true
        });
        return data;
        
    } catch (error) {
        console.log("Erro ao buscar alunos", error);
    }
}