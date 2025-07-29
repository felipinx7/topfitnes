import { DataAlunoHome } from "@/dto/data-aluno-Home";


export type SiderBarAluno = {
    id: number,
    setId: (id: number) => void;
    aluno: DataAlunoHome | undefined,
}