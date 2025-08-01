import { api } from "@/config/axios.config";

export async function GetDadosAdministrador() {
  try {
    const response = await api.get(`/admin/`, {
      withCredentials: true, 
    });
    console.log("Dados do administrador", response.data); 
    return response.data;
  } catch (error) {
    console.log("Erro ao pegar os dados do administrador", error);
  }
}

