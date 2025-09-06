import { api } from "@/config/axios.config";

export default async function PutClientPlainADD(
  id: string,
  numberOfDays: number
) {
  try {
    const formData = new FormData();
    const NewDate = new Date();
    if (numberOfDays === 30) {
      NewDate.setMonth(NewDate.getMonth() + 1);
    } else if (numberOfDays === 90) {
      NewDate.setMonth(NewDate.getMonth() + 3);
    } else if (numberOfDays === 180) {
      NewDate.setMonth(NewDate.getMonth() + 6);
    } else if (numberOfDays === 365) {
      NewDate.setFullYear(NewDate.getFullYear() + 1);
    }
    formData.append("data_validade_plano", NewDate.toISOString());
    if (numberOfDays === 30) {
      formData.append("plano_id", "af25b640-15e2-4bf6-85ec-85c9326130f8");
    } else if (numberOfDays === 90) {
      formData.append("plano_id", "5019bae2-bd6b-4cef-9506-48fb8f777463");
    } else if (numberOfDays === 180) {
      formData.append("plano_id", "e29c95a1-99eb-4848-a906-4f5a3d81fe50");
    } else if (numberOfDays === 365) {
      formData.append("plano_id", "7000eaa1-c754-4c65-a2bb-bbcd8be7f770");
    }

    const response = await api.put(`/student/${id}`, formData, {
      withCredentials: true,
    });

    console.log("Dados atualizados com sucesso", response);
    return response;
  } catch (error) {
    console.log("Erro ao atualizar dados", error);
    throw error;
  }
}
