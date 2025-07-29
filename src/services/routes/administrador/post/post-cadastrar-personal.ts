import { api } from "@/config/axios.config";

export async function PostCadastrarPersonal(formData: FormData) {
  try {
    const response = await api.post("/personal/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Personal cadastrado com sucesso!", response.data);
    return response.data;
  } catch (error) {
    console.log("Falha ao criar um usuário", error);
  }
}
