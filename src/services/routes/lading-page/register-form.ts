import { api } from "@/config/axios.config";
import { DataFormularioLadingPage } from "@/dto/data-formulario-lading-page-DTO";

export async function RegisterFormLadingPage(data: DataFormularioLadingPage) {
  try {
    const response = await api.post("/temporaryStudent", data);
    console.log("Formulário enviado com sucesso:", response.data);
    return response.data;
  } catch (error) {
    console.log("Erro ao enviar o formulário:", error);
    return error;
  }
}
