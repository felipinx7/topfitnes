import z from "zod";

export const focoCorpoEnum = z.enum([
  "PEITO",
  "COSTAS",
  "PERNAS",
  "BRACOS",
  "GLUTEOS",

]);

export const trainingSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(1, "O nome é obrigatório"),
  descricao: z.string(),
  foco_corpo: focoCorpoEnum,
  foto: z.any().optional(), 
  exercicios: z.array(z.object()).optional()
});

export type TrainingSchemaDTO = z.infer<typeof trainingSchema>;