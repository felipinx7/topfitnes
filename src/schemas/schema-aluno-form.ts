import { z } from "zod";

export const schemaAlunoForm = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  sobrenome: z.string().min(1, "Sobrenome é obrigatório"),
  treino_dias_por_semana: z.number(),
  sexo: z.string(),
  foco_treino: z.string(),
  foto: z.any().optional(),
  peso: z.number(),
  altura: z.number(),
  idade: z.number(),
  data_matricula: z
    .string()
    .optional()
    .refine((val) => !val || /^\d{4}-\d{2}-\d{2}$/.test(val), {
      message: "Data deve estar no formato yyyy-MM-dd",
    }),

  email: z.email("E-mail inválido"),
  senha: z.string().min(8, "Senha deve ter no mínimo 8 caracteres"),
  telefone: z.string(),
  foco_corpo: z.string(),
  plano_id: z.string(),
  role: z.string().default("ALUNO"),
  treinos_aluno: z.array(z.object()).optional(),
  id: z.string().optional(),
});

export type AlunoSchemaDTO = z.infer<typeof schemaAlunoForm>;
