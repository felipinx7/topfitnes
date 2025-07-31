import { exerciseDTO } from "@/schemas/schema-exercicio";
import { ExercicioComponent } from "./exercicioComponent";
import { ExercicioDTO } from "@/types/type-Treino";

type infoExerciesProps = {
    setIsExercises: (exercise: exerciseDTO) => void,
    setVisibleModalDelete: (value: boolean | ((prev: boolean) => boolean)) => void,
    setVisibleModalCreate: (value: boolean | ((prev: boolean) => boolean)) => void,
    setVisibleModalUpdate: (value: boolean | ((prev: boolean) => boolean)) => void,
    exercises: exerciseDTO[]
}

export function InfoExercises({ setIsExercises, setVisibleModalDelete, setVisibleModalCreate, setVisibleModalUpdate, exercises }: infoExerciesProps) {
    return (
        <div className="w-full h-full border-l border-gray-400 overflow-y-hidden flex flex-col">
            <div className="flex w-full items-center justify-between px-4 py-1 font-poppins-Medium ">
                <h1 className="text-verde-200 font-medium text-2xl"> Exercícios </h1>
                <button
                    onClick={() => setVisibleModalCreate(prev => !prev)}
                    className="rounded-xl flex items-center justify-center bg-verde-100 text-white hover:bg-verde-200 font-Poppins-Bold py-1.5 px-4 text-sm duration-500 cursor-pointer pr-2">
                    + Novo Exercício
                </button>
            </div>
            {/* Exercicios */}
            <div className="flex flex-col h-full w-full gap-4 mt-6 overflow-x-hidden overflow-y-auto pb-20 px-4">
                        {exercises?.map((item: exerciseDTO)=>(
                            <div className="w-full">
                            <ExercicioComponent
                                delete={() => {
                                    setIsExercises(item)
                                    setVisibleModalDelete(prev => !prev)
                                }}
                                update={() => {
                                    setIsExercises(item)
                                    setVisibleModalUpdate(prev => !prev)
                                }}
                                dataExercise={item}
                                foto={item.foto}
                                     />
                                     </div>
                        ))}
            </div>
        </div>
    )
}