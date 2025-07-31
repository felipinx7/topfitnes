import { exerciseDTO } from "@/schemas/schema-exercicio"
import { TrainingSchemaDTO } from "@/schemas/schema-treino"

export type ModalCreateExercicioProps = {
    open: boolean,
    close: () => void,
    create: (data: exerciseDTO) => void,
    treinoId: string
}

export type ModalUpdateExercicioProps = {
    open: boolean,
    close: () => void,
    exerciseToEdit: exerciseDTO| null
    updateExercise: (data: exerciseDTO) => void
}