import { api } from "@/config/axios.config";

export async function GetUmAluno(id: string) {
  try {
    const response = await api.get(`/student/:${id}`);
    console.log("Aluno Encontrado", (await response).data);
    return response;
  } catch (error) {
    console.log("Aluno não econtrado");
  }
}
