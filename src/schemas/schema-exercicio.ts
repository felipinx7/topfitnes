import { z } from "zod";

export const exerciseSchema = z.object({
  id: z.string().optional(),
  nome: z.string(),
  foto: z.any().optional(),
  descricao: z.string(),
  repeticoes: z.string(),
  execucoes: z.string() 
});

export type exerciseDTO = z.infer<typeof exerciseSchema>;
export type exerciseDTOInput = z.input<typeof exerciseSchema>
