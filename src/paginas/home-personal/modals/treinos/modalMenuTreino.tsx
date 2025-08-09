'use client'

import { ButtonClose } from "@/assets/icons/icon-button-close"
import { IconeExcluirTreino } from "@/assets/icons/icon-excluir-treino"
import { IconeAtualizarTreino } from "@/assets/icons/icone-atualizar-treino"
import { IconeEnviarTreino } from "@/assets/icons/icone-enviar-treino"
import { IconeVisualizarTreino } from "@/assets/icons/icone-visualiar-treino"
import { ModalMenuTreinoProps } from "@/types/type-ModalTreino-Props"
import ReactDOM from "react-dom"

export function ModalMenuTreino(data: ModalMenuTreinoProps) {
    return ReactDOM.createPortal(
        <div
            onClick={data.close}
            className={`fixed inset-0 bg-black/40 flex items-center justify-center z-40 ${data.open ? 'visible' : 'invisible'}`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-gray-200 flex flex-col items-center px-2 w-[80%] h-[60%] max-h-[400px] rounded-lg relative duration-300 ease-in-out md:hidden ${data.open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>
                <h1 className="text-verde-200 font-poppins font-bold mt-4 text-xl">{data.dataTraining?.nome}</h1>
                <h2 className="text-verde-200 font-poppins font-medium text-center text-sm">Escolha a ação que você gostaria de fazer</h2>
                {/* Icones*/}
                <div className="flex gap-6 flex-col h-full w-4/5 items-center justify-center">
                    {/* Icone atualizar */}
                    <button
                        onClick={() => {
                            if (!data.dataTraining) return;

                            data.setTrainingEdit(data.dataTraining);
                            data.close()
                            data.setVisibleModalUpdateTraining((prev) => !prev)
                        }}
                        className="flex items-center justify-center font-poppins font-bold  space-x-4 p-2 w-full py-2 rounded-lg bg-[#FACC15] shadow shadow-black/20 active:bg-yellow-300 cursor-pointer duration-500">
                        <IconeAtualizarTreino />
                        <h1 className="pt-0.5">Atualizar Treino</h1>
                    </button>
                    {/* Icone enviar */}
                    <button
                        onClick={() => {
                            if (!data.dataTraining) return;

                            data.setTrainingEdit(data.dataTraining);
                            data.close()
                            data.setVisibleModalSendTraining((prev) => !prev)
                        }}
                        className="flex items-center justify-center font-poppins font-bold  space-x-4 p-2 w-full py-2 rounded-lg bg-[#FACC15] shadow shadow-black/20 active:bg-yellow-300  cursor-pointer duration-500">
                        <IconeEnviarTreino />
                        <h1 className="pt-0.5">Enviar Treino</h1>
                    </button>
                    {/* Icone Visualizar*/}
                    <button
                        onClick={() => {
                            if (!data.dataTraining) return;

                            data.setTrainingEdit(data.dataTraining);
                            data.close()
                            data.setVisibleModalSeeTraining((prev) => !prev)
                        }}
                        className="flex items-center justify-center font-poppins font-bold  space-x-4 p-2 w-full py-2 text-white rounded-lg bg-black/80 shadow shadow-black/20 cursor-pointer duration-500 active:bg-black active:text-white">
                        <IconeVisualizarTreino />
                        <h1 className="pt-0.5">Visualizar Treino</h1>
                    </button>
                    {/* Icone Excluir */}
                    <button
                        onClick={() => {
                            if (!data.dataTraining) return;

                            data.setTrainingEdit(data.dataTraining);
                            data.close()
                            data.setVisibleModalDelete((prev) => !prev)
                        }}
                        className="flex items-center justify-center font-poppins font-bold  space-x-4 p-2 w-full py-2 rounded-lg bg-[#EF4444] shadow shadow-black/20 active:bg-red-600 cursor-pointer duration-500">
                        <IconeExcluirTreino />
                        <h1 className="pt-0.5">Excluir Treino</h1>
                    </button>
                </div>
                <button onClick={data.close} className="absolute w-fit h-fit top-2 right-1 active:bg-red-500 text-[#242424] duration-500 cursor-pointer">
                    {ButtonClose}
                </button>
            </div>


        </div>,
        document.body
    )
}