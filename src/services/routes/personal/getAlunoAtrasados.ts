import { api } from "@/config/axios.config";

export async function GetAlunosAtrasados() {
  try {
    const { data } = await api.get(`/personal/studentOverdue`, {
        withCredentials: true
    });
    return data;
  } catch (error) {
    console.log("Personal não econtrado");
  }
}
