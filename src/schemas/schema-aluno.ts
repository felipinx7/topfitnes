import { string, z } from "zod";

export enum Planos {
  MENSAL = "af25b640-15e2-4bf6-85ec-85c9326130f8",
  TRIMESTRAL = "5019bae2-bd6b-4cef-9506-48fb8f777463",
  SEMESTRAL = "e29c95a1-99eb-4848-a906-4f5a3d81fe50",
  ANUAL = "7000eaa1-c754-4c65-a2bb-bbcd8be7f770",
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
