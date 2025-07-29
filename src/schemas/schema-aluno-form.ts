import { z } from "zod";

export const schemaAlunoForm = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  sobrenome: z.string().min(1, "Sobrenome é obrigatório"),
  treino_dias_por_semana: z.number(),
  sexo: z.string(),
  foco_treino: z.string(),
  peso: z.number(),
  altura: z.number(),
  idade: z.number(),
  data_matricula: z.string(),
  email: z.email("E-mail inválido"),
  senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
  telefone: z.string(),
  foco_corpo: z.string(),
  plano: z.string(),
});

export type AlunoSchemaDTO = z.infer<typeof schemaAlunoForm>;