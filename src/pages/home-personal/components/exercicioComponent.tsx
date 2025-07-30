import { IconeExcluirTreino } from "@/assets/icons/icon-excluir-treino";
import { IconeAtualizarTreino } from "@/assets/icons/icone-atualizar-treino";
import { ExercicioDTO } from "@/types/type-Treino";
import { useEffect } from "react";

type functionButtons = {
    update?: () => void,
    delete: () => void,
    dataExercise: ExercicioDTO
    foto?: File
}


export function ExercicioComponent(data: functionButtons) {
    const previewFoto = data.foto ? URL.createObjectURL(data.foto) : 'url(#)';

    useEffect(() => {
        console.log("previewFoto: ", previewFoto)
    }, [previewFoto])
    return (
        <div className="w-[95%] max-w-[95%] max-h-28 overflow-hidden overflow-x-hidden bg-verde-600 p-3 h-28 py flex items-center shadow shadow-black/30 rounded-lg justify-between border border-black/30">
            <div className="flex">
                <div
                    style={{
                        backgroundImage: `url(${previewFoto})`,
                        backgroundSize: "cover",
                        backgroundPosition: 'center'
                    }}
                    className="h-20 w-20  aspect-square rounded-full bg-white-100 border-3 mt-1 border-verde-100"
                ></div>
                <div className="flex-col flex w-4/5 justify-center font-Poppins font-bold pl-3 text-verde-200 -space-y-1.5">
                    <h1 className="text-lg font-Poppins-Bold ">{data.dataExercise.name}</h1>
                    <h2 className="font font-light text-[11px] pl-0.5">{data.dataExercise.series} Séries X {data.dataExercise.reps} Repetições</h2>
                    <h1 className="font font-light text-[12px] break-words mt-3 pl-0.5 text-verde-200">
                        {data.dataExercise.description.length > 50
                            ? data.dataExercise.description.slice(0, 50) + '...'
                            : data.dataExercise.description}
                    </h1>
                </div>
            </div>

            {/* Icones*/}
            <div className="flex space-x-2 items-center justify-center">
                {/* Icone atualizar */}
                <button
                    onClick={data.update}
                    className="p-2 h-[2.1rem] w-[2.1rem] rounded-lg bg-[#FACC15] flex items-center justify-center shadow shadow-black/20 hover:bg-yellow-300 cursor-pointer duration-500">
                    <IconeAtualizarTreino />
                </button>
                {/* Icone Excluir */}
                <button
                    onClick={data.delete}
                    className="p-2 h-[2.1rem] w-[2.1rem] rounded-lg bg-[#EF4444] flex items-center justify-center shadow shadow-black/20 hover:bg-red-600 cursor-pointer duration-500">
                    <IconeExcluirTreino />
                </button>
            </div>
        </div>
    )
}