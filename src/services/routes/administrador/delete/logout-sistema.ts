import { api } from "@/config/axios.config";

export async function LogoutSistema() {
  try {
    const response = api.delete("/admin/logout");
    console.log("Logou realizado com sucesso!");
  } catch (error) {
    console.log("Error ao deslogar do sistema");
  }
}
