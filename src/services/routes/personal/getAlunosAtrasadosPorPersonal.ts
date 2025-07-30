import { api } from "@/config/axios.config";

export async function GetAlunosAtrasadosPorPersonal(id: string) {
  try {
    const { data } = await api.get(`/personal/studentOverdue/${id}`, {
        withCredentials: true
    });
    return data;
  } catch (error) {
    console.log("Personal não econtrado");
  }
}
