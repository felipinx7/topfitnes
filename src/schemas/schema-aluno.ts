import { string, z } from "zod";

export enum Planos {
  MENSAL = "69621913-2577-4f02-976c-c705914df714",
  TRIMESTRAL = "PLANO_TRIMESTRAL_PLACEHOLDER", // Coloque o ID real quando tiver
  SEMESTRAL = "01ba1832-9a3d-4585-a68b-7285e7949d65",
  ANUAL = "ffb8e1b3-5fef-40ac-8cd4-23667e99811a",
}

export const schemaAluno = z.object({
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
  plano_id: z.enum(Planos).optional(),
  foto: z.string().optional(),
  usuario_id: z.string(),
  data_validade_plano: z.string().optional(),
});

export type AlunoSchemaDTO = z.infer<typeof schemaAluno>;
