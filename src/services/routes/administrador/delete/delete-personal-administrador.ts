import { api } from "@/config/axios.config";

export default async function DeletePersonalAdministrador(usuario_id: string) {
  try {
    const response = await api.delete(`/personal/${usuario_id}`);
    console.log("Usuário Apagado com sucesso!", response.data);
    return response;
  } catch (error) {
    console.log("O id completo do user", usuario_id);
    console.log("Falha ao excluir usuário!!", error);
  }
}
