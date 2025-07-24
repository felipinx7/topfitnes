

export type TreinoDTO = {
    name: string,
    description: string,
    bodyPartsAfected: string,
    exercises: Exercicio[],
  //  photo: string,
}

export type Exercicio = {
    name: string,
 //   photo: string,
    reps: number,
    series: number,
    description: string
}