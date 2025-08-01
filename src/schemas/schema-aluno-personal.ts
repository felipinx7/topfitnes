import z, { any } from "zod";

const treinoSchema = z.object({
  id: z.string(),
  nome: z.string(),
  descricao: z.string(),
  foco_corpo: z.string(),
  foto: z.string(),
});

const treinoAlunoSchema = z.object({
  id: z.string(),
  aluno_id: z.string(),
  treino_id: z.string(),
  treino: treinoSchema,
});

const personalSchema = z.object({
  id: z.string(),
  usuario_id: z.string(),
  role: z.string(),
  nome: z.string(),
  sobrenome: z.string(),
  foto: z.any().optional(),
  telefone: z.string(),
  senha: z.string(),
  email: z.string(),
  formacao: z.string(),
  registro_profissional: z.string(),
  especialidade: z.string(),
  disponibilidade: z.string(),
  criado_em: z.string(),
});

const schemaAlunoPersonal = z
  .object({
    id: z.string(),
    nome: z.string().min(1, "Nome é obrigatório").optional(),
    sobrenome: z.string().min(1, "Sobrenome é obrigatório").optional(),
    treino_dias_por_semana: z.number().optional(),
    sexo: z.enum(["MASCULINO", "FEMININO", "PREFIRO_NAO_DIZER"]).optional(),
    foco_treino: z.string().optional(),
    peso: z.number().optional(),
    altura: z.number().optional(),
    idade: z.number().optional(),
    data_matricula: z.string().optional(),
    email: z.string().email("E-mail inválido").optional(),
    senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres").optional(),
    telefone: z.string().optional(),
    foco_corpo: z.string().optional(),
    plano: z.string().optional(),
    foto: z.any().optional(),
    usuario_id: z.string(),
    personal: personalSchema.optional(),
    treinos_aluno: z.array(treinoAlunoSchema).optional(),
  })
  .passthrough();




export type AlunoPersonalDTO = z.infer<typeof schemaAlunoPersonal>;


