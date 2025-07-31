import { z } from "zod";

export const studentTrainingSchema = z.object({
  aluno_id: z.string(),
  treino_id: z.string()
});

export type studentTrainingDTO = z.infer<typeof studentTrainingSchema>;