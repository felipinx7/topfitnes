import { api } from "@/config/axios.config";

export async function GetPersonal() {
  try {
    const { data } = await api.get(`/personal/token`, {
        withCredentials: true
    });
    return data;
  } catch (error) {
    console.log("Personal não econtrado");
  }
}
