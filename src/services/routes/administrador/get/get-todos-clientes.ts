import { api } from "@/config/axios.config";

export async function GetTodosClientes() {
  try {
    const response = await api.get("/student/all");
    return response.data;
  } catch (error) {
    console.log("Falha ao pegar os alunos", error);
  }
}
