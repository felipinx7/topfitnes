'use client'

import { ButtonClose } from "@/assets/icons/icon-button-close"
import { IconDelete } from "@/assets/icons/icon-excluir-treinoModal"
import { DeleteExercise } from "@/services/routes/exercises/deleteExercise"
import { deleteTreino } from "@/services/routes/treinos/deleteTreino"
import { ModalDeleteTreinoProps } from "@/types/type-ModalTreino-Props"
import ReactDOM from "react-dom"
import { toast } from "react-toastify"

export function ModalDeleteTreino({ open, close, onDelete, texto, training, isPersonal, exercicio }: ModalDeleteTreinoProps) {
    return ReactDOM.createPortal(
        <div
            onClick={close}
            className={`fixed inset-0 bg-black/40 flex items-center justify-center z-50 ${open ? 'visible' : 'invisible'}`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-black/80 flex flex-col items-center justify-center px-2 w-[30%] h-[55%] rounded-lg relative duration-300 ease-in-out ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>
                {IconDelete}
                <div className="flex flex-col w-full items-center justify-center pt-1 mt-3">
                    <h1 className="font-poppins font-extrabold text-[20px] text-white">DELETAR {texto.toUpperCase()}</h1>
                    <h2 className="font-albert font-medium text-[14px] text-white text-primary-200">Você tem certeza que deseja deletar esse {texto}?</h2>
                </div>
                <div className="w-full items-center h-1/5 flex justify-center pt-5">
                    <button
                        onClick={async () => {
                            onDelete?.()
                            toast.success(`${texto === "treino" ? "Treino deletado com sucesso!" : "Exercício deletado com sucesso!"}`)
                            close()
                            isPersonal ? await deleteTreino(training.id) : await DeleteExercise(exercicio.id)
                        }}
                        className="flex items-center justify-center w-3/5 py-1 font-poppins font-semibold text-white bg-red-500 cursor-pointer hover:bg-red-600 duration-500 text-[18px] rounded-lg ">Deletar</button>
                </div>

                <button onClick={close} className="absolute w-fit h-fit top-2 right-1 hover:text-red-500 text-white duration-500 cursor-pointer">
                    {ButtonClose}
                </button>
            </div>
        </div>,
        document.body
    )
}