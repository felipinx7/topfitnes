import { api } from "@/config/axios.config";

export async function GetUmAluno(id: string) {
  try {
    const response = api.get(`/student/:${id}`);
    console.log("Aluno Encontrado", response);
    return response;
  } catch (error) {
    console.log("Aluno não econtrado");
  }
}
