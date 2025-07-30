import { api } from "@/config/axios.config";

export default async function DeleteClienteAdministrador(id: string) {
  try {
    const response = await api.delete(`/student/:${id}`);
    console.log("Usuário Apagado com sucesso!", response.data.id);
    return response;
  } catch (error) {
    console.log("Falha ao excluir usuário!!", error);
  }
}
