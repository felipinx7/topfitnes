import { api } from "@/config/axios.config";

export default async function DeletePersonalAdministrador(id: string) {
  try {
    const response = await api.delete(`/personal/:${id}`);
    console.log("Usuário Apagado com sucesso!", response.data);
    return response;
  } catch (error) {
    console.log("Falha ao excluir usuário!!", error);
  }
}
