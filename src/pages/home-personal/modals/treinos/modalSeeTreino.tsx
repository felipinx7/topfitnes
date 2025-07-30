'use client'
import { IconeCloseModal } from "@/assets/icons/icone-closeModal-treino";
import { ModalSeeTreinoProps } from "@/types/type-ModalTreino-Props";
import ReactDOM from "react-dom"
import { InfoTreino } from "../../components/infoTreino";
import { ExercicioComponent } from "../../components/exercicioComponent";
import { useState } from "react";
import { ModalDeleteTreino } from "./modalDeleteTreino";
import { exerciseDTO } from "@/schemas/schema-exercicio";
import { ModalCreateExercicio } from "../exercicios/modalCreateExercicio";
import { InfoExercises } from "../../components/infoExercises";
import { ModalUpdateExercicio } from "../exercicios/modalUpdateExercicio";
import { BaseUrlFoto } from "@/utils/base-url-foto";

export function ModalSeeTreino(data: ModalSeeTreinoProps) {
    // Visible modals
    const [visibleModalDelete, setVisibleModalDelete] = useState(false)
    const [visibleModalCreate, setVisibleModalCreate] = useState(false)
    const [visibleModalUpdate, setVisibleModalUpdate] = useState(false)

    // Exercises
    const [exercises, setExercises] = useState<exerciseDTO[]>([]);
    const [isExercises, setIsExercises] = useState<exerciseDTO | null>(null)

    // functions
    function createExercise(data: exerciseDTO) {
        setExercises((prev: exerciseDTO[]) => [...prev, data])
    }

    function deleteExercise() {
        setExercises(prev => prev.filter(e => e.id !== isExercises?.id))
    };

    function updateExercise(updateExercise: exerciseDTO){
        setExercises(prev => prev.map(e => e.id === isExercises?.id ? updateExercise : e))
    }

    const photo = BaseUrlFoto(data?.dataTraining?.foto || "")
    const previewFoto = data?.dataTraining?.foto ? photo : 'url(#)';

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
                    <h1 className="font-Poppins-Medium text-xl text-neutras-100">Treino</h1>
                    <button
                        onClick={data.close}
                        className="text-neutras-100 pr-1 duration-500 cursor-pointer hover:text-red-500">
                        <IconeCloseModal />
                    </button>
                </div>

                {/* Main */}
                <div className="h-full w-full flex ">
                    {/* Info Treino */}
                    {data.dataTraining && (
                        <InfoTreino previewFoto={previewFoto} data={{ dataTraining: data.dataTraining }} />
                    )}

                    {/* Exercises */}
                    <InfoExercises
                        setIsExercises={setIsExercises}
                        setVisibleModalCreate={setVisibleModalCreate}
                        setVisibleModalDelete={setVisibleModalDelete}
                        setVisibleModalUpdate={setVisibleModalUpdate}
                        exercises={exercises}
                    />
                </div>
            </div>

            <ModalDeleteTreino
                open={visibleModalDelete}
                close={() => setVisibleModalDelete(prev => !prev)}
                onDelete={deleteExercise}
                texto="exercício"
                isPersonal={false}
            />

            <ModalCreateExercicio
                open={visibleModalCreate}
                close={() => setVisibleModalCreate(prev => !prev)}
                create={createExercise}
            />

            <ModalUpdateExercicio 
                open={visibleModalUpdate}
                close={() => setVisibleModalUpdate(prev => !prev)}
                updateExercise={updateExercise}
                exerciseToEdit={isExercises}
            />
        </div>,
        document.body
    )
}