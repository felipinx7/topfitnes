import { TrainingSchemaDTO } from "@/schemas/schema-treino"

export type ModalCreateTreinoProps = {
    open: boolean,
    close: () => void,
    create: (data: TrainingSchemaDTO) => void
}

export type ModalUPdateTreinoProps = {
    open: boolean
    close: () => void
    trainingToEdit: TrainingSchemaDTO | null
    updateTreino: (data: TrainingSchemaDTO) => void
}

export type ModalDeleteTreinoProps = {
    open: boolean
    close: () => void
    onDelete?: () => void,
    texto: string
}

export type ModalSendTreinoProps = {
    open: boolean,
    close: () => void,
    send?: () => void
}

export type ModalSeeTreinoProps = {
    open: boolean, 
    close: () => void,
    openModalCreateExercise?: boolean, 
    dataTraining: TrainingSchemaDTO | null
}