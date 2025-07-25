import { api } from "@/config/axios.config";

export async function GetTodosClientes() {
  try {
    const response = await api.get("/student/all");
    console.log("Todos os aluno são esses aqui:", response.data);
    return response.data;
  } catch (error) {
    console.log("Falha ao pegar os alunos", error);
  }
}
