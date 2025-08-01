import z, { any } from "zod";

export const schemaAlunoPersonal = z.object({
  id: z.string(),
  nome: z.string().min(1, "Nome é obrigatório").optional(),
  sobrenome: z.string().min(1, "Sobrenome é obrigatório").optional(),
  treino_dias_por_semana: z.number().optional(),
  sexo: z.string().optional(),
  foco_treino: z.string().optional(),
  peso: z.number().optional(),
  altura: z.number().optional(),
  idade: z.number().optional(),
  data_matricula: z.string().optional(),
  email: z.email("E-mail inválido").optional(),
  senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres").optional(),
  telefone: z.string().optional(),
  foco_corpo: z.string().optional(),
  plano: z.string().optional(),
  foto: any().optional(),
  usuario_id: z.string()
});

export type AlunoPersonalDTO = z.infer<typeof schemaAlunoPersonal>;