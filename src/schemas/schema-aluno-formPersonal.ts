import { z } from "zod";


export const schemaAlunoFormPersonal = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  sobrenome: z.string().min(1, "Sobrenome é obrigatório"),
  treino_dias_por_semana: z.string().optional(),
  sexo: z.enum(["MASCULINO", "FEMININO", "PREFIRO_NAO_DIZER"]),
  foco_treino: z.enum(["PERDER_PESO", "GANHAR_MASSA", "MANTER_A_FORMA"]),
  foto: z.any().optional(),
  peso: z.string().optional(),
  altura: z.string().optional(),
  idade: z.string().optional(),
  data_matricula: z
    .string()
    .optional()
    .refine((val) => !val || /^\d{4}-\d{2}-\d{2}$/.test(val), {
      message: "Data deve estar no formato yyyy-MM-dd",
    }),
  email: z.email("E-mail inválido").optional(),
  senha: z.string().min(8, "Senha deve ter no mínimo 8 caracteres"),
  telefone: z.string().optional(),
  foco_corpo: z.enum(["PEITO", "BRACOS", "COSTAS", "GLUTEOS", "PERNAS"]),
  plano_id: z.uuid(),
  treinos_aluno: z.array(z.object()).optional(),
  id: z.string().optional(),
  observacao: z.string()
});

export const schemaAlunoUpdateFormPersonal = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  sobrenome: z.string().min(1, "Sobrenome é obrigatório"),
  treino_dias_por_semana: z.number().optional(),
  sexo: z.enum(["MASCULINO", "FEMININO", "PREFIRO_NAO_DIZER"]),
  foco_treino: z.enum(["PERDER_PESO", "GANHAR_MASSA", "MANTER_A_FORMA"]),
  foto: z.any().optional(),
  peso: z.number().optional(),
  altura: z.number().optional(),
  idade: z.any().optional(),
  data_matricula: z
    .string()
    .optional()
    .refine((val) => !val || /^\d{4}-\d{2}-\d{2}$/.test(val), {
      message: "Data deve estar no formato yyyy-MM-dd",
    }),
  email: z.email("E-mail inválido").optional(),
  telefone: z.string().optional(),
  foco_corpo: z.enum(["PEITO", "BRACOS", "COSTAS", "GLUTEOS", "PERNAS"]),
  plano_id: z.uuid().optional(),
  treinos_aluno: z.array(z.object()).optional(),
  id: z.string().optional(),
  observacao: z.string()
});

export type AlunoSchemaUpdateFormPersonalDTO = z.infer<typeof schemaAlunoUpdateFormPersonal>
export type AlunoSchemaFormPersonalDTO = z.infer<typeof schemaAlunoFormPersonal>;
