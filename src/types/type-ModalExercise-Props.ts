import { exerciseDTO } from "@/schemas/schema-exercicio"

export type ModalCreateExercicioProps = {
    open: boolean,
    close: () => void,
    create: (data: exerciseDTO) => void
}

export type ModalUpdateExercicioProps = {
    open: boolean,
    close: () => void,
    exerciseToEdit: exerciseDTO| null
    updateExercise: (data: exerciseDTO) => void
}