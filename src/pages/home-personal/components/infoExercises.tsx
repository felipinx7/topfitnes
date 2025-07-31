import { exerciseDTO } from "@/schemas/schema-exercicio";
import { ExercicioComponent } from "./exercicioComponent";

type infoExerciesProps = {
    setIsExercises: (exercise: exerciseDTO) => void,
    setVisibleModalDelete: (value: boolean | ((prev: boolean) => boolean)) => void,
    setVisibleModalCreate: (value: boolean | ((prev: boolean) => boolean)) => void,
    setVisibleModalUpdate: (value: boolean | ((prev: boolean) => boolean)) => void,
    exercises: exerciseDTO[]
}

export function InfoExercises({ setIsExercises, setVisibleModalDelete, setVisibleModalCreate, setVisibleModalUpdate, exercises }: infoExerciesProps) {
    return (
        <div className="w-full h-full border-l border-gray-400">
            <div className="flex justify-between px-4 py-1 font-poppins-Medium ">
                <h1 className="text-verde-200 font-medium text-2xl"> Exercícios </h1>
                <button
                    onClick={() => setVisibleModalCreate(prev => !prev)}
                    className="rounded-xl flex items-center justify-center bg-verde-100 text-white hover:bg-verde-200 font-Poppins-Bold py-1.5 px-4 text-sm duration-500 cursor-pointer pr-2">
                    + Novo Exercício
                </button>
            </div>
            {/* Exercicios */}
            <div className="flex-1 flex-col flex items-center w-full overflow-y-auto mt-6 space-y-4">
                {(exercises || []).length > 0 ? (
                    (exercises || []).map((item, idx) => {
                        const mappedItem = {
                            ...item,
                            name: item?.nome,
                            reps: Number(item?.repeticoes),
                            series: Number(item?.execucoes),
                            description: item.descricao,
                        };
                        return (
                            <ExercicioComponent
                                key={item.id ? item.id.toString() : idx}
                                delete={() => {
                                    setIsExercises(item)
                                    setVisibleModalDelete(prev => !prev)
                                }}
                                update={() => {
                                    setIsExercises(item)
                                    setVisibleModalUpdate(prev => !prev)
                                }}
                                dataExercise={mappedItem}
                                foto={item.foto}
                            />
                        );
                    })
                ) : (
                    <p className="text-gray-500 mt-4 font-poppins-Medium">Não há exercícios.</p>
                )}

            </div>
        </div>
    )
}