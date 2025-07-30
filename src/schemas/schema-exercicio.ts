import { z } from "zod";

export const exerciseSchema = z.object({
  id: z.date().optional(),
  nome: z.string(),
  foto: z.any().optional(),
  descricao: z.string(),
  repeticoes: z.coerce.number().int(),
  execucoes: z.coerce.number().int(), 
});

export type exerciseDTO = z.infer<typeof exerciseSchema>;
export type exerciseDTOInput = z.input<typeof exerciseSchema>
