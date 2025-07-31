

export type TreinoDTO = {
    nome: string,
    descricao: string,
    foco_corpo: string,
    exercicios: ExercicioDTO[],
    foto: string,
}

export type ExercicioDTO = {
    nome: string,
    foto: string,
    repeticoes: number,
    execucoes: number,
    descricao: string
}