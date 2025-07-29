import { api } from "@/config/axios.config";

export default async function PutClienteAdministrador(
  id: string,
  data: Record<string, any>
) {
  try {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (value instanceof File) {
        formData.append(key, value);
      } else if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    });

    const response = await api.put(`/student/${id}`, formData, {
      withCredentials: true,
    });

    console.log("Dados atualizados com sucesso", response);
    return response;
  } catch (error) {
    console.log("Erro ao atualizar dados", error);
    throw error;
  }
}
