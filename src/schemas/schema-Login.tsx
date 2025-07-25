import z from "zod";

export const schemaLogin = z.object({
  emailTel: z.union([
    z.string().email(),
    z.number().min(11), // número com pelo menos 11 dígitos
  ]),
    password: z.string().min(8)
});

export const emailSchema = z.object({
    email: z.string().email()
})