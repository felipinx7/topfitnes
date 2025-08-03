import { minLength, z } from "zod";

export enum SexoEnumTS {
  MASCULINO = "MASCULINO",
  FEMININO = "FEMININO",
  PREFIRO_NAO_DIZER = "PREFIRO_NAO_DIZER",
}

export enum FocoTreinoEnumTS {
  PERDER_PESO = "PERDER_PESO",
  GANHAR_MASSA = "GANHAR_MASSA",
  MANTER_A_FORMA = "MANTER_A_FORMA",
}

export enum FocoCorpoEnumTS {
  PEITO = "PEITO",
  BRACOS = "BRACOS",
  COSTAS = "COSTAS",
  GLUTEOS = "GLUTEOS",
  PERNAS = "PERNAS",
}

export const schemaAlunoForm = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  sobrenome: z.string().min(1, "Sobrenome é obrigatório"),
  treino_dias_por_semana: z
    .number()
    .min(1, "Valor não poder ser menor que zero"),
  sexo: z.nativeEnum(SexoEnumTS, {
    error: () => ({ message: "Selecione um sexo válido" }),
  }),
  foco_treino: z.nativeEnum(FocoTreinoEnumTS, {
    error: () => ({ message: "Selecione o foco do treino" }),
  }),
  foco_corpo: z.nativeEnum(FocoCorpoEnumTS, {
    error: () => ({ message: "Selecione o foco do seu corpo" }),
  }),
  foto: z.any().optional(),
  peso: z.number().min(0, "Digite um peso"),
  altura: z.number().min(0, "Digite a sua altura"),
  idade: z.number().min(3, "Digite a sua idade"),
  data_matricula: z
    .string()
    .optional()
    .refine((val) => !val || /^\d{4}-\d{2}-\d{2}$/.test(val), {
      message: "Data deve estar no formato yyyy-MM-dd",
    }),
  email: z.email("E-mail inválido"),
  senha: z.string().min(8, "Senha deve ter no mínimo 8 caracteres"),
  telefone: z.string().min(15, "Telefone inválido"),
  plano_id: z.string().min(1, "Selecione um plano"),
  role: z.string().default("ALUNO"),
  treinos_aluno: z.array(z.any()).optional(),
  id: z.string().optional(),
});

export type AlunoSchemaDTO = z.infer<typeof schemaAlunoForm>;
