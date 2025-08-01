import { AlunoPersonalDTO } from "@/schemas/schema-aluno-personal"

export type ModalSeeAlunoProps = {
    open: boolean, 
    close: () => void,
    dataAluno: AlunoPersonalDTO | null
}