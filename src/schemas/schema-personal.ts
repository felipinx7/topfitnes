import z, { optional } from "zod";

export const schemaPersonal = z.object({
  id: z.string().optional(),
  usuario_id: z.string().optional(),
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

export const schemaPersonaPerfil = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, "Nome muito curto").nullable(),
  sobrenome: z.string().min(1, "Sobrenome muito curto").nullable(),
  formacao: z.string().min(2, "Formação inválida").nullable(),
  telefone: z.string().min(11, "numero inválido").nullable(),
  email: z.email().nullable(),
  foto: z.any().nullable()
});

export type schemaPersonaPerfilDTO = z.infer<typeof schemaPersonaPerfil>
export type schemaPersonalDTO = z.infer<typeof schemaPersonal>
