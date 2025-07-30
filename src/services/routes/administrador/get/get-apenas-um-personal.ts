import { api } from "@/config/axios.config";

export async function GetUmPersonal(id: string | undefined) {
  try {
    const response = await api.get(`/personal/:${id}`, {
      withCredentials: true
    });
    console.log("Personal Encontrado", response);
    return response;
  } catch (error) {
    console.log("Personal não econtrado");
  }
}
