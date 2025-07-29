import z from "zod";

export const schemaPersonal = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, "Nome muito curto"),
  sobrenome: z.string().min(1, "Sobrenome muito curto"),
  formacao: z.string().min(2, "Formação inválida"),
  registro_profissional: z.string().min(2, "Registro inválido"),
  especialidade: z.string().min(3, "Especialidade inválida"),
  disponibilidade: z.string().min(3, "muito curto"),
  senha: z.string().min(8, "Senha muito curta"),
  telefone: z.string().min(11, "numero inválido"),
  email: z.email(),
});
