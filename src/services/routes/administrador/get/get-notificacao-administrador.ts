import { api } from "@/config/axios.config";

export default async function GetNotificacaoAdministrador() {
  try {
    const response = await api.get("/temporaryStudent/all");
    console.log("As notificações disponivel são:", response.data);
    return response.data;
  } catch (error) {
    console.log("Falha ao pegar as notificações:", error);
  }
}
