import { api } from "@/config/axios.config";
import { DataAdministrador } from "@/dto/data-administrador";

export async function PutAdministrador(data: DataAdministrador) {
  try {
    const response = api.put(`/admin`, data);
    console.log("Dados Atualizar com sucesso!", response);
  } catch (error) {
    console.log("Error ao atualizar os dados", error);
  }
}
