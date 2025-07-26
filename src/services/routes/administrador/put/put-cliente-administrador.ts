import { api } from "@/config/axios.config";

export default async function PutClienteAdministrador(
  id: string,
  data: Record<string, any>
) {
  try {
    const formData = new FormData();

    // Transforma os dados do objeto em FormData
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await api.put(`/student/${id}`, formData);

    console.log("Dados atualizados com sucesso", response);
    return response;
  } catch (error) {
    console.log("Erro ao atualizar dados", error);
  }
}
