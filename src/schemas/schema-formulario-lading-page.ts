import { z } from "zod";

export const formularioLadingPageSchema = z.object({
  nome: z.string().min(1, "Nome muito curto"),
  email: z.string().email("Email Inválido"),
  telefone: z.string().min(11, "Telefone Inválido"),
});

export type FormularioLadingPageFormData = z.infer< typeof formularioLadingPageSchema >


