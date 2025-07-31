'use client'
import { IconeExcluirTreino } from "@/assets/icons/icon-excluir-treino";
import { IconeAtualizarTreino } from "@/assets/icons/icone-atualizar-treino";
import { exerciseDTO } from "@/schemas/schema-exercicio";
import { ExercicioDTO } from "@/types/type-Treino";
import { BaseUrlFoto } from "@/utils/base-url-foto";
import { useEffect, useState } from "react";

type functionButtons = {
    update?: () => void,
    delete: () => void,
    dataExercise: exerciseDTO
    foto?: File
}


export function ExercicioComponent(data: functionButtons) {
    const [previewFoto, setPreviewFoto] = useState<string>("");
    
        useEffect(() => {
        if (data.foto instanceof File) {
          const objectUrl = URL.createObjectURL(data.foto);
          setPreviewFoto(objectUrl);
    
          return () => URL.revokeObjectURL(objectUrl);
        } else {
          setPreviewFoto(BaseUrlFoto(String(data.foto)));
        }
      }, [data.foto]);

    return (
        <div className="w-full overflow-hidden relative  bg-verde-600 p-3 h-28 flex items-center shadow shadow-black/30 rounded-lg justify-between border border-black/30">
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
                    <h1 className="text-lg font-Poppins-Bold ">{data.dataExercise.nome}</h1>
                    <h2 className="font font-light text-[11px] pl-0.5">{data.dataExercise.execucoes} Séries X {data.dataExercise.repeticoes} Repetições</h2>
                    <h1 className="font font-light text-[12px] break-words mt-3 pl-0.5 text-verde-200">
                        {data.dataExercise.descricao.length > 50
                            ? data.dataExercise.descricao.slice(0, 50) + '...'
                            : data.dataExercise.descricao}
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