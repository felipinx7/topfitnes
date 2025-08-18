import { api } from "@/config/axios.config";

export async function GetAlunosNovosDesteMes(id: string) {
  try {
    const { data } = await api.get(`/personal/newStudentsOfTheMonth/${id}`, {
        withCredentials: true
    });
    return data;
  } catch (error) {
    console.log("Personal não econtrado");
  }
}

export async function getAlunosNovosDesteMes() {
  try {
    const { data } = await api.get(`/personal/newStudentsOfTheMonth`, {
        withCredentials: true
    });
    return data;
  } catch (error) {
    console.log("Personal não econtrado");
  }
}
