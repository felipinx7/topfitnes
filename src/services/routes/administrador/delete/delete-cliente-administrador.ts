import { api } from "@/config/axios.config";

export default async function DeleteClienteAdministrador(usuario_id: string | undefined) {
  try {
    const response = await api.delete(`/student/${usuario_id}`);
    console.log("Usuário Apagado com sucesso!", response.data.usuario_id);
    return response;
  } catch (error) {
    console.log("Falha ao excluir usuário!!", error);
    console.log("erro bosta:", usuario_id)
  }
}
