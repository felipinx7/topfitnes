'use client'
import { IconeCloseModal } from "@/assets/icons/icone-closeModal-treino";
import ReactDOM from "react-dom"
import { useState } from "react";
import { BaseUrlFoto } from "@/utils/base-url-foto";
import { ModalSeeAlunoProps } from "@/types/type-modalAluno-Props";
import { InfoAluno } from "../../components/infoAluno";
import { TrainingSchemaDTO } from "@/schemas/schema-treino";

export function ModalSeeAluno(data: ModalSeeAlunoProps) {

    // Exercises
    const [training, setTraining] = useState<TrainingSchemaDTO[]>([]);
    const [isTraining, setIsTraining] = useState<TrainingSchemaDTO | null>(null)

    const photo = BaseUrlFoto(data?.dataAluno?.foto || "")
    const previewFoto = data?.dataAluno?.foto ? photo : 'url(#)';

    return ReactDOM.createPortal(
        <div
            onClick={data.close}
            className={`fixed inset-0 bg-black/40 flex items-center justify-center z-40 ${data.open ? 'visible' : 'invisible'}`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-white w-4/5 h-[95%] relative rounded-xl flex flex-col items-center space-y-1 transition-all duration-500 ${data.open ? "opacity-100 scale-100" : "opacity-0 scale-125"}`}>
                {/* Cabeçalho */}
                <div className="w-full bg-[#F0F0F0] rounded-t-xl flex justify-between items-center px-2 py-3">
                    <h1 className="font-Poppins-Medium text-xl text-neutras-100">Aluno</h1>
                    <button
                        onClick={data.close}
                        className="text-neutras-100 pr-1 duration-500 cursor-pointer hover:text-red-500">
                        <IconeCloseModal />
                    </button>
                </div>

                {/* Main */}
                <div className="h-full w-full flex ">
                    {/* Info Treino */}
                    {data.dataAluno && (
                        <InfoAluno previewFoto={previewFoto} data={{ dataAluno: data.dataAluno }} />
                    )}



                </div>
            </div>

        </div>,
        document.body
    )
}