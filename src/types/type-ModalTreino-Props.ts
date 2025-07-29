import { TrainingSchemaDTO } from "@/schemas/schema-treino"

export type ModalCreateTreinoProps = {
    open: boolean,
    close: () => void,
}

export type ModalUPdateTreinoProps = {
    open: boolean
    close: () => void
    trainingToEdit?: TrainingSchemaDTO
    updateTreino?: (data: TrainingSchemaDTO) => void
}

export type ModalDeleteTreinoProps = {
    open: boolean
    close: () => void
    onDelete?: () => void
}