

export type TreinoDTO = {
    name: string,
    description: string,
    bodyPartsAfected: string,
    exercises: ExercicioDTO[],
  //  photo: string,
}

export type ExercicioDTO = {
    name: string,
 //   photo: string,
    reps: number,
    series: number,
    description: string
}