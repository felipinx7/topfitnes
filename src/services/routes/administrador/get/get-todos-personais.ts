import { api } from "@/config/axios.config";

export async function GetTodosPersonais() {
  try {
    const response = await api.get("/personal/all");
    console.log("Todos os Personais", (await response).data);
    return response;
  } catch (error) {
    console.log("Falha ao pegar todos os personais", error);
  }
}
