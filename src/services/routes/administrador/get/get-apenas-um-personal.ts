import { api } from "@/config/axios.config";

export async function GetUmPersonal(id: string) {
  try {
    const response = api.get(`/personal/:${id}`);
    console.log("Personal Encontrado", response);
    return response;
  } catch (error) {
    console.log("Personal não econtrado");
  }
}
