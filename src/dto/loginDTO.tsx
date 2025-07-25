import { schemaLogin } from "@/schemas/schema-Login";
import z from "zod";
z

export type loginDTO = z.infer<typeof schemaLogin>