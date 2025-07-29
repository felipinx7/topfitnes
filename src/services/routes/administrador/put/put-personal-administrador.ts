import { api } from "@/config/axios.config";
import { SchemaPersonal } from "@/schemas/schema-personais";

export default async function PutPersonalAdministrador(
  id: string | undefined,
  data: SchemaPersonal
) {
  try {
    const formData = new FormData();

    // Adiciona campos básicos ao FormData
    formData.append("nome", data.nome);
    formData.append("sobrenome", data.sobrenome);
    formData.append("telefone", data.telefone);
    formData.append("formacao", data.formacao);
    formData.append("registro_profissional", data.registro_profissional);
    formData.append("especialidade", data.especialidade);
    formData.append("disponibilidade", data.disponibilidade);
    formData.append("senha", data.senha);
    formData.append("email", data.email);

    // Adiciona a foto somente se for enviada e for um File válido
    if (data.foto && typeof data.foto !== "string") {
      formData.append("foto", data.foto); // supondo que seja do tipo File
    }

    const response = await api.put(`/personal/${id}`, formData, {
      withCredentials: true,
      // ⚠️ NÃO defina manualmente o Content-Type
      headers: {
        Accept: "application/json",
      },
    });

    console.log("Dados atualizados com sucesso", response);
    return response;
  } catch (error) {
    console.error("Erro ao atualizar dados", error);
    throw error;
  }
}
