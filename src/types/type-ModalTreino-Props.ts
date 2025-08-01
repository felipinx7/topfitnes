import { TrainingSchemaDTO } from "@/schemas/schema-treino"
import { functionButtons } from "./type-functionButtons"
import { Dispatch, SetStateAction } from "react"

export type ModalCreateTreinoProps = {
    open: boolean,
    close: () => void,
    create: (data: TrainingSchemaDTO) => void,
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
    texto: string,
    training?: any
    exercicio?: any
    isPersonal: boolean
}

export type ModalSendTreinoProps = {
    open: boolean,
    close: () => void,
    send?: () => void,
    trainingToEdit: TrainingSchemaDTO | null
}

export type ModalSeeTreinoProps = {
    open: boolean,
    close: () => void,
    openModalCreateExercise?: boolean,
    dataTraining: TrainingSchemaDTO | null
}

export type ModalMenuTreinoProps = {
    open: boolean,
    close: () => void,
    dataTraining: TrainingSchemaDTO | null
    setTrainingEdit: (data: TrainingSchemaDTO) => void,
    setVisibleModalDelete: Dispatch<SetStateAction<boolean>>;
    setVisibleModalSendTraining: Dispatch<SetStateAction<boolean>>;
    setVisibleModalSeeTraining: Dispatch<SetStateAction<boolean>>;
    setVisibleModalUpdateTraining: Dispatch<SetStateAction<boolean>>;
}
