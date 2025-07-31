import { z } from "zod";

export const schemaCadastroPersonal = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, "O nome é obrigatório"),
  sobrenome: z.string().min(1, "O sobrenome é obrigatório"),
  foto: z.any().optional(),
  telefone: z
    .string()
    .min(10, "Telefone inválido")
    .max(15, "Telefone muito longo"),
  formacao: z.string().min(2, "Formação muito curta"),
  registro_profissional: z.string().min(3, "Registro inválido"),
  especialidade: z.string().min(2, "Especialidade obrigatória"),
  disponibilidade: z.string().min(2, "Informe a disponibilidade"),
  email: z.email("Email inválido"),
});

export type SchemaPersonal = z.infer<typeof schemaCadastroPersonal>;
