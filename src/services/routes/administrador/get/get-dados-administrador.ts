import { api } from "@/config/axios.config";

export async function GetDadosAdministrador(id: string) {
  try {
    const response = await api.get(`/admin/${id}`);
    console.log("Dados do administrador", response.data); 
    return response.data;
  } catch (error) {
    console.log("Erro ao pegar os dados do administrador", error);
  }
}
