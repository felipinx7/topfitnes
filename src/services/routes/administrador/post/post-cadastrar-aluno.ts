import { api } from "@/config/axios.config";

export async function PostCadastrarAluno(data: FormData) {
  try {
    const response = await api.post("/student/register", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Usuário cadastrado com sucesso!", response.data);
    return response.data;
  } catch (error) {
    console.log("Falha ao criar um usuário", error);
    throw error;
  }
}
